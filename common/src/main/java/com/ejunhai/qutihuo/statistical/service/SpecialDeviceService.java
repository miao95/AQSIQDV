package com.ejunhai.qutihuo.statistical.service;

import com.ejunhai.qutihuo.statistical.dto.MeasurementDto;
import com.ejunhai.qutihuo.statistical.dto.MeasurementDto2;
import com.ejunhai.qutihuo.statistical.model.Measurement;
import com.ejunhai.qutihuo.statistical.model.SpecialDevice;

import java.util.List;

public interface SpecialDeviceService {

    /**
     * 根据省份和年查找记录
     *
     * @param province
     * @return
     */
    public List<SpecialDevice> findByParams(String province, Integer year);
}
