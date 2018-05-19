package com.ejunhai.qutihuo.statistical.model;

/**
 * 地方标准信息表
 *
 * @author Leo
 * @date 2017-12-06 21:18:30
 */
public class Measurement implements Comparable{

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
     * 型式批准证书-本年
     */
    private Integer jlqjxcp_xspzzs_year;

    /**
     * 型式批准证书-累证
     */
    private Integer jlqjxcp_xspzzs_all;

    /**
     * 制造、修理计量器具-取得制造计量器具许可证的单位个体工商户-本年新增
     */
    private Integer zzxljlqj_zzxkz_add;

    /**
     * 制造、修理计量器具-取得制造计量器具许可证的单位个体工商户-本年减少
     */
    private Integer zzxljlqj_zzxkz_reduce;

    /**
     * 制造、修理计量器具-取得制造计量器具许可证的单位个体工商户累计
     */
    private Integer zzxljlqj_zzxkz_all;

    /**
     * 制造、修理计量器具-取得修理计量器具许可证的单位个体工商户-本年新增
     */
    private Integer zzxljlqj_xlxkz_add;

    /**
     * 制造、修理计量器具-取得修理计量器具许可证的单位个体工商户-本年减少
     */
    private Integer zzxljlqj_xlxkz_reduce;

    /**
     * 制造、修理计量器具-取得修理计量器具许可证的单位个体工商户
     */
    private Integer zzxljlqj_xlxkz_all;

    /**
     * 法制性--检查计量器具
     */
    private Integer jdjc_fzxjcqj;

    /**
     * 法制性--合格计量器具
     */
    private Integer jdjc_fzxhgqj;

    /**
     * 计量器具性能--检查计量器具
     */
    private Integer jdjc_xnjccc;

    /**
     * 计量器具性能--合格计量器具
     */
    private Integer jdjc_xnjchg;

    /**
     *以下七个为强制计量相关
     */
    private Integer qzjd_yqj;

    private Integer qzjd_yqjxb;

    private Integer qzjd_yqjzb;

    private Integer qzjd_jdsmyjs;

    private Integer qzjd_jdsaqfh;

    private Integer qzjd_jdsylws;

    private Integer qzjd_jdshjjc;

    /**
     * 计量检定员--依法设置计量检定机构
     */
    private Integer jljdy_szjdjg;

    /**
     * 计量检定员--授权法定计量检定机构
     */
    private Integer jljdy_sqjdjg;

    /**
     * 计量检定员--授权的其它单位
     */
    private Integer jljdy_sqqtdw;

    /**
     * 计量检定员--企、事业单位
     */
    private Integer jljdy_qsydw;

    /**
     *包装商品抽查---抽查批次
     */
    private Integer ccdlbz_ccpc;

    /**
     * 包装商品抽查---合格批次
     */
    private Integer ccdlbz_hgpc;

    /**
     * 社会公正计量站--新建
     */
    private Integer shgzjlz_xj;

    /**
     * 社会公正计量站--累计
     */
    private Integer shgzjlz_lj;

    /**
     *社会公正计量站--称重类--本年
     */
    private Integer shgzjlz_czl_year;

    /**
     *社会公正计量站--称重类--累计
     */
    private Integer shgzjlz_czl_all;

    /**
     *社会公正计量站--其他--本年
     */
    private Integer shgzjlz_qt_year;

    /**
     *社会公正计量站--其他--累计
     */
    private Integer shgzjlz_qt_all;

    /**
     *定量包装商品生产企业--取得C标志企业数--本年
     */
    private Integer dlbzspscqy_cbzqy_year;

    /**
     *定量包装商品生产企业--取得C标志企业数--累计
     */
    private Integer dlbzspscqy_cbzqy_all;

    /**
     *定量包装商品生产企业--取得C标志产品规格数--本年
     */
    private Integer dlbzspscqy_cbzcp_year;

    /**
     *定量包装商品生产企业--取得C标志产品规格数--累计
     */
    private Integer dlbzspscqy_cbzcp_all;

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

    public Integer getJlqjxcp_xspzzs_year() {
        return jlqjxcp_xspzzs_year;
    }

    public void setJlqjxcp_xspzzs_year(Integer jlqjxcp_xspzzs_year) {
        this.jlqjxcp_xspzzs_year = jlqjxcp_xspzzs_year;
    }

    public Integer getJlqjxcp_xspzzs_all() {
        return jlqjxcp_xspzzs_all;
    }

    public void setJlqjxcp_xspzzs_all(Integer jlqjxcp_xspzzs_all) {
        this.jlqjxcp_xspzzs_all = jlqjxcp_xspzzs_all;
    }

