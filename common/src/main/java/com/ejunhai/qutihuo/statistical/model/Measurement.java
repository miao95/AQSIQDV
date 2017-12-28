package com.ejunhai.qutihuo.statistical.model;

/**
 * 地方标准信息表
 *
 * @author Leo
 * @date 2017-12-06 21:18:30
 */
public class Measurement {

    /**
     * ID
     */
    private String id;

    /**
     * 建立在依法设置计量检定机构的社会公用计量标准
     */
    private Integer ms_shgy;

    /**
     * 依法授权的社会公用计量标准
     */
    private Integer ms_sqjlbz;

    /**
     * 依法授权其它单位开展专项检定工作计量标准
     */
    private Integer ms_zxjdgzjlbz;

    /**
     * 建立在部门、企事业单位的最高计量标准
     */
    private Integer ms_zgjlbz;

    /**
     * 计量授权-依法设置的计量检定技术机构
     */
    private Integer jlsq_yfszjljdjsjg;

    /**
     * 依法授权建立的计量检定机构
     */
    private Integer jlsq_yfsqjljdjg;

    /**
     * 其它承担专项授权检定任务的机构
     */
    private Integer jlsq_qtcdzxsqjdrwjg;

    /**
     * 其它承担专项授权检定任务的项目
     */
    private Integer jlsq_qtcdzxsqjdrwxm;

    /**
     * 授权承担计量器具型式评价的机构
     */
    private Integer jlsq_sqcdjlqjxspjjg;

    /**
     * 授权承担计量器具型式评价的项目
     */
    private Integer jlsq_sqcdjlqjxspjxm;

    /**
     * 年份
     */
    private Integer year;

    /**
     * 省份
     */
    private String province;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getMs_shgy() {
        return ms_shgy;
    }

    public void setMs_shgy(Integer ms_shgy) {
        this.ms_shgy = ms_shgy;
    }

    public Integer getMs_sqjlbz() {
        return ms_sqjlbz;
    }

    public void setMs_sqjlbz(Integer ms_sqjlbz) {
        this.ms_sqjlbz = ms_sqjlbz;
    }

    public Integer getMs_zxjdgzjlbz() {
        return ms_zxjdgzjlbz;
    }

    public void setMs_zxjdgzjlbz(Integer ms_zxjdgzjlbz) {
        this.ms_zxjdgzjlbz = ms_zxjdgzjlbz;
    }

    public Integer getMs_zgjlbz() {
        return ms_zgjlbz;
    }

    public void setMs_zgjlbz(Integer ms_zgjlbz) {
        this.ms_zgjlbz = ms_zgjlbz;
    }

    public Integer getJlsq_yfszjljdjsjg() {
        return jlsq_yfszjljdjsjg;
    }

    public void setJlsq_yfszjljdjsjg(Integer jlsq_yfszjljdjsjg) {
        this.jlsq_yfszjljdjsjg = jlsq_yfszjljdjsjg;
    }

    public Integer getJlsq_yfsqjljdjg() {
        return jlsq_yfsqjljdjg;
    }

    public void setJlsq_yfsqjljdjg(Integer jlsq_yfsqjljdjg) {
        this.jlsq_yfsqjljdjg = jlsq_yfsqjljdjg;
    }

    public Integer getJlsq_qtcdzxsqjdrwjg() {
        return jlsq_qtcdzxsqjdrwjg;
    }

    public void setJlsq_qtcdzxsqjdrwjg(Integer jlsq_qtcdzxsqjdrwjg) {
        this.jlsq_qtcdzxsqjdrwjg = jlsq_qtcdzxsqjdrwjg;
    }

    public Integer getJlsq_qtcdzxsqjdrwxm() {
        return jlsq_qtcdzxsqjdrwxm;
    }

    public void setJlsq_qtcdzxsqjdrwxm(Integer jlsq_qtcdzxsqjdrwxm) {
        this.jlsq_qtcdzxsqjdrwxm = jlsq_qtcdzxsqjdrwxm;
    }

    public Integer getJlsq_sqcdjlqjxspjjg() {
        return jlsq_sqcdjlqjxspjjg;
    }

    public void setJlsq_sqcdjlqjxspjjg(Integer jlsq_sqcdjlqjxspjjg) {
        this.jlsq_sqcdjlqjxspjjg = jlsq_sqcdjlqjxspjjg;
    }

    public Integer getJlsq_sqcdjlqjxspjxm() {
        return jlsq_sqcdjlqjxspjxm;
    }

    public void setJlsq_sqcdjlqjxspjxm(Integer jlsq_sqcdjlqjxspjxm) {
        this.jlsq_sqcdjlqjxspjxm = jlsq_sqcdjlqjxspjxm;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }
}
