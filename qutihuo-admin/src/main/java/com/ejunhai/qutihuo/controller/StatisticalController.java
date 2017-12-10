package com.ejunhai.qutihuo.controller;

import com.ejunhai.qutihuo.common.base.BaseController;
import com.ejunhai.qutihuo.statistical.model.ProvinceStandard;
import com.ejunhai.qutihuo.statistical.service.ProvinceStandardService;
import com.ejunhai.qutihuo.system.dto.SystemUserDto;
import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Controller
@RequestMapping("statistical")
public class StatisticalController extends BaseController {

	@Resource
	private ProvinceStandardService provinceStandardService;

	@RequestMapping("/standardRevise")
	public String standardRevise(HttpServletRequest request, ModelMap modelMap) {
		List<Integer> yearList = provinceStandardService.getDistinctYear();
		Map<String,Object> jsonMap = new HashMap<>();
		/*for(Integer year:yearList){
			List<ProvinceStandard> provinceStandardsInYear =provinceStandardService.read(year);
			JSONArray json = JSONArray.fromObject(provinceStandardsInYear);
			JSONObject json = JSONObject.fromObject(provinceStandardsInYear);
			jsonMap.put("year_"+String.valueOf(year),provinceStandardsInYear);
		}*/
		List<String> yAxisData = new ArrayList<>();
		yAxisData.add("安徽省");
		yAxisData.add("四川省");
		yAxisData.add("江苏省");
		yAxisData.add("山西省");
		yAxisData.add("广西壮族自治区");
		yAxisData.add("山东省");
		yAxisData.add("辽宁省");
		yAxisData.add("黑龙江省");
		yAxisData.add("吉林省");
		yAxisData.add("河南省");
		yAxisData.add("广东省");
		yAxisData.add("新疆维吾尔自治区");
		yAxisData.add("甘肃省");
		yAxisData.add("宁夏回族自治区");
		yAxisData.add("内蒙古自治区");
		yAxisData.add("河北省");
		yAxisData.add("天津市");
		yAxisData.add("北京市");
		yAxisData.add("湖南省");
		yAxisData.add("湖北省");
		yAxisData.add("贵州省");
		yAxisData.add("云南省");
		yAxisData.add("福建省");
		yAxisData.add("重庆市");
		yAxisData.add("海南省");
		yAxisData.add("上海市");
		yAxisData.add("陕西省");
		yAxisData.add("青海省");
		yAxisData.add("江西省");
		yAxisData.add("浙江省");
		yAxisData.add("西藏自治区");
		Integer[] dataAll_1 = {253,220,215,211,208,205,203,199,185,179,169,140,139,137,131,124,122,121,118,94,94,93,90,90,78,71,67,63,52,50,10};
		Integer[] dataAll_2 = {253,220,215,444,208,205,203,199,185,421,169,140,139,137,131,124,122,121,118,222,94,93,90,90,78,71,67,63,52,50,44};
		Map<String,Object> series_1_data_1 = new HashMap<>();series_1_data_1.put("name","制订");series_1_data_1.put("value",3848);
		Map<String,Object> series_1_data_2 = new HashMap<>();series_1_data_2.put("name","修订");series_1_data_2.put("value",283);
		List<Map<String,Object>> dataList = new ArrayList<>();
		dataList.add(series_1_data_1);
		dataList.add(series_1_data_2);
		jsonMap.put("yAxisData",yAxisData);
		jsonMap.put("dataList",dataList);
		jsonMap.put("dataAll_1",dataAll_1);
		jsonMap.put("dataAll_2",dataAll_2);
		JSONObject json = JSONObject.fromObject(jsonMap);
		modelMap.put("jsonMap",json);
		List<ProvinceStandard> provinceStandardList = provinceStandardService.read();
		System.out.println(provinceStandardList.get(0).getId());
		return "statistical/standardRevise";
	}

}
