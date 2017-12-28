package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.MeasurementMapper;
import com.ejunhai.qutihuo.statistical.dto.MeasurementDto;
import com.ejunhai.qutihuo.statistical.model.Measurement;
import com.ejunhai.qutihuo.statistical.service.MeasurementService;
import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

public class MeasurementServiceImpl implements MeasurementService{

    @Resource
    private MeasurementMapper measurementMapper;

    @Override
    public  MeasurementDto acquireMeasurement(){
        MeasurementDto measurementDto = new MeasurementDto();

        List<Measurement> provinceMeasurement = measurementMapper.readProvinceMeasurements();
        List<MeasurementDto.MeasureObj> measureObjList = new ArrayList<MeasurementDto.MeasureObj>();
        for(Measurement measurement:provinceMeasurement){
            MeasurementDto.MeasureObj measureObj = measurementDto.new MeasureObj();
            List<Integer> values = new ArrayList<Integer>();
            measureObj.setName(measurement.getProvince());
            values.add(measurement.getMs_shgy());
            values.add(measurement.getMs_sqjlbz());
            values.add(measurement.getMs_zxjdgzjlbz());
            values.add(measurement.getMs_zgjlbz());
            measureObj.setValue(values);
            measureObjList.add(measureObj);
        }
        measurementDto.setMeasureObjList(measureObjList);
        return measurementDto;
    }
}
