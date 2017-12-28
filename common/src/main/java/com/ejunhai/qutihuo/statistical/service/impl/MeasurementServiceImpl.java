package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.MeasurementMapper;
import com.ejunhai.qutihuo.statistical.dto.MeasurementDto;
import com.ejunhai.qutihuo.statistical.model.Measurement;
import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import com.ejunhai.qutihuo.statistical.service.MeasurementService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.*;

@Service("measurementService")
public class MeasurementServiceImpl implements MeasurementService{

    @Resource
    private MeasurementMapper measurementMapper;

    @Override
    public  MeasurementDto acquireMeasurement(){
        MeasurementDto measurementDto = new MeasurementDto();

        List<Integer> years = measurementMapper.getDistinctYear();		//step timeLineData
        measurementDto.setTimeLineData(timeLineData(years));

        List<Measurement> provinceMeasurement = measurementMapper.readProvinceMeasurements();       //step measureObjYearList
        Map<Integer,Set<Measurement>> yearProvinceMeasurement = mapping4yearMeasurement(provinceMeasurement);
        List<List<MeasurementDto.MeasureObj>>  measureObjList = mapping4List(yearProvinceMeasurement,years);
        measurementDto.setMeasureObjYearList(measureObjList);
        return measurementDto;
    }

    List<String> timeLineData(List<Integer> years){
        List<String> result = new ArrayList<String>();
        for(Integer year:years){
            result.add(String.valueOf(year)+"-01-01");
        }
        return result;
    }

    Map<Integer,Set<Measurement>> mapping4yearMeasurement(List<Measurement> measurementList){
        Map<Integer,Set<Measurement>> result = new HashMap<Integer,Set<Measurement>>();
        for (Measurement measurement:measurementList) {
            Integer K = measurement.getYear();
            Set<Measurement> V = result.get(K);
            if(null==V){
                V = new TreeSet<Measurement>();
                V.add(measurement);
                result.put(K,V);
            }else{
                result.get(K).add(measurement);
            }
        }
        return result;
    }

    List<List<MeasurementDto.MeasureObj>> mapping4List(Map<Integer,Set<Measurement>> yearProvinceMap, List<Integer> years){
        List<List<MeasurementDto.MeasureObj>> resultList = new ArrayList<List<MeasurementDto.MeasureObj>>();
        for(Integer year:years){
            List<MeasurementDto.MeasureObj> list = new ArrayList<MeasurementDto.MeasureObj>();
            Set<Measurement> provinceMeasurement = yearProvinceMap.get(year);
            Iterator<Measurement> iterator = provinceMeasurement.iterator();
            while(iterator.hasNext()){
                MeasurementDto.MeasureObj  measureObj = new MeasurementDto().new MeasureObj();
                List<Integer> values = new ArrayList<Integer>();
                Measurement measurement = iterator.next();
                String name = measurement.getProvince();
                values.add(measurement.getMs_shgy());
                values.add(measurement.getMs_sqjlbz());
                values.add(measurement.getMs_zxjdgzjlbz());
                values.add(measurement.getMs_zgjlbz());
                measureObj.setName(name);
                measureObj.setValue(values);
                list.add(measureObj);
            }
            resultList.add(list);
        }
        return resultList;
    }
}