    public Integer getZzxljlqj_zzxkz_add() {
        return zzxljlqj_zzxkz_add;
    }

    public void setZzxljlqj_zzxkz_add(Integer zzxljlqj_zzxkz_add) {
        this.zzxljlqj_zzxkz_add = zzxljlqj_zzxkz_add;
    }

    public Integer getZzxljlqj_zzxkz_reduce() {
        return zzxljlqj_zzxkz_reduce;
    }

    public void setZzxljlqj_zzxkz_reduce(Integer zzxljlqj_zzxkz_reduce) {
        this.zzxljlqj_zzxkz_reduce = zzxljlqj_zzxkz_reduce;
    }

    public Integer getZzxljlqj_zzxkz_all() {
        return zzxljlqj_zzxkz_all;
    }

    public void setZzxljlqj_zzxkz_all(Integer zzxljlqj_zzxkz_all) {
        this.zzxljlqj_zzxkz_all = zzxljlqj_zzxkz_all;
    }

    public Integer getZzxljlqj_xlxkz_add() {
        return zzxljlqj_xlxkz_add;
    }

    public void setZzxljlqj_xlxkz_add(Integer zzxljlqj_xlxkz_add) {
        this.zzxljlqj_xlxkz_add = zzxljlqj_xlxkz_add;
    }

    public Integer getZzxljlqj_xlxkz_reduce() {
        return zzxljlqj_xlxkz_reduce;
    }

    public void setZzxljlqj_xlxkz_reduce(Integer zzxljlqj_xlxkz_reduce) {
        this.zzxljlqj_xlxkz_reduce = zzxljlqj_xlxkz_reduce;
    }

    public Integer getZzxljlqj_xlxkz_all() {
        return zzxljlqj_xlxkz_all;
    }

    public void setZzxljlqj_xlxkz_all(Integer zzxljlqj_xlxkz_all) {
        this.zzxljlqj_xlxkz_all = zzxljlqj_xlxkz_all;
    }

    public Integer getJdjc_fzxjcqj() {
        return jdjc_fzxjcqj;
    }

    public void setJdjc_fzxjcqj(Integer jdjc_fzxjcqj) {
        this.jdjc_fzxjcqj = jdjc_fzxjcqj;
    }

    public Integer getJdjc_fzxhgqj() {
        return jdjc_fzxhgqj;
    }

    public void setJdjc_fzxhgqj(Integer jdjc_fzxhgqj) {
        this.jdjc_fzxhgqj = jdjc_fzxhgqj;
    }

    public Integer getJdjc_xnjccc() {
        return jdjc_xnjccc;
    }

    public void setJdjc_xnjccc(Integer jdjc_xnjccc) {
        this.jdjc_xnjccc = jdjc_xnjccc;
    }

    public Integer getJdjc_xnjchg() {
        return jdjc_xnjchg;
    }

    public void setJdjc_xnjchg(Integer jdjc_xnjchg) {
        this.jdjc_xnjchg = jdjc_xnjchg;
    }

    public Integer getQzjd_yqj() {
        return qzjd_yqj;
    }

    public void setQzjd_yqj(Integer qzjd_yqj) {
        this.qzjd_yqj = qzjd_yqj;
    }

    public Integer getQzjd_yqjxb() {
        return qzjd_yqjxb;
    }

    public void setQzjd_yqjxb(Integer qzjd_yqjxb) {
        this.qzjd_yqjxb = qzjd_yqjxb;
    }

    public Integer getQzjd_yqjzb() {
        return qzjd_yqjzb;
    }

    public void setQzjd_yqjzb(Integer qzjd_yqjzb) {
        this.qzjd_yqjzb = qzjd_yqjzb;
    }

    public Integer getQzjd_jdsmyjs() {
        return qzjd_jdsmyjs;
    }

    public void setQzjd_jdsmyjs(Integer qzjd_jdsmyjs) {
        this.qzjd_jdsmyjs = qzjd_jdsmyjs;
    }

    public Integer getQzjd_jdsaqfh() {
        return qzjd_jdsaqfh;
    }

    public void setQzjd_jdsaqfh(Integer qzjd_jdsaqfh) {
        this.qzjd_jdsaqfh = qzjd_jdsaqfh;
    }

    public Integer getQzjd_jdsylws() {
        return qzjd_jdsylws;
    }

    public void setQzjd_jdsylws(Integer qzjd_jdsylws) {
        this.qzjd_jdsylws = qzjd_jdsylws;
    }

    public Integer getQzjd_jdshjjc() {
        return qzjd_jdshjjc;
    }

    public void setQzjd_jdshjjc(Integer qzjd_jdshjjc) {
        this.qzjd_jdshjjc = qzjd_jdshjjc;
    }

