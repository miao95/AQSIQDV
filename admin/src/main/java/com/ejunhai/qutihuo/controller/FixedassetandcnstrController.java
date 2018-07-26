package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import com.ejunhai.qutihuo.statistical.service.FixedassetsandcapitalconstructionService;
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
@RequestMapping("basis/supply")
public class FixedassetandcnstrController extends BaseController {
    @Resource
    private FixedassetsandcapitalconstructionService fixedassetsandcapitalconstructionService;


    @RequestMapping("/fixedassetandcnstr")
    public String fixedassetandcnstrPage(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return "basis/supply/fixedassetandcnstr";
    }

    @RequestMapping("/fixedAndConstr/getDistinctYear")
    @ResponseBody
    public List<Integer> getDistinctYearForfixedassetandcnstr(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return fixedassetsandcapitalconstructionService.getDistinctYear();
    }

    @RequestMapping("/fixedAndConstr/getDistinctProvince")
    @ResponseBody
    public List<String> getDistinctProvinceForfixedassetandcnstr(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return fixedassetsandcapitalconstructionService.getDistinctProvince();
    }

    @RequestMapping("/fixedAndConstr/loadData")
    @ResponseBody
    public Map loadData(
            @RequestParam(value = "province", required = false) String province,
            @RequestParam(value = "year", required = false) int year) {
        Map map = new HashMap();
        //查询最新的一年
        List<Integer> allYears = fixedassetsandcapitalconstructionService.getDistinctYear();
        if (allYears == null && allYears.size() == 0) {
            return null;
        }
        if (year == 0) {
            year = allYears.get(0);
        }
        if (province == null || province.equals("")) {
            province = "全国总计";
        }
        map = fixedassetsandcapitalconstructionService.loadData(province, year);

        return map;
    }


}
