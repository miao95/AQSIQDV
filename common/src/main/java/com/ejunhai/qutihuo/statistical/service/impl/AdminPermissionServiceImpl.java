package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.AdminpermissionMapper;
import com.ejunhai.qutihuo.statistical.model.Adminpermission;
import com.ejunhai.qutihuo.statistical.model.AdminpermissionExample;
import com.ejunhai.qutihuo.statistical.service.AdminPermissionService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("adminPermissionService")
public class AdminPermissionServiceImpl implements AdminPermissionService {

    @Resource
    private AdminpermissionMapper adminpermissionMapper;


    @Override
    public List<Adminpermission> findByParams(String province, Integer year) {
        AdminpermissionExample example = new AdminpermissionExample();
        AdminpermissionExample.Criteria criteria1 = example.createCriteria();
        if (province != null && !province.equals("")) {
            criteria1.andProvinceEqualTo(province);
        }
        criteria1.andYearEqualTo(year);
        return adminpermissionMapper.selectByExample(example);
    }

    @Override
    public List<Integer> getDistinctYear() {
        return adminpermissionMapper.getDistinctYear();
    }

    @Override
    public List<String> getDistinctProvince() {
        return adminpermissionMapper.getDistinctProvince();
    }
}
