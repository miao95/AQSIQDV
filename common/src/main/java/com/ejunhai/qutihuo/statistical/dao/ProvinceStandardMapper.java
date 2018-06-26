package com.ejunhai.qutihuo.statistical.dao;

import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 地方标准信息表
 *
 * @author Leo
 *
 * @date 2017-12-06 21:18:30
 *
 */

public interface ProvinceStandardMapper {

    /**
     * 获取全部ProvinceStandard
     *
     * @return ProvinceStandard对象数组
     */
    List<ProvinceStandard> read();

    /**
     * 获取全国统计的ProvinceStandard
     *
     * @return ProvinceStandard对象数组
     */
    List<ProvinceStandard> readNationalStatistics();

    /**
     * 获取各个省份的ProvinceStandard
     *
     * @return ProvinceStandard对象数组
     */
    List<ProvinceStandard> readProvinceStatistics();

    /**
     * 获取全国统计最近一年2016年的ProvinceStandard
     *
     * @return ProvinceStandard对象数组
     */
    List<ProvinceStandard> readRecentNationalStatistics(Integer year);

    /**
     * 获取某一年的ProvinceStandard
     *
     * @return ProvinceStandard对象数组
     */
    List<ProvinceStandard> readByYear(Integer year);

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
     List<ProvinceStandard> findByParams(@Param("province") String province, @Param("year") Integer year);

}
