package com.ejunhai.qutihuo.system.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.ejunhai.qutihuo.system.dao.SystemUserMapper;
import com.ejunhai.qutihuo.system.dto.SystemUserDto;
import com.ejunhai.qutihuo.system.model.SystemAction;
import com.ejunhai.qutihuo.system.model.SystemPrivilage;
import com.ejunhai.qutihuo.system.model.SystemUser;
import com.ejunhai.qutihuo.system.service.SystemActionService;
import com.ejunhai.qutihuo.system.service.SystemPrivilageService;
import com.ejunhai.qutihuo.system.service.SystemUserService;
import com.ejunhai.qutihuo.system.utils.SystemPrivilageUtil;

/**
 * SystemUser Service 实现类
 * 
 * @author parcel
 * 
 * @date 2014-12-10 21:22:36
 * 
 */
@Service("systemUserService")
public class SystemUserServiceImpl implements SystemUserService {

    @Resource
    private SystemUserMapper systemUserMapper;

    @Resource
    private SystemPrivilageService systemPrivilageService;

    @Resource
    private SystemActionService systemActionService;

    @Override
    public SystemUser read(Integer id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public void insert(SystemUser systemUser) {
        // TODO Auto-generated method stub

    }

    @Override
    public void update(SystemUser systemUser) {
        // TODO Auto-generated method stub

    }

    @Override
    public void delete(Integer id) {
        // TODO Auto-generated method stub

    }

    @Override
    public Integer querySystemUserCount(SystemUserDto systemUserDto) {
        return systemUserMapper.querySystemUserCount(systemUserDto);
    }

    @Override
    public List<SystemUser> querySystemUserList(SystemUserDto systemUserDto) {
        return systemUserMapper.querySystemUserList(systemUserDto);
    }

    @Override
    public boolean verify(String loginName, String passwd) {
        // 验证账号密码和用户状态是否可用

        return false;
    }

    @Override
    public List<SystemAction> authorize(Integer userId) {
        // 获取用户角色
        SystemUser systemUser = this.read(userId);

        // 根据用户角色获取资源列表
        List<SystemPrivilage> systemPrivilageList = null;
        systemPrivilageList = systemPrivilageService.getSystemPrivilageListByRoleIds(systemUser.getRoleIds());
        List<Integer> actionIdList = SystemPrivilageUtil.getActionIdList(systemPrivilageList);
        List<SystemAction> systemActionList = systemActionService.getSystemActionListByIds(actionIdList);

        return systemActionList;
    }

}