package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import com.ejunhai.qutihuo.statistical.model.Measurement;
import com.ejunhai.qutihuo.statistical.model.MetricInstrument;
import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import com.ejunhai.qutihuo.statistical.model.SpecialDevice;
import com.ejunhai.qutihuo.statistical.service.MeasurementService;
import com.ejunhai.qutihuo.statistical.service.MetricInstrumentService;
import com.ejunhai.qutihuo.statistical.service.ProvinceStandardService;
import com.ejunhai.qutihuo.statistical.service.SpecialDeviceService;
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
    @Resource
    private MeasurementService measurementService;
    @Resource
    private MetricInstrumentService metricInstrumentService;
    @Resource
    private SpecialDeviceService specialDeviceService;

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

    @RequestMapping("/supply/department")
    public String departmentPage(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return "basis/department";
    }

    @RequestMapping("/nqi/getDistinctYear")
    @ResponseBody
    public List<Integer> getDistinctYearForNqi(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return provinceStandardService.getDistinctYear();
    }

    @RequestMapping("/nqi/getDistinctProvince")
    @ResponseBody
    public List<String> getDistinctProvinceForNqi(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return provinceStandardService.getDistinctProvince();
    }

    @RequestMapping("/law/getDistinctYear")
    @ResponseBody
    public List<Integer> getDistinctProvinceForLaw(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return measurementService.getDistinctYear();
    }

    @RequestMapping("/inspection/getDistinctYear")
    @ResponseBody
    public List<Integer> getDistinctProvinceForInspection(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return metricInstrumentService.getDistinctYear();
    }

    @RequestMapping("/special/getDistinctYear")
    @ResponseBody
    public List<Integer> getDistinctProvinceForspecial(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return specialDeviceService.getDistinctYear();
    }

    @RequestMapping("/findStandardByParams")
    @ResponseBody
    public Map findStandardByParams(@RequestParam(value = "yearName", required =false) String yearName,
            @RequestParam(value = "areaName", required =false) String areaName,
            @RequestParam(value = "methodName", required =false) String methodName){

        String[] provinces = areaName.split(",");
        String[] yearList = yearName.split(",");

        //yearList = MyStringUtil.removeArrayElement(yearList, "2015");

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

    @RequestMapping("showMeteringLawManagement")
    @ResponseBody
    public Map showMeteringLawManagement(@RequestParam(value = "type", required = false) String type){
        List<String> provinceL = measurementService.getDistinctProvince();

        String[] provinceList = provinceL.toArray(new String[provinceL.size()]);
        Integer[] data1 = new Integer[provinceList.length];
        Integer[] data2 = new Integer[provinceList.length];
        Integer[] data3 = new Integer[provinceList.length];
        Integer[] data4 = new Integer[provinceList.length];
        for (int i = 0; i < provinceList.length; i++) {
            List<Measurement> pojoList = measurementService.findByParams(provinceList[i], 2016);
            if(pojoList != null && pojoList.size() > 0){
                Measurement pojo = pojoList.get(0);
                if(type.equals("div_m_std")){//计量标准
                    data1[i] = pojo.getMs_shgy();
                    data2[i] = pojo.getMs_sqjlbz();
                    data3[i] = pojo.getMs_zxjdgzjlbz();
                    data4[i] = pojo.getMs_zgjlbz();
                }
                else if(type.equals("authorization")){//计量授权
                    data1[i] = pojo.getJlsq_yfszjljdjsjg();
                    data2[i] = pojo.getJlsq_yfsqjljdjg();
                    data3[i] = pojo.getJlsq_qtcdzxsqjdrwjg() + pojo.getJlsq_qtcdzxsqjdrwxm();
                    data4[i] = pojo.getJlsq_sqcdjlqjxspjjg() + pojo.getJlsq_sqcdjlqjxspjxm();
                }
                else if (type.equals("new_product")){
                    data1[i] = pojo.getJlqjxcp_xspzzs_year();
                }
                else if(type.equals("make_modify")){
                    data1[i] = pojo.getZzxljlqj_zzxkz_add();
                    data2[i] = pojo.getZzxljlqj_xlxkz_add();
                }
                else if (type.equals("supervise_check")){
                    data1[i] = pojo.getJdjc_fzxjcqj();
                    data2[i] = pojo.getJdjc_fzxhgqj();
                    data3[i] = pojo.getJdjc_xnjccc();
                    data4[i] = pojo.getJdjc_xnjchg();
                }
                else if(type.equals("compulsory_inspection")){
                    //do something;
                }
                else if(type.equals("check_person")){
                    data1[i] = pojo.getJljdy_szjdjg();
                    data2[i] = pojo.getJljdy_sqjdjg();
                    data3[i] = pojo.getJljdy_sqqtdw();
                    data4[i] = pojo.getJljdy_qsydw();
                }
                else if(type.equals("product_weight")){
                    data1[i] = pojo.getCcdlbz_ccpc();
                    data2[i] = pojo.getCcdlbz_hgpc();
                }
                else if(type.equals("socail_fair")){
                    data1[i] = pojo.getShgzjlz_xj();
                    data2[i] = pojo.getShgzjlz_czl_year();
                    data3[i] = pojo.getShgzjlz_qt_year();
                }
                else if(type.equals("assurance_capability")){
                    data1[i] = pojo.getDlbzspscqy_cbzqy_year();
                    data2[i] = pojo.getDlbzspscqy_cbzcp_year();
                }
            }
        }

        Map map = new HashMap();
        map.put("province", provinceList);

        if (type.equals("new_product")){
            map.put("data1", data1);
        }
        else if(type.equals("make_modify") || type.equals("product_weight") || type.equals("assurance_capability")){
            map.put("data1", data1);
            map.put("data2", data2);
        }
        else if(type.equals("socail_fair")){
            map.put("data1", data1);
            map.put("data2", data2);
            map.put("data3", data3);
        }
        else{
            map.put("data1", data1);
            map.put("data2", data2);
            map.put("data3", data3);
            map.put("data4", data4);
        }

        return map;
    }


    @RequestMapping("showMeteringLawManagementByYears")
    @ResponseBody
    public Map showMeteringLawManagementByYears(
            @RequestParam(value = "type", required = false) String type,
            @RequestParam(value = "years", required = false) String years){
        List<String> provinceL = measurementService.getDistinctProvince();
        String[] provinces = provinceL.toArray(new String[provinceL.size()]);

        String[] yearList = years.split(",");
        List zdList = new ArrayList();//存储“计量标准第1维度”的数据
        List xdList = new ArrayList();//存储“计量标准第2维度”的数据
        List vdList = new ArrayList();//存储“计量标准第3维度”的数据
        List wdList = new ArrayList();//存储“计量标准第4维度”的数据
        for (int i = 0; i < yearList.length; i++) {
            Map zdMap = new HashMap();
            Map xdMap = new HashMap();
            Map vdMap = new HashMap();
            Map wdMap = new HashMap();
            List list1 = new ArrayList();
            List list2 = new ArrayList();
            List list3 = new ArrayList();
            List list4 = new ArrayList();
            int year = Integer.parseInt(yearList[i]);
            for (int j = 0; j < provinces.length; j++) {
                List<Measurement> pojoList = measurementService.findByParams(provinces[j], year);

                if(pojoList != null && pojoList.size() > 0){
                    Measurement pojo = pojoList.get(0);
                    if(type.equals("div_m_std")){//计量标准
                        list1.add(pojo.getMs_shgy());
                        list2.add(pojo.getMs_sqjlbz());
                        list3.add(pojo.getMs_zxjdgzjlbz());
                        list4.add(pojo.getMs_zgjlbz());
                    }
                    else if(type.equals("authorization")){//计量授权
                        list1.add(pojo.getJlsq_yfszjljdjsjg());
                        list2.add(pojo.getJlsq_yfsqjljdjg());
                        list3.add(pojo.getJlsq_qtcdzxsqjdrwjg() + pojo.getJlsq_qtcdzxsqjdrwxm());
                        list4.add(pojo.getJlsq_sqcdjlqjxspjjg() + pojo.getJlsq_sqcdjlqjxspjxm());
                    }
                    else if (type.equals("new_product")){
                        list1.add(pojo.getJlqjxcp_xspzzs_year());
                    }
                    else if(type.equals("make_modify")){
                        list1.add(pojo.getZzxljlqj_zzxkz_add());
                        list2.add(pojo.getZzxljlqj_xlxkz_add());
                    }
                    else if (type.equals("supervise_check")){
                        list1.add(pojo.getJdjc_fzxjcqj());
                        list2.add(pojo.getJdjc_fzxhgqj());
                        list3.add(pojo.getJdjc_xnjccc());
                        list4.add(pojo.getJdjc_xnjchg());
                    }
                    else if(type.equals("compulsory_inspection")){
                        //do something;
                    }
                    else if(type.equals("check_person")){
                        list1.add(pojo.getJljdy_szjdjg());
                        list2.add(pojo.getJljdy_sqjdjg());
                        list3.add(pojo.getJljdy_sqqtdw());
                        list4.add(pojo.getJljdy_qsydw());
                    }
                    else if(type.equals("product_weight")){
                        list1.add(pojo.getCcdlbz_ccpc());
                        list2.add(pojo.getCcdlbz_hgpc());
                    }
                    else if(type.equals("socail_fair")){
                        list1.add(pojo.getShgzjlz_xj());
                        list2.add(pojo.getShgzjlz_czl_year());
                        list3.add(pojo.getShgzjlz_qt_year());
                    }
                    else if(type.equals("assurance_capability")){
                        list1.add(pojo.getDlbzspscqy_cbzqy_year());
                        list2.add(pojo.getDlbzspscqy_cbzcp_year());
                    }

                }
            }

            if (type.equals("new_product")){
                zdMap.put(year, list1);
                zdList.add(zdMap);
            }
            else if(type.equals("make_modify") || type.equals("product_weight") || type.equals("assurance_capability")){
                zdMap.put(year, list1);
                xdMap.put(year, list2);

                zdList.add(zdMap);
                xdList.add(xdMap);
            }
            else if(type.equals("socail_fair")){
                zdMap.put(year, list1);
                xdMap.put(year, list2);
                vdMap.put(year, list3);

                zdList.add(zdMap);
                xdList.add(xdMap);
                vdList.add(vdMap);
            }
            else{
                zdMap.put(year, list1);
                xdMap.put(year, list2);
                vdMap.put(year, list3);
                wdMap.put(year, list4);

                zdList.add(zdMap);
                xdList.add(xdMap);
                vdList.add(vdMap);
                wdList.add(wdMap);
            }

        }

        Map<String, Object> map = new HashMap<String, Object>();
        if (type.equals("new_product")){
            map.put("data1", zdList);
        }
        else if(type.equals("make_modify") || type.equals("product_weight") || type.equals("assurance_capability")){
            map.put("data1", zdList);
            map.put("data2", xdList);
        }
        else if(type.equals("socail_fair")){
            map.put("data1", zdList);
            map.put("data2", xdList);
            map.put("data3", vdList);
        }
        else{
            map.put("data1", zdList);
            map.put("data2", xdList);
            map.put("data3", vdList);
            map.put("data4", wdList);
        }
        map.put("province", provinces);
        map.put("year", yearList);

        return map;
    }

    @RequestMapping("showMeteringInspection")
    @ResponseBody
    public Map showMeteringInspection(
            @RequestParam(value = "year", required = false) Integer year){
        List list = new ArrayList();

        List<String> provinceL = metricInstrumentService.getDistinctProvince();
        String[] provinceList = provinceL.toArray(new String[provinceL.size()]);

        String[] features = {"长度","温度","力学","衡器","电磁","光学","声学","化学","电离辐射","无线电","时间频率","其他"};
        for (int i = 0; i < features.length; i++) {
            String feature = features[i];
            Integer[] data = new Integer[provinceList.length];
            for (int j = 0; j < provinceList.length; j++) {
                List<MetricInstrument> pojoList = metricInstrumentService.findByParams(provinceList[j], year);
                if(pojoList != null && pojoList.size() > 0){
                    MetricInstrument pojo = pojoList.get(0);
                    switch (feature){
                        case "长度":
                            data[j] = pojo.getCd();
                            break;
                        case "温度":
                            data[j] = pojo.getWd();
                            break;
                        case "力学":
                            data[j] = pojo.getLx();
                            break;
                        case "衡器":
                            data[j] = pojo.getLx_hq();
                            break;
                        case "电磁":
                            data[j] = pojo.getDc();
                            break;
                        case "光学":
                            data[j] = pojo.getGx();
                            break;
                        case "声学":
                            data[j] = pojo.getSx();
                            break;
                        case "化学":
                            data[j] = pojo.getHx();
                            break;
                        case "电离辐射":
                            data[j] = pojo.getDlfs();
                            break;
                        case "无线电" :
                            data[j] = pojo.getWxd();
                            break;
                        case "时间频率":
                            data[j] = pojo.getSjpl();
                            break;
                        case  "其他":
                            data[j] = pojo.getQt();
                            break;
                        default:
                            data[j] = 0;
                            break;
                    }

                }
            }

            list.add(data);
        }

        Map map = new HashMap();
        map.put("province", provinceList);
        map.put("features", features);
        map.put("list", list);

        return map;
    }


    @RequestMapping("showSpecialDeviceInspection")
    @ResponseBody
    public Map showSpecialDeviceInspection(
            @RequestParam(value = "year", required = false) Integer year){
        List list = new ArrayList();

        List<String> provinceL = specialDeviceService.getDistinctProvince();
        String[] provinceList = provinceL.toArray(new String[provinceL.size()]);
        String[] features = {"锅炉","压力容器","压力管道","气瓶","电梯","起重机械","客运索道","大型游乐设施","场内机动车辆"};

        for (int i = 0; i < features.length; i++) {
            String feature = features[i];
            Double[] data = new Double[provinceList.length];
            for (int j = 0; j < provinceList.length; j++) {
                List<SpecialDevice> pojoList = specialDeviceService.findByParams(provinceList[j], year);
                if(pojoList != null && pojoList.size() > 0){
                    SpecialDevice pojo = pojoList.get(0);
                    switch (feature){
                        case "锅炉":
                            data[j] = pojo.getGl_djl().doubleValue();
                            break;
                        case "压力容器":
                            data[j] = pojo.getYlrq_djl().doubleValue();
                            break;
                        case "压力管道":
                            data[j] = pojo.getYlgd_djl().doubleValue();
                            break;
                        case "气瓶":
                            data[j] = pojo.getQp_djl().doubleValue();
                            break;
                        case "电梯":
                            data[j] = pojo.getDt_djl().doubleValue();
                            break;
                        case "起重机械":
                            data[j] = pojo.getQzjx_djl().doubleValue();
                            break;
                        case "客运索道":
                            data[j] = pojo.getKysd_djl().doubleValue();
                            break;
                        case "大型游乐设施":
                            data[j] = pojo.getDxylss_djl().doubleValue();
                            break;
                        case "场内机动车辆":
                            data[j] = pojo.getCnjdcl_djl().doubleValue();
                            break;
                        default:
                            data[j] = 0.0;
                            break;
                    }

                }
            }

            list.add(data);
        }

        Map map = new HashMap();
        map.put("province", provinceList);
        map.put("features", features);
        map.put("list", list);

        return map;
    }


}
