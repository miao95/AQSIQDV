package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import com.ejunhai.qutihuo.statistical.model.AdminReviewCase;
import com.ejunhai.qutihuo.statistical.service.AdminReviewCaseService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("safety")
public class SafetyController extends BaseController {
    @Resource
    private AdminReviewCaseService adminReviewCaseService;

    @RequestMapping("/safeguard")
    public String safetyPage(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return "safety/safeguard";
    }

    @RequestMapping("/adminreview")
    public String adminReviewPage(HttpServletRequest request, HttpServletResponse response, Model model) throws IOException {
        List<AdminReviewCase> pojoList = adminReviewCaseService.findByParams("全国总计", 2016);
        if(pojoList != null && pojoList.size() > 0){

            AdminReviewCase pojo = pojoList.get(0);
            model.addAttribute("sqjz", pojo.getSqjz());
            model.addAttribute("bqxs", pojo.getBqxs());
            model.addAttribute("sl", pojo.getSl());
            model.addAttribute("sqr_count", pojo.getSqr_count());
        }

        return "safety/adminreview";
    }


}
