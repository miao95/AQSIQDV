package com.ejunhai.qutihuo.statistical.model;

/**
 *计量仪器表
 *
 * @author Liu Miao
 * @date 2018-06-16 21:18:30
 */

public class MetricInstrument implements Comparable{

    /**
     * ID
     */
    private String id;

    /**
     * 年份
     */
    private Integer year;

    /**
     * 长度
     */
    private Integer cd;

    /**
     * 温度
     */
    private Integer wd;

    /**
     * 力学
     */
    private Integer lx;

    /**
     * 力学--衡器
     */
    private Integer lx_hq;

    /**
     * 电磁
     */
    private Integer dc;

    /**
     * 光学
     */
    private Integer gx;

    /**
     * 声学
     */
    private Integer sx;

    /**
     * 化学
     */
    private Integer hx;

    /**
     * 电离辐射
     */
    private Integer dlfs;

    /**
     * 无线电
     */
    private Integer wxd;

    /**
     * 时间频率
     */
    private Integer sjpl;

    /**
     * 其他
     */
    private Integer qt;

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

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getCd() {
        return cd;
    }

    public void setCd(Integer cd) {
        this.cd = cd;
    }

    public Integer getWd() {
        return wd;
    }

    public void setWd(Integer wd) {
        this.wd = wd;
    }

    public Integer getLx() {
        return lx;
    }

    public void setLx(Integer lx) {
        this.lx = lx;
    }

    public Integer getLx_hq() {
        return lx_hq;
    }

    public void setLx_hq(Integer lx_hq) {
        this.lx_hq = lx_hq;
    }

    public Integer getDc() {
        return dc;
    }

    public void setDc(Integer dc) {
        this.dc = dc;
    }

    public Integer getGx() {
        return gx;
    }

    public void setGx(Integer gx) {
        this.gx = gx;
    }

    public Integer getSx() {
        return sx;
    }

    public void setSx(Integer sx) {
        this.sx = sx;
    }

    public Integer getHx() {
        return hx;
    }

    public void setHx(Integer hx) {
        this.hx = hx;
    }

    public Integer getDlfs() {
        return dlfs;
    }

    public void setDlfs(Integer dlfs) {
        this.dlfs = dlfs;
    }

    public Integer getWxd() {
        return wxd;
    }

    public void setWxd(Integer wxd) {
        this.wxd = wxd;
    }

    public Integer getSjpl() {
        return sjpl;
    }

    public void setSjpl(Integer sjpl) {
        this.sjpl = sjpl;
    }

    public Integer getQt() {
        return qt;
    }

    public void setQt(Integer qt) {
        this.qt = qt;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    @Override
    public int compareTo(Object obj){
        if (!(obj instanceof MetricInstrument))
            throw new RuntimeException("no MetricInstrument");
        MetricInstrument ps = (MetricInstrument)obj;
        int result = this.getProvince().compareTo(ps.getProvince());
        return result==0?this.getYear().compareTo(ps.getYear()):result;
    }
}
