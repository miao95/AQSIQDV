package com.ejunhai.qutihuo.statistical.dto;

import java.util.List;

public class StandardReviseDto {

    private List<String> timeLineData;

    private List<String> yAxisData;

    private List<List<SumarryObj>> seriesOneData;

    private List<List<SumarryObj>> seriesTwoData;

    private List<Integer> seriesThreeData;





    private class SumarryObj {
        private String name;
        private Integer value;
    }
}
