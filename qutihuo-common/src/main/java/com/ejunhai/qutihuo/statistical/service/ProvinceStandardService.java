package com.ejunhai.qutihuo.statistical.service;

import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;

import java.util.List;

/**
 * 
 * SystemUser Service 接口
 * 
 * @author parcel
 * 
 * @date 2014-12-10 21:22:36
 * 
 */
public interface ProvinceStandardService {

	/**
	 * 获取全部ProvinceStandard
	 *
	 * @return ProvinceStandard对象数组
	 */
	public List<ProvinceStandard> read();

	/**
	 * 获取某一年的ProvinceStandard
	 *
	 * @return ProvinceStandard对象数组
	 */
	public List<ProvinceStandard> read(Integer year);

	/**
	 * 获取所有包含的年份
	 *
	 * @return 年份数组
	 */
	public List<Integer> getDistinctYear();

}
