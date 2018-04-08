package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("development")
public class DevelopmentController extends BaseController {

    @RequestMapping("/product")
    public String productPage(HttpServletRequest request, HttpServletResponse response, ModelMap modelMap) throws IOException {
        return "development/product";
    }


}