    public Integer getJljdy_szjdjg() {
        return jljdy_szjdjg;
    }

    public void setJljdy_szjdjg(Integer jljdy_szjdjg) {
        this.jljdy_szjdjg = jljdy_szjdjg;
    }

    public Integer getJljdy_sqjdjg() {
        return jljdy_sqjdjg;
    }

    public void setJljdy_sqjdjg(Integer jljdy_sqjdjg) {
        this.jljdy_sqjdjg = jljdy_sqjdjg;
    }

    public Integer getJljdy_sqqtdw() {
        return jljdy_sqqtdw;
    }

    public void setJljdy_sqqtdw(Integer jljdy_sqqtdw) {
        this.jljdy_sqqtdw = jljdy_sqqtdw;
    }

    public Integer getJljdy_qsydw() {
        return jljdy_qsydw;
    }

    public void setJljdy_qsydw(Integer jljdy_qsydw) {
        this.jljdy_qsydw = jljdy_qsydw;
    }

    public Integer getCcdlbz_ccpc() {
        return ccdlbz_ccpc;
    }

    public void setCcdlbz_ccpc(Integer ccdlbz_ccpc) {
        this.ccdlbz_ccpc = ccdlbz_ccpc;
    }

    public Integer getCcdlbz_hgpc() {
        return ccdlbz_hgpc;
    }

    public void setCcdlbz_hgpc(Integer ccdlbz_hgpc) {
        this.ccdlbz_hgpc = ccdlbz_hgpc;
    }

    public Integer getShgzjlz_xj() {
        return shgzjlz_xj;
    }

    public void setShgzjlz_xj(Integer shgzjlz_xj) {
        this.shgzjlz_xj = shgzjlz_xj;
    }

    public Integer getShgzjlz_lj() {
        return shgzjlz_lj;
    }

    public void setShgzjlz_lj(Integer shgzjlz_lj) {
        this.shgzjlz_lj = shgzjlz_lj;
    }

    public Integer getShgzjlz_czl_year() {
        return shgzjlz_czl_year;
    }

    public void setShgzjlz_czl_year(Integer shgzjlz_czl_year) {
        this.shgzjlz_czl_year = shgzjlz_czl_year;
    }

    public Integer getShgzjlz_czl_all() {
        return shgzjlz_czl_all;
    }

    public void setShgzjlz_czl_all(Integer shgzjlz_czl_all) {
        this.shgzjlz_czl_all = shgzjlz_czl_all;
    }

    public Integer getShgzjlz_qt_year() {
        return shgzjlz_qt_year;
    }

    public void setShgzjlz_qt_year(Integer shgzjlz_qt_year) {
        this.shgzjlz_qt_year = shgzjlz_qt_year;
    }

    public Integer getShgzjlz_qt_all() {
        return shgzjlz_qt_all;
    }

    public void setShgzjlz_qt_all(Integer shgzjlz_qt_all) {
        this.shgzjlz_qt_all = shgzjlz_qt_all;
    }

    public Integer getDlbzspscqy_cbzqy_year() {
        return dlbzspscqy_cbzqy_year;
    }

    public void setDlbzspscqy_cbzqy_year(Integer dlbzspscqy_cbzqy_year) {
        this.dlbzspscqy_cbzqy_year = dlbzspscqy_cbzqy_year;
    }

    public Integer getDlbzspscqy_cbzqy_all() {
        return dlbzspscqy_cbzqy_all;
    }

    public void setDlbzspscqy_cbzqy_all(Integer dlbzspscqy_cbzqy_all) {
        this.dlbzspscqy_cbzqy_all = dlbzspscqy_cbzqy_all;
    }

    public Integer getDlbzspscqy_cbzcp_year() {
        return dlbzspscqy_cbzcp_year;
    }

    public void setDlbzspscqy_cbzcp_year(Integer dlbzspscqy_cbzcp_year) {
        this.dlbzspscqy_cbzcp_year = dlbzspscqy_cbzcp_year;
    }

    public Integer getDlbzspscqy_cbzcp_all() {
        return dlbzspscqy_cbzcp_all;
    }

    public void setDlbzspscqy_cbzcp_all(Integer dlbzspscqy_cbzcp_all) {
        this.dlbzspscqy_cbzcp_all = dlbzspscqy_cbzcp_all;
    }

    @Override
    public int compareTo(Object obj){
        if (!(obj instanceof Measurement))
            throw new RuntimeException("no Measurement");
        Measurement measurement = (Measurement)obj;
        int result = this.getProvince().compareTo(measurement.getProvince());
        return result;
    }
}
