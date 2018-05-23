package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.MeasurementMapper;
import com.ejunhai.qutihuo.statistical.dao.SpecialDeviceMapper;
import com.ejunhai.qutihuo.statistical.dto.MeasurementDto;
import com.ejunhai.qutihuo.statistical.dto.MeasurementDto2;
import com.ejunhai.qutihuo.statistical.model.Measurement;
import com.ejunhai.qutihuo.statistical.model.SpecialDevice;
import com.ejunhai.qutihuo.statistical.service.MeasurementService;
import com.ejunhai.qutihuo.statistical.service.SpecialDeviceService;
import com.ejunhai.qutihuo.statistical.utils.ServerUtils;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

@Service("specialDeviceService")
public class SpecialDeviceServiceImpl implements SpecialDeviceService {

    @Resource
    private SpecialDeviceMapper specialDeviceMapper;



    @Override
    public List<SpecialDevice> findByParams(String province, Integer year) {
        return specialDeviceMapper.findByParams(province, year);
    }
}
