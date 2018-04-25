package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("basis")
public class BasisController extends BaseController {

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
}
