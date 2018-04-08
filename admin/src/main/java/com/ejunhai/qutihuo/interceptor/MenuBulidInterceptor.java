package com.ejunhai.qutihuo.interceptor;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ejunhai.qutihuo.common.menu.Menu;
import com.ejunhai.qutihuo.common.utils.CommonUtils;
import org.apache.log4j.Logger;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.ejunhai.qutihuo.common.constant.CommonConstant;
import com.ejunhai.qutihuo.system.model.SystemAction;
import com.ejunhai.qutihuo.system.model.SystemPrivilage;
import com.ejunhai.qutihuo.system.service.SystemActionService;
import com.ejunhai.qutihuo.system.service.SystemPrivilageService;
import com.ejunhai.qutihuo.system.utils.SystemActionUtil;
import com.ejunhai.qutihuo.system.utils.SystemPrivilageUtil;
import com.ejunhai.qutihuo.utils.FrontUtil;
import com.ejunhai.qutihuo.utils.SessionManager;

public class MenuBulidInterceptor implements HandlerInterceptor {

	/** Logger available to subclasses */
	protected final Logger logger = Logger.getLogger(this.getClass().getName());

	@Resource
	private SystemActionService systemActionService;

	@Resource
	private SystemPrivilageService systemPrivilageService;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object arg2) throws Exception {
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object arg2, ModelAndView arg3) throws Exception {
		// 处理异步请求-无需准备菜单数据
		if (FrontUtil.isAjax(request) || SessionManager.get(request) == null) {
			return;
		}

		// 获取当前用户所拥有的action列表
		String roleIds = SessionManager.get(request).getRoleIds();
		List<SystemPrivilage> authorizedPrivilageList = systemPrivilageService.getSystemPrivilageListByRoleIds(roleIds);
		List<Integer> authorizedActionIdList = SystemPrivilageUtil.getActionIdList(authorizedPrivilageList);
		List<SystemAction> authorizedActionList = systemActionService.getSystemActionListByIds(authorizedActionIdList);

		// 过滤非菜单节点-根据用户角色获取用户权限列表
		List<SystemAction> rootMenuSystemActionList = new ArrayList<SystemAction>();
		for (SystemAction systemAction : authorizedActionList) {
			if (CommonConstant.ROOT_MENU_ID.equals(systemAction.getParentId())) {
				rootMenuSystemActionList.add(systemAction);
			}
		}

		// 按根节点分组
		// 为一级菜单设置子菜单，getChild是递归调用的
		for (SystemAction menu : rootMenuSystemActionList) {
			menu.setChildMenus(CommonUtils.getChild(menu.getId(), authorizedActionList));
		}

		// 按根节点分组
		/*Map<String, Menu> systemActionMap = new HashMap<>();
		for (SystemAction rootSystemAction : rootMenuSystemActionList) {
			for (SystemAction systemAction : authorizedActionList) {
				if (systemAction.getParentId().equals(rootSystemAction.getId())) {
					if(CommonConstant.SUBMENU_ACTION_ID.equals(systemAction.getActionType())){
						List<SystemAction> systemActionGroupList = new ArrayList<SystemAction>();
						for (SystemAction action : authorizedActionList) {
							if (action.getParentId().equals(systemAction.getId())){
								systemActionGroupList.add(action);
							}
						}
						Menu menu = new Menu(false);
						menu.setMenuNode(systemAction);
						menu.setMenuList(systemActionGroupList);
						systemActionMap.put(String.valueOf(rootSystemAction.getId()),menu);
					}else{
						Menu menu = new Menu(true);
						menu.setMenuNode(systemAction);
						systemActionMap.put(String.valueOf(rootSystemAction.getId()),menu);
					}
				}
			}
		}*/

		if(arg3!=null){
			arg3.addObject("_user", SessionManager.get(request));
			//arg3.addObject("menuSystemActionMap", systemActionMap);   //根节点到二、三级节点的映射
			//arg3.addObject("rootMenuSystemActionList", rootMenuSystemActionList);		//所有的根节点
			arg3.addObject("menuList", rootMenuSystemActionList); //最后的导航树
			arg3.addObject("menuRouteMap", SystemActionUtil.getRouteMapByUrl(authorizedActionList, request.getRequestURI())); //请求url的一个路由
			arg3.addObject("_referUrl", request.getHeader("referer"));
		}

	}

	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
	}

}
