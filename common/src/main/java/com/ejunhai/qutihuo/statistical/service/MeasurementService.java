package com.ejunhai.qutihuo.statistical.service;

import com.ejunhai.qutihuo.statistical.dto.MeasurementDto;
import com.ejunhai.qutihuo.statistical.dto.MeasurementDto2;
import com.ejunhai.qutihuo.statistical.model.Measurement;

import java.util.List;

public interface MeasurementService {
    /**
     * 计量标准数据
     *
     * @return MeasurementDto
     */
    MeasurementDto acquireMeasurement();

    MeasurementDto2 acquireMeasurement2();

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

    /**
     * 根据省份和年查找记录
     *
     * @param province
     * @return
     */
    public List<Measurement> findByParams(String province, Integer year);
}
