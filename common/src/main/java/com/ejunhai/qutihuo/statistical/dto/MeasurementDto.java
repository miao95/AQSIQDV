package com.ejunhai.qutihuo.statistical.dto;

import java.util.HashMap;
import java.util.List;

public class MeasurementDto {

    private List<String> timeLineData;

    private  List<List<MeasureObj>>  measureObjYearList;

    public List<String> getTimeLineData() {
        return timeLineData;
    }

    public void setTimeLineData(List<String> timeLineData) {
        this.timeLineData = timeLineData;
    }

    public List<List<MeasureObj>> getMeasureObjYearList() {
        return measureObjYearList;
    }

    public void setMeasureObjYearList(List<List<MeasureObj>> measureObjYearList) {
        this.measureObjYearList = measureObjYearList;
    }

    public class MeasureObj {
        private String name;
        private List<Integer> value;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public List<Integer> getValue() {
            return value;
        }

        public void setValue(List<Integer> value) {
            this.value = value;
        }
    }
}
