package com.ejunhai.qutihuo.statistical.service;

import com.ejunhai.qutihuo.statistical.dto.MeasurementDto;
import com.ejunhai.qutihuo.statistical.dto.StandardReviseDto;
import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import org.apache.ibatis.annotations.Param;

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
	 * 计算页面StandardRevise的事物对象
	 *
	 * @return StandardReviseDto
	 */
	public StandardReviseDto acquireStandardRevise();

	/**
	 * 根据省份和年查找记录
	 *
	 * @param province
	 * @return
	 */
	public List<ProvinceStandard> findByParams(String province, Integer year);

}
