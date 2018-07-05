package com.ejunhai.qutihuo.statistical.service;
import com.ejunhai.qutihuo.statistical.model.OrgandHR;
import java.util.List;

public interface OrgandHRService {
    /**
     * 根据省份和年查找记录
     *
     * @param province
     * @return
     */
    public List<OrgandHR> getByYearProvince(String province, Integer year);

    public List<String> getYearAll();

    public List<String> getProvinceAll();
}
