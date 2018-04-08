package com.ejunhai.qutihuo.common.utils;

import com.ejunhai.qutihuo.common.constant.CommonConstant;
import com.ejunhai.qutihuo.common.menu.Menu;
import com.ejunhai.qutihuo.system.model.SystemAction;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * 通用工具类
 * 
 * @author parcel
 * 
 * @date 2015-1-1
 * 
 */
public class CommonUtils {

	/**
	 * 获取分页
	 * 
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	public static int[] getPager(Integer pageNo, Integer pageSize) {
		// 默认20条一页
		pageSize = (pageSize == null || pageSize <= 0) ? 20 : pageSize;

		// 默认页码
		pageNo = (pageNo == null || pageNo <= 0) ? 1 : pageNo;

		// 计算开始位置
		Integer start = (pageNo - 1) * pageSize;

		return new int[] { start, pageSize };
	}

	/**
	 * 获取子列表
	 * 
	 * @param list
	 * @param start
	 * @param limit
	 * @return
	 */
	public static <T> List<T> getSubList(List<T> list, int start, int limit) {
		if (CollectionUtils.isEmpty(list)) {
			return new ArrayList<T>(0);
		}

		int listLength = list.size();
		if (start > listLength - 1) {
			return new ArrayList<T>();
		}

		limit = start + limit > listLength ? listLength - start : limit;
		return list.subList(start, start + limit);
	}

	/**
	 * 将字符串按分隔符分割并转成整型列表
	 * 
	 * @param ids
	 * @param separator
	 * @return
	 */
	public static List<Integer> str2IntList(String ids, String separator) {
		List<Integer> idList = new ArrayList<Integer>();
		if (StringUtils.isBlank(ids)) {
			return idList;
		}

		String[] arrId = ids.split("\\" + separator);
		for (String id : arrId) {
			idList.add(Integer.parseInt(id));
		}
		return idList;
	}

	/**
	 * 递归查找导航节点子菜单
	 *
	 * @param id
	 *            当前菜单id
	 * @param rootMenu
	 *            要查找的列表
	 * @return
	 */
	public static List<SystemAction> getChild(int id, List<SystemAction> rootMenu) {
		// 子菜单
		List<SystemAction> childList = new ArrayList<>();
		for (SystemAction menu : rootMenu) {
			// 遍历所有节点，将父菜单id与传过来的id比较
			if (!menu.getParentId().equals(CommonConstant.ROOT_MENU_ID)) {
				if (menu.getParentId().equals(id)) {
					childList.add(menu);
				}
			}
		}
		// 把子菜单的子菜单再循环一遍
		for (SystemAction menu : childList) {// actionType为1子菜单还有子菜单
			if (menu.getActionType().equals(CommonConstant.SUBMENU_ACTION_ID)) {
				// 递归
				menu.setChildMenus(getChild(menu.getId(), rootMenu));
			}
		} // 递归退出条件
		if (childList.size() == 0) {
			return null;
		}
		return childList;
	}
}
