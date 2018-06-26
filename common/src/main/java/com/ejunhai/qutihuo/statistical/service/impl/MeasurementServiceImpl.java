package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.MeasurementMapper;
import com.ejunhai.qutihuo.statistical.dto.MeasurementDto;
import com.ejunhai.qutihuo.statistical.dto.MeasurementDto2;
import com.ejunhai.qutihuo.statistical.model.Measurement;
import com.ejunhai.qutihuo.statistical.service.MeasurementService;
import com.ejunhai.qutihuo.statistical.utils.ServerUtils;
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

        List<Measurement> provinceMeasurement = measurementMapper.readProvinceMeasurements();
        Map<Integer,Set<Measurement>> yearProvinceMeasurement = mapping4yearMeasurement(provinceMeasurement);
        Map<String,List<List<MeasurementDto.MeasureObj>>>  result = mapping2result(yearProvinceMeasurement,years);
        measurementDto.setMeasurementStandard(result.get("measurementStandard"));          //step measurementStandard
        measurementDto.setMeasurementAuthorized(result.get("measurementAuthorized"));          //step measurementAuthorized
        measurementDto.setNewInstrument(result.get("newInstrument"));          //step newInstrument
        measurementDto.setMaintainInstrument(result.get("maintainInstrument"));          //step maintainInstrument
        return measurementDto;
    }

    @Override
    public  MeasurementDto2 acquireMeasurement2(){
        MeasurementDto2 measurementDto = new MeasurementDto2();

        List<Integer> years = measurementMapper.getDistinctYear();		//step timeLineData
        measurementDto.setTimeLineData(timeLineData(years));

        List<Measurement> provinceMeasurement = measurementMapper.readProvinceMeasurements();
        List<String> yAxisData = ServerUtils.set2List(yAxisData(provinceMeasurement));
        measurementDto.setyAxisData(yAxisData);   //step yAxisData

        Map<Integer,Set<Measurement>> yearProvinceMeasurement = mapping4yearMeasurement(provinceMeasurement);
        Map<String,List<List<List<Integer>>>>  result = mapping2result2(yearProvinceMeasurement,years,yAxisData);
        measurementDto.setMeasurementStandardList(result.get("measurementStandard"));          //step measurementStandard
        return measurementDto;
    }

    List<String> timeLineData(List<Integer> years){
        List<String> result = new ArrayList<String>();
        for(Integer year:years){
            result.add(String.valueOf(year));
        }
        return result;
    }

    Set<String> yAxisData(List<Measurement> data){
        TreeSet<String> yAxisData = new TreeSet<String>();
        for(Measurement measurement:data){
            yAxisData.add(measurement.getProvince());
        }
        return yAxisData;
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

    Map<String,List<List<MeasurementDto.MeasureObj>>> mapping2result(Map<Integer,Set<Measurement>> yearProvinceMap, List<Integer> years){
        Map<String,List<List<MeasurementDto.MeasureObj>>> resultMap = new HashMap<String, List<List<MeasurementDto.MeasureObj>>>();
        List<List<MeasurementDto.MeasureObj>> measurementStandard = new ArrayList<List<MeasurementDto.MeasureObj>>();
        List<List<MeasurementDto.MeasureObj>> measurementAuthorized = new ArrayList<List<MeasurementDto.MeasureObj>>();
        List<List<MeasurementDto.MeasureObj>> newInstrument = new ArrayList<List<MeasurementDto.MeasureObj>>();
        List<List<MeasurementDto.MeasureObj>> maintainInstrument = new ArrayList<List<MeasurementDto.MeasureObj>>();
        for(Integer year:years){
            List<MeasurementDto.MeasureObj> yearMeasurementStandard = new ArrayList<MeasurementDto.MeasureObj>();
            List<MeasurementDto.MeasureObj> yearMeasurementAuthorized = new ArrayList<MeasurementDto.MeasureObj>();
            List<MeasurementDto.MeasureObj> yearNewInstrument = new ArrayList<MeasurementDto.MeasureObj>();
            List<MeasurementDto.MeasureObj> yearMaintainInstrument = new ArrayList<MeasurementDto.MeasureObj>();
            Set<Measurement> provinceMeasurement = yearProvinceMap.get(year);
            Iterator<Measurement> iterator = provinceMeasurement.iterator();
            while(iterator.hasNext()){
                MeasurementDto.MeasureObj  standardObj = new MeasurementDto().new MeasureObj();
                List<Integer> standardValues = new ArrayList<Integer>();
                Measurement measurement = iterator.next();
                String name = measurement.getProvince();
                standardValues.add(measurement.getMs_shgy());
                standardValues.add(measurement.getMs_sqjlbz());
                standardValues.add(measurement.getMs_zxjdgzjlbz());
                standardValues.add(measurement.getMs_zgjlbz());
                standardObj.setName(name);
                standardObj.setValue(standardValues);
                yearMeasurementStandard.add(standardObj);

                MeasurementDto.MeasureObj  authorizedObj = new MeasurementDto().new MeasureObj();
                List<Integer> authorizedValues = new ArrayList<Integer>();
                authorizedValues.add(measurement.getJlsq_yfszjljdjsjg());
                authorizedValues.add(measurement.getJlsq_yfsqjljdjg());
                authorizedValues.add(measurement.getJlsq_qtcdzxsqjdrwjg());
                authorizedValues.add(measurement.getJlsq_qtcdzxsqjdrwxm());
                authorizedValues.add(measurement.getJlsq_sqcdjlqjxspjjg());
                authorizedValues.add(measurement.getJlsq_sqcdjlqjxspjxm());
                authorizedObj.setName(name);
                authorizedObj.setValue(authorizedValues);
                yearMeasurementAuthorized.add(authorizedObj);

                MeasurementDto.MeasureObj  newInstrumentObj = new MeasurementDto().new MeasureObj();
                List<Integer> newInstrumentValues= new ArrayList<Integer>();
                newInstrumentValues.add(measurement.getJlqjxcp_xspzzs_year());
                newInstrumentValues.add(measurement.getJlqjxcp_xspzzs_all());
                newInstrumentObj.setName(name);
                newInstrumentObj.setValue(newInstrumentValues);
                yearNewInstrument.add(newInstrumentObj);

                MeasurementDto.MeasureObj  maintainInstrumentObj = new MeasurementDto().new MeasureObj();
                List<Integer> maintainInstrumentValues= new ArrayList<Integer>();
                maintainInstrumentValues.add(measurement.getZzxljlqj_zzxkz_add());
                maintainInstrumentValues.add(measurement.getZzxljlqj_zzxkz_reduce());
                maintainInstrumentValues.add(measurement.getZzxljlqj_zzxkz_all());
                maintainInstrumentValues.add(measurement.getZzxljlqj_xlxkz_add());
                maintainInstrumentValues.add(measurement.getZzxljlqj_xlxkz_reduce());
                maintainInstrumentValues.add(measurement.getZzxljlqj_xlxkz_all());
                maintainInstrumentObj.setName(name);
                maintainInstrumentObj.setValue(maintainInstrumentValues);
                yearMaintainInstrument.add(maintainInstrumentObj);
            }
            measurementStandard.add(yearMeasurementStandard);
            measurementAuthorized.add(yearMeasurementAuthorized);
            newInstrument.add(yearNewInstrument);
            maintainInstrument.add(yearMaintainInstrument);
        }
        resultMap.put("measurementStandard",measurementStandard);
        resultMap.put("measurementAuthorized",measurementAuthorized);
        resultMap.put("newInstrument",newInstrument);
        resultMap.put("maintainInstrument",maintainInstrument);
        return resultMap;
    }

    Map<String,List<List<List<Integer>>>> mapping2result2(Map<Integer,Set<Measurement>> yearProvinceMap, List<Integer> years,List<String> yAxisData){
        Map<String,List<List<List<Integer>>>> resultMap = new HashMap<>();
        List<List<List<Integer>>> measurementStandard = new ArrayList<>();
        for(Integer year:years){
            List<List<Integer>> yearMeasurement = new ArrayList<>();
            List<Integer> list1 = new ArrayList<>();
            List<Integer> list2 = new ArrayList<>();
            List<Integer> list3 = new ArrayList<>();
            List<Integer> list4 = new ArrayList<>();
            Set<Measurement> provinceMeasurement = yearProvinceMap.get(year);
            completment(provinceMeasurement,yAxisData);
            Iterator<Measurement> iterator = provinceMeasurement.iterator();
            while(iterator.hasNext()){
                Measurement measurement = iterator.next();
                list1.add(measurement.getMs_shgy());
                list2.add(measurement.getMs_sqjlbz());
                list3.add(measurement.getMs_zxjdgzjlbz());
                list4.add(measurement.getMs_zgjlbz());
            }
            yearMeasurement.add(list1);
            yearMeasurement.add(list2);
            yearMeasurement.add(list3);
            yearMeasurement.add(list4);
            measurementStandard.add(yearMeasurement);
        }
        resultMap.put("measurementStandard",measurementStandard);
        return resultMap;
    }

    public void completment(Set<Measurement> data,List<String> province){
        int provinceSize = province.size();
        if(provinceSize!=data.size()){
            for(int i=0;i<provinceSize;i++){
                Measurement measurement = new Measurement();
                measurement.setProvince(province.get(i));
                data.add(measurement);
            }
        }
    }

    @Override
    public List<Measurement> findByParams(String province, Integer year) {
        return measurementMapper.findByParams(province, year);
    }

    @Override
    public List<Integer> getDistinctYear() {
        return measurementMapper.getDistinctYear();
    }

    @Override
    public List<String> getDistinctProvince() {
        return measurementMapper.getDistinctProvince();
    }


}
