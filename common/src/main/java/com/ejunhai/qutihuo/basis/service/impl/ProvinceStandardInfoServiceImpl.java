package com.ejunhai.qutihuo.basis.service.impl;

import java.util.List;

import javax.annotation.Resource;

import com.ejunhai.qutihuo.basis.model.ProvinceStandard;
import com.ejunhai.qutihuo.basis.service.ProvinceStandardInfoService;
import org.springframework.stereotype.Service;

import com.ejunhai.qutihuo.basis.dao.ProvinceStandardInfoMapper;

/**
 * ProvinceStandardInfoService Service 实现类
 * 
 * @author parcel
 * 
 * @date 2015-04-09 20:22:19
 * 
 */
@Service("provinceStandardInfoService")
public class ProvinceStandardInfoServiceImpl implements ProvinceStandardInfoService {

	@Resource
	private ProvinceStandardInfoMapper provinceStandardInfoMapper;

	@Override
	public ProvinceStandard read(Integer id) {
		return provinceStandardInfoMapper.read(id);
	}

	@Override
	public List<ProvinceStandard> findByProvince(String province, String year) {
		return provinceStandardInfoMapper.findByParams(province, year);
	}


}
