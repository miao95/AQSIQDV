package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import com.ejunhai.qutihuo.statistical.service.AdminresponsecaseService;
import com.ejunhai.qutihuo.statistical.service.LawAndEduService;
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
@RequestMapping("safety")
public class AdminresponsecaseController extends BaseController {
    @Resource
    private AdminresponsecaseService adminresponsecaseService;
    @Resource
    private LawAndEduService lawAndEduService;

    @RequestMapping("/adminresponsecase")
    public String adminresponsecasePage(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return "safety/adminresponsecase";
    }

    @RequestMapping("/adminresponsecase/getDistinctYear")
    @ResponseBody
    public List<Integer> getDistinctYearForadminpermission(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return adminresponsecaseService.getDistinctYear();
    }

    @RequestMapping("/adminresponsecase/getDistinctProvince")
    @ResponseBody
    public List<String> getDistinctProvinceFoadminpermission(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return adminresponsecaseService.getDistinctProvince();
    }

    @RequestMapping("/adminresponsecase/loadData")
    @ResponseBody
    public Map loadData(
            @RequestParam(value = "province", required = false) String province,
            @RequestParam(value = "year", required = false) int year) {
        Map map = new HashMap();
        //查询最新的一年
        List<Integer> allYears = adminresponsecaseService.getDistinctYear();
        if (allYears == null && allYears.size() == 0) {
            return null;
        }
        if (year == 0) {
            year = allYears.get(0);
        }
        if (province == null || province.equals("")) {
            province = "全国总计";
        }
        map = adminresponsecaseService.loadData(province, year);

        return map;
    }


}
