package com.ejunhai.qutihuo.statistical.dao;

import com.ejunhai.qutihuo.statistical.model.MetricInstrument;
import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 计量仪器表
 *
 * @author Leo
 *
 * @date 2017-12-06 21:18:30
 *
 */

public interface MetricInstrumentMapper {

    /**
     * 获取全部MetricInstrument
     *
     * @return MetricInstrument对象数组
     */
    List<MetricInstrument> read();

    /**
     * 获取全国统计的MetricInstrument
     *
     * @return MetricInstrument对象数组
     */
    List<MetricInstrument> readNationalStatistics();

    /**
     * 获取某一年的MetricInstrument
     *
     * @return MetricInstrument对象数组
     */
    List<MetricInstrument> readByYear(Integer year);

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
     List<MetricInstrument> findByParams(@Param("province") String province, @Param("year") Integer year);

}
