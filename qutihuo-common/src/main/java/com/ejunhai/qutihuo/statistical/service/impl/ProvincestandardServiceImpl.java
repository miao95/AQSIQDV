package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.ProvinceStandardMapper;
import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import com.ejunhai.qutihuo.statistical.service.ProvinceStandardService;
import com.ejunhai.qutihuo.system.dao.SystemUserMapper;
import com.ejunhai.qutihuo.system.dto.SystemUserDto;
import com.ejunhai.qutihuo.system.model.SystemAction;
import com.ejunhai.qutihuo.system.model.SystemPrivilage;
import com.ejunhai.qutihuo.system.model.SystemUser;
import com.ejunhai.qutihuo.system.service.SystemActionService;
import com.ejunhai.qutihuo.system.service.SystemPrivilageService;
import com.ejunhai.qutihuo.system.service.SystemUserService;
import com.ejunhai.qutihuo.system.utils.SystemPrivilageUtil;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.List;

/**
 * SystemUser Service 实现类
 * 
 * @author parcel
 * 
 * @date 2014-12-10 21:22:36
 * 
 */
@Service("provinceStandardService")
public class ProvincestandardServiceImpl implements ProvinceStandardService {

	@Resource
	private ProvinceStandardMapper provinceStandardMapper;

	@Override
	public List<ProvinceStandard> read() {
		return provinceStandardMapper.read();
	}

	@Override
	public List<ProvinceStandard> read(Integer year) {
		return provinceStandardMapper.read(year);
	}

	@Override
	public List<Integer> getDistinctYear(){
		return provinceStandardMapper.getDistinctYear();
	}
}
