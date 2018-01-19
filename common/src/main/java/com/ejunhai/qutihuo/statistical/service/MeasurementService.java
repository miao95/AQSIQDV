package com.ejunhai.qutihuo.statistical.service;

import com.ejunhai.qutihuo.statistical.dto.MeasurementDto;
import com.ejunhai.qutihuo.statistical.dto.MeasurementDto2;

public interface MeasurementService {
    /**
     * 计量标准数据
     *
     * @return MeasurementDto
     */
    MeasurementDto acquireMeasurement();

    MeasurementDto2 acquireMeasurement2();
}
