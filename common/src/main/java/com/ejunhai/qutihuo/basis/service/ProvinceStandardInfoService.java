package com.ejunhai.qutihuo.basis.service;

import com.ejunhai.qutihuo.basis.model.ProvinceStandard;

import java.util.List;

/**
 * 
 * ProvinceStandard Service 接口
 * 
 * @author parcel
 * 
 * @date 2015-04-09 20:22:19
 * 
 */
public interface ProvinceStandardInfoService {

	/**
	 * 根据Id获取ProvinceStandard
	 * 
	 * @param id
	 * @return
	 */
	public ProvinceStandard read(Integer id);

	/**
	 * 根据省份和年查找记录
	 * 
	 * @param province
	 * @return
	 */
	public List<ProvinceStandard> findByProvince(String province, String year);



}
