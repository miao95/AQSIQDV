package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import com.ejunhai.qutihuo.statistical.service.ProvinceStandardService;
import com.ejunhai.qutihuo.utils.MyStringUtil;
import com.google.gson.Gson;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

@Controller
@RequestMapping("basis")
public class BasisController extends BaseController {
    @Resource
    private ProvinceStandardService provinceStandardService;

    @RequestMapping("/nqi")
    public String nqiPage(HttpServletRequest request, HttpServletResponse response, Model model) throws IOException {
        List<ProvinceStandard> pojoList = provinceStandardService.readRecentNationalStatistics(2016);

        if(pojoList != null && pojoList.size() > 0) {
            ProvinceStandard pojo = pojoList.get(0);

            model.addAttribute("zd", pojo.getBnd_zxd_zd());
            model.addAttribute("xd", pojo.getBnd_zxd_xd());
            model.addAttribute("tj", pojo.getBnd_xz_tj());
            model.addAttribute("qz", pojo.getBnd_xz_qz());

        }

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
    public Map findStandardByParams(@RequestParam(value = "yearName", required =false) String yearName,
            @RequestParam(value = "areaName", required =false) String areaName,
            @RequestParam(value = "methodName", required =false) String methodName){

        String[] provinces = areaName.split(",");
        String[] yearList = yearName.split(",");

        yearList = MyStringUtil.removeArrayElement(yearList, "2015");

        List zdList = new ArrayList();//存储“制定”的数据
        List xdList = new ArrayList();//存储“修订”的数据
        for (int i = 0; i < yearList.length; i++) {
            Map zdMap = new HashMap();
            Map xdMap = new HashMap();
            List list1 = new ArrayList();
            List list2 = new ArrayList();
            int year = Integer.parseInt(yearList[i]);
            for (int j = 0; j < provinces.length; j++) {
                List<ProvinceStandard> pojoList = provinceStandardService.findByParams(provinces[j], year);

                if(pojoList != null && pojoList.size() > 0){
                    ProvinceStandard pojo = pojoList.get(0);
                    if(methodName.equals("zxd")){
                        list1.add(pojo.getBnd_zxd_zd()); //制定
                        list2.add(pojo.getBnd_zxd_xd()); //修订
                    }
                    else {
                        list1.add(pojo.getBnd_xz_qz()); //强制
                        list2.add(pojo.getBnd_xz_tj()); //推荐
                    }

                }
            }


            zdMap.put(year, list1);
            xdMap.put(year, list2);

            zdList.add(zdMap);
            xdList.add(xdMap);

        }

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("zd", zdList);
        map.put("xd", xdList);
        map.put("province", MyStringUtil.toSimpleName(provinces));
        map.put("method", methodName);
        map.put("year", yearList);

        return map;
    }

    @RequestMapping("/findTotalStandardForAllProvinces")
    @ResponseBody
    public Map findTotalStandardForAllProvinces(){
        String[] provinces = { "北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省",
                "上海市","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省",
                "湖北省","湖南省","广东省","广西壮族自治区","海南省","重庆市","四川省","贵州省",
                "云南省","西藏自治区","陕西省","甘肃省","青海","宁夏回族自治区","新疆维吾尔自治区"};

        String zdStr = "";//存储“制定”的数据
        String xdStr = "";//存储“修订”的数据
        for (int i = 0; i < provinces.length; i++) {
            List<ProvinceStandard> pojoList = provinceStandardService.findByParams(provinces[i], 2016);

            if(pojoList != null && pojoList.size() > 0){
                ProvinceStandard pojo = pojoList.get(0);
                zdStr += pojo.getBnd_zxd_zd() + ",";
                xdStr += pojo.getBnd_zxd_xd() + ",";
            }
        }

        zdStr = StringUtils.removeEnd(zdStr, ",");
        xdStr = StringUtils.removeEnd(xdStr, ",");

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("zd", zdStr);
        map.put("xd", xdStr);

        return map;
    }


    @RequestMapping("/readRecentProvinceStatistics")
    @ResponseBody
    public Map readRecentProvinceStatistics(){
        List<ProvinceStandard> pojoList = provinceStandardService.readRecentNationalStatistics(2016);

        if(pojoList != null && pojoList.size() > 0){
            ProvinceStandard pojo = pojoList.get(0);

            Map map = new HashMap();
            List result = new ArrayList();

            Map zdMap = new HashMap();
            zdMap.put("name", "制订");
            zdMap.put("value", pojo.getBnd_zxd_zd());
            result.add(zdMap);

            Map xdMap = new HashMap();
            xdMap.put("name", "修订");
            xdMap.put("value", pojo.getBnd_zxd_xd());
            result.add(xdMap);

            map.put("zxd", result);

            result = new ArrayList();

            Map tjMap = new HashMap();
            tjMap.put("name", "推荐");
            tjMap.put("value", pojo.getBnd_xz_tj());
            result.add(tjMap);

            Map qzMap = new HashMap();
            qzMap.put("name", "强制");
            qzMap.put("value", pojo.getBnd_xz_qz());
            result.add(qzMap);

            map.put("xz", result);

            return map;

        }

        return null;
    }


}
