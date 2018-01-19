package com.ejunhai.qutihuo.statistical.dto;

import java.util.List;

public class MeasurementDto2 {

    private List<String> timeLineData;

    private List<String> yAxisData;

    private  List<List<List<Integer>>>  measurementStandardList;

    public List<String> getyAxisData() {
        return yAxisData;
    }

    public List<List<List<Integer>>> getMeasurementStandardList() {
        return measurementStandardList;
    }

    public void setMeasurementStandardList(List<List<List<Integer>>> measurementStandardList) {
        this.measurementStandardList = measurementStandardList;
    }

    public void setyAxisData(List<String> yAxisData) {
        this.yAxisData = yAxisData;
    }

    public List<String> getTimeLineData() {
        return timeLineData;
    }

    public void setTimeLineData(List<String> timeLineData) {
        this.timeLineData = timeLineData;
    }

}
