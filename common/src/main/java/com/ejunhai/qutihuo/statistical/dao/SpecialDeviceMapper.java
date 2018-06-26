package com.ejunhai.qutihuo.statistical.dao;

import com.ejunhai.qutihuo.statistical.model.Measurement;
import com.ejunhai.qutihuo.statistical.model.SpecialDevice;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface SpecialDeviceMapper {

    /**
     * 获取所有包含的省份
     *
     * @return 省份数组
     */
    List<String> getDistinctProvince();

    /**
     * 获取所有包含的年份
     *
     * @return 年份数组
     */
    List<Integer> getDistinctYear();

    /**
     * 根据省份和年份获取
     *
     * @param province
     * @param year
     * @return
     */
    List<SpecialDevice> findByParams(@Param("province") String province, @Param("year") Integer year);
}
