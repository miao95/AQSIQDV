package com.ejunhai.qutihuo.statistical.service.impl;

import com.ejunhai.qutihuo.statistical.dao.LawAndEduMapper;
import com.ejunhai.qutihuo.statistical.model.LawAndEdu;
import com.ejunhai.qutihuo.statistical.service.LawAndEduService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("lawAndEduService")
public class LawAndEduServiceImpl implements LawAndEduService {

    @Resource
    private LawAndEduMapper lawAndEduMapper;

    @Override
    public List<LawAndEdu> findByParams(String province, Integer year) {
        return lawAndEduMapper.findByParams(province, year);
    }

    @Override
    public List<Integer> getDistinctYear() {
        return lawAndEduMapper.getDistinctYear();
    }

    @Override
    public List<String> getDistinctProvince() {
        return lawAndEduMapper.getDistinctProvince();
    }

    @Override
    public String provinceForShort(String province) {
        if (province.equals( "北京市"))
            return "北京";
        else if (province.equals( "天津市"))
            return "天津";
        else if (province.equals( "重庆市"))
            return "重庆";
        else if (province.equals( "上海市"))
            return "上海";
        else if (province.equals( "河北省"))
            return "河北";
        else if (province.equals( "山西省"))
            return "山西";
        else if (province.equals( "辽宁省"))
            return "辽宁";
        else if (province.equals( "吉林省"))
            return "吉林";
        else if (province.equals( "黑龙江省"))
            return "黑龙江";
        else if (province.equals( "江苏省"))
            return "江苏";
        else if (province.equals( "浙江省"))
            return "浙江";
        else if (province.equals( "安徽省"))
            return "安徽";
        else if (province.equals( "福建省"))
            return "福建";
        else if (province.equals( "江西省"))
            return "江西";
        else if (province.equals( "山东省"))
            return "山东";
        else if (province.equals( "河南省"))
            return "河南";
        else if (province.equals( "湖北省"))
            return "湖北";
        else if (province.equals( "湖南省"))
            return "湖南";
        else if (province.equals( "广东省"))
            return "广东";
        else if (province.equals( "海南省"))
            return "海南";
        else if (province.equals( "四川省"))
            return "四川";
        else if (province.equals( "贵州省"))
            return "贵州";
        else if (province.equals( "云南省"))
            return "云南";
        else if (province.equals( "陕西省"))
            return "陕西";
        else if (province.equals( "甘肃省"))
            return "甘肃";
        else if (province.equals( "青海省"))
            return "青海";
        else if (province.equals( "台湾省"))
            return "台湾";
        else if (province.equals( "内蒙古自治区"))
            return "内蒙古";
        else if (province.equals( "广西壮族自治区"))
            return "广西";
        else if (province.equals( "宁夏回族自治区"))
            return "宁夏";
        else if (province.equals( "新疆维吾尔自治区"))
            return "新疆";
        else if (province.equals( "西藏自治区"))
            return "西藏";
        else if (province.equals( "香港特别行政区"))
            return "香港";
        else if (province.equals( "澳门特别行政区"))
            return "澳门";
        else return province;
    }


}
