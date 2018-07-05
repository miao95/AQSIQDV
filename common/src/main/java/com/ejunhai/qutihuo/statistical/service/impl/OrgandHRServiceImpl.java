package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.OrgandHRMapper;
import com.ejunhai.qutihuo.statistical.model.OrgandHR;
import com.ejunhai.qutihuo.statistical.service.OrgandHRService;
import com.ejunhai.qutihuo.statistical.utils.ServerUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

@Service("OrgandHRService")
public class OrgandHRServiceImpl implements OrgandHRService {

    @Resource
    public OrgandHRMapper organdHRMapper;

    @Override
    public List<OrgandHR> getByYearProvince(String province, Integer year){
        return organdHRMapper.getByYearProvince(province,year);
    }

    @Override
    public List<String> getYearAll(){
        return organdHRMapper.getYearAll();
    }

    @Override
    public List<String> getProvinceAll(){
        return organdHRMapper.getProvinceAll();
    }
}

