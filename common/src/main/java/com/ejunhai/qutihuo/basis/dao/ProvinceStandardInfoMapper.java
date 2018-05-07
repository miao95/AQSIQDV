package com.ejunhai.qutihuo.basis.dao;

import com.ejunhai.qutihuo.basis.model.ProvinceStandard;

import java.util.List;

/**
 * ProvinceStandardInfoMapper
 * 
 * @author parcel
 * 
 * @date 2015-04-09 20:22:19
 * 
 */
public interface ProvinceStandardInfoMapper {

	/**
	 * 根据Id获取ProvinceStandardMapper
	 * 
	 * @param id
	 * @return
	 */
	public ProvinceStandard read(Integer id);


	/**
	 * 根据省份获取
	 * 
	 * @param province
	 * @return
	 */
	public List<ProvinceStandard> findByParams(String province, String year);


}
