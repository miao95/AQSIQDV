package com.ejunhai.qutihuo.common.base;

import com.ejunhai.qutihuo.common.utils.ServiceLocator;
import com.ejunhai.qutihuo.errors.ErrorType;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import freemarker.template.Template;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class BaseController {

	/** Logger available to subclasses */
	protected final Logger logger = Logger.getLogger(this.getClass().getName());

	protected final Gson gson = new GsonBuilder().serializeNulls().disableHtmlEscaping().create();

	protected String jsonSuccess() {
		return this.jsonSuccess(null);
	}

	protected <T> String jsonSuccess(T data) {
		return this.jsonSuccess(data, "ok");
	}

	protected <T> String jsonSuccess(T data, String message) {
		return this.renderJson(200, message, data);
	}

	protected <T> String jsonFailed(int code, String message) {
		return this.renderJson(code, message, null);
	}

	protected <T> String jsonFailed(ErrorType errorType) {
		return this.renderJson(errorType.getValue(), errorType.getTitle(), null);
	}

	private <T> String renderJson(int code, String message, T data) {
		Map<String, Object> jsonMap = new HashMap<String, Object>();
		Map<String, Object> stateMap = new HashMap<String, Object>();
		stateMap.put("code", code);
		stateMap.put("msg", StringUtils.isBlank(message) ? "Ok" : message);
		jsonMap.put("state", stateMap);
		jsonMap.put("data", data);
		return gson.toJson(jsonMap);
	}

	/**
	 * 解析模板为json
	 * 
	 * @param templateURL
	 * @param modelMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("unchecked")
	protected Map<String, Object> parseJsonTemplate(String templateURL, Object modelMap) throws Exception {
		FreeMarkerConfigurer freeMarkerConfigurer = ServiceLocator.getBean("freemarkerConfig");
		Template template = freeMarkerConfigurer.getConfiguration().getTemplate(templateURL);
		String returnStr = FreeMarkerTemplateUtils.processTemplateIntoString(template, modelMap);
		return gson.fromJson(returnStr.replaceAll("\\s", " "), Map.class);
	}

	/**
	 * form validation 组件数据验证格式
	 * 
	 * @return
	 */
	protected String validateSuccess() {
		return "{ \"valid\": true }";
	}

	/**
	 * form validation 组件数据验证格式
	 * 
	 * @return
	 */
	protected String validateFailed() {
		return "{ \"valid\": false }";
	}

	/**
	 * 设置表单日期属性转换器
	 * 
	 * @param binder
	 */
	@InitBinder
	protected void initBinder(WebDataBinder binder) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
		binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, true));
	}

	/**
	 * 将省份名称格式化
	 * @param province
	 * @return
	 */
	public String provinceForShort(String province) {
		if (province.equals("北京市"))
			return "北京";
		else if (province.equals("天津市"))
			return "天津";
		else if (province.equals("重庆市"))
			return "重庆";
		else if (province.equals("上海市"))
			return "上海";
		else if (province.equals("河北省"))
			return "河北";
		else if (province.equals("山西省"))
			return "山西";
		else if (province.equals("辽宁省"))
			return "辽宁";
		else if (province.equals("吉林省"))
			return "吉林";
		else if (province.equals("黑龙江省"))
			return "黑龙江";
		else if (province.equals("江苏省"))
			return "江苏";
		else if (province.equals("浙江省"))
			return "浙江";
		else if (province.equals("安徽省"))
			return "安徽";
		else if (province.equals("福建省"))
			return "福建";
		else if (province.equals("江西省"))
			return "江西";
		else if (province.equals("山东省"))
			return "山东";
		else if (province.equals("河南省"))
			return "河南";
		else if (province.equals("湖北省"))
			return "湖北";
		else if (province.equals("湖南省"))
			return "湖南";
		else if (province.equals("广东省"))
			return "广东";
		else if (province.equals("海南省"))
			return "海南";
		else if (province.equals("四川省"))
			return "四川";
		else if (province.equals("贵州省"))
			return "贵州";
		else if (province.equals("云南省"))
			return "云南";
		else if (province.equals("陕西省"))
			return "陕西";
		else if (province.equals("甘肃省"))
			return "甘肃";
		else if (province.equals("青海省"))
			return "青海";
		else if (province.equals("台湾省"))
			return "台湾";
		else if (province.equals("内蒙古自治区"))
			return "内蒙古";
		else if (province.equals("广西壮族自治区"))
			return "广西";
		else if (province.equals("宁夏回族自治区"))
			return "宁夏";
		else if (province.equals("新疆维吾尔自治区"))
			return "新疆";
		else if (province.equals("西藏自治区"))
			return "西藏";
		else if (province.equals("香港特别行政区"))
			return "香港";
		else if (province.equals("澳门特别行政区"))
			return "澳门";
		else return province;
	}
}
