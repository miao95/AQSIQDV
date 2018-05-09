package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import com.ejunhai.qutihuo.statistical.service.ProvinceStandardService;
import com.google.gson.Gson;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("basis")
public class BasisController extends BaseController {
    @Resource
    private ProvinceStandardService provinceStandardService;

    @RequestMapping("/nqi")
    public String nqiPage(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return "basis/nqi";
    }

    @RequestMapping("/nqiIq")
    public String nqiIqPage(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return "basis/nqiIq";
    }

    @RequestMapping("/nqiMetering")
    public String nqiMeteringPage(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return "basis/nqiMetering";
    }

    @RequestMapping("/findStandardByParams")
    @ResponseBody
    public String findStandardByParams(
            HttpServletRequest request,
            @RequestParam(value = "yearName", required =false) String yearName,
            @RequestParam(value = "areaName", required =false) String areaName,
            @RequestParam(value = "methodName", required =false) String methodName){

        System.out.println();
        System.out.println(yearName);

        return "success";
    }

    @RequestMapping("/findTotalStandardForAllProvinces")
    @ResponseBody
    public Map findTotalStandardForAllProvinces(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap){
        String[] provinces = {"安徽省","四川省","江苏省","山西省","山东省","辽宁省"};

        Integer[] data = new Integer[provinces.length];
        for (int i = 0; i < provinces.length; i++) {
            List<ProvinceStandard> pojoList = provinceStandardService.findByParams(provinces[i], 2016);

            if(pojoList != null && pojoList.size() > 0){

                ProvinceStandard pojo = pojoList.get(0);
                data[i] = pojo.getBnd_zxd_xd() + pojo.getBnd_zxd_zd();
            }

        }

        String xData = StringUtils.join(provinces, ",");
        String yData = StringUtils.join(data, ",");

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("x", xData);
        map.put("y", yData);

       return map;
    }
}
