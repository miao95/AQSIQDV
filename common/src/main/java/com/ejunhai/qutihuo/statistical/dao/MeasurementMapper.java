package com.ejunhai.qutihuo.statistical.dao;

import com.ejunhai.qutihuo.statistical.model.Measurement;
import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MeasurementMapper {
    /**
     * 获取各个省份的ProvinceStandard
     *
     * @return ProvinceStandard对象数组
     */
    List<Measurement> readProvinceMeasurements();

    /**
     * 获取所有包含的年份
     *
     * @return 年份数组
     */
    List<Integer> getDistinctYear();

    /**
     * 获取所有包含的省份
     *
     * @return 省份数组
     */
    List<String> getDistinctProvince();

    /**
     * 根据省份和年份获取
     *
     * @param province
     * @param year
     * @return
     */
    List<Measurement> findByParams(@Param("province") String province, @Param("year") Integer year);
}
