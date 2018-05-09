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
import java.util.ArrayList;
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
        String[] provinces = { "北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省",
                "上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省",
                "湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆市","四川省","贵州省",
                "云南省","西藏自治区","陕西省","甘肃省","青海","宁夏回族自治区","新疆维吾尔自治区"};
        int[] yearList = {2012, 2013, 2014, 2015, 2016};


        List zdList = new ArrayList();//存储“制定”的数据
        List xdList = new ArrayList();//存储“修订”的数据
        for (int i = 0; i < yearList.length; i++) {
            Map zdMap = new HashMap();
            Map xdMap = new HashMap();
            /*String zdStr = "";
            String xdStr = "";*/
            List list1 = new ArrayList();
            List list2 = new ArrayList();
            for (int j = 0; j < provinces.length; j++) {
                List<ProvinceStandard> pojoList = provinceStandardService.findByParams(provinces[j], yearList[i]);

                if(pojoList != null && pojoList.size() > 0){
                    ProvinceStandard pojo = pojoList.get(0);
                    /*zdStr += pojo.getBnd_zxd_zd() + ",";
                    xdStr += pojo.getBnd_zxd_xd() + ",";*/
                    list1.add(pojo.getBnd_zxd_zd());
                    list2.add(pojo.getBnd_zxd_xd());
                }
            }

           /* zdStr = StringUtils.removeEnd(zdStr, ",");
            xdStr = StringUtils.removeEnd(xdStr, ",");

            zdMap.put(yearList[i], zdStr);
            xdMap.put(yearList[i], xdStr);*/

            zdMap.put(yearList[i], list1);
            xdMap.put(yearList[i], list2);

            zdList.add(zdMap);
            xdList.add(xdMap);

        }

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("zd", zdList);
        map.put("xd", xdList);

       return map;
    }
}
