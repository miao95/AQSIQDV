package com.ejunhai.qutihuo.statistical.dto;

import java.util.HashMap;
import java.util.List;

public class MeasurementDto {

    List<MeasureObj>  measureObjList;

    public List<MeasureObj> getMeasureObjList() {
        return measureObjList;
    }

    public void setMeasureObjList(List<MeasureObj> measureObjList) {
        this.measureObjList = measureObjList;
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
