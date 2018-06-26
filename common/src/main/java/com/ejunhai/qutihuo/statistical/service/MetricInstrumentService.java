package com.ejunhai.qutihuo.statistical.service;

import com.ejunhai.qutihuo.statistical.dto.StandardReviseDto;
import com.ejunhai.qutihuo.statistical.model.MetricInstrument;
import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;

import java.util.List;

/**
 * 
 * MetricInstrument Service 接口
 * 
 * @author parcel
 * 
 * @date 2014-12-10 21:22:36
 * 
 */
public interface MetricInstrumentService {


	/**
	 * 根据省份和年查找记录
	 *
	 * @param province
	 * @return
	 */
	public List<MetricInstrument> findByParams(String province, Integer year);

	/**
	 * 获取所有包含的年份
	 *
	 * @return 年份数组
	 */
	public List<Integer> getDistinctYear();

	/**
	 * 获取所有包含的省份
	 *
	 * @return 省份数组
	 */
	public List<String> getDistinctProvince();


}
