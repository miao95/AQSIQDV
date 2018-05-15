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
     * 根据省份和年查找记录
     *
     * @param province
     * @return
     */
    public List<Measurement> findByParams(String province, Integer year);
}
