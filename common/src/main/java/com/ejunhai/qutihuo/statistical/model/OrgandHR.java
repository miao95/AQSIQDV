package com.ejunhai.qutihuo.statistical.model;

/***
 *机构与人员信息
 * @author wugang
 * @date 2017-06-14
 */
public class OrgandHR{


    private String id;
    private String province;
    private Integer year;
    private Integer org_nonadmin;		//机构-事业
    private Integer emp_bz_count;		//人员合计编制
    private Integer emp_zz_count;		//人员合计在职
    private Integer emp_xz_bz_count;		//人员行政编制小计
    private Integer emp_xz_zz_count;		//人员行政在职小计
    private Integer emp_xz_wh_bs;		//人员行政文化程度博士
    private Integer emp_xz_wh_ss;	//人员行政文化程度硕士
    private Integer emp_xz_wh_bk;		//人员行政文化程度本科
    private Integer emp_xz_wh_zk;		//人员行政文化程度专科
    private Integer emp_xz_wh_gz;		//人员行政文化程度高中
    private Integer emp_xz_xz_gwy;		//行政工作性质公务员
    private Integer emp_xz_xz_aqry;		//行政工作性质工勤人员
    private Integer emp_sy_bz_count;		//事业编制小计
    private Integer emp_sy_zz_count;		//事业在职小计
    private Integer emp_sy_zc_gj;	//事业按技术职称-高级
    private Integer emp_sy_zc_zj;		//事业按技术职称-中级
    private Integer emp_sy_zc_cj;		//事业按技术职称-初级
    private Integer emp_sy_wh_bs;		//事业文化程度博士
    private Integer emp_sy_wh_ss;		//事业文化程度硕士
    private Integer emp_sy_wh_bk;		//事业文化程度本科
    private Integer emp_sy_wh_zk;		//事业文化程度专科
    private Integer emp_sy_wh_gz;		//事业文化程度高中
    private Integer emp_sy_xz_gl;		//事业工作性质管理人员
    private Integer emp_sy_xz_zyjs;		//事业工作性质专业技术人员
    private Integer emp_sy_xz_gr;		//事业工作性质工人
    private Integer emp_other;		    //其他从业人员
    private Integer emp_retired;		   //离退休人员

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getProvince() {
        return province;
    }
    public void setProvince(String province) {
        this.province = province;
    }
    public Integer getOrg_admin() {
        return org_admin;
    }

    public void setOrg_admin(Integer org_admin) {
        this.org_admin = org_admin;
    }

    private Integer org_admin;		//机构—行政

    public Integer getOrg_nonadmin() {
        return org_nonadmin;
    }

    public void setOrg_nonadmin(Integer org_nonadmin) {
        this.org_nonadmin = org_nonadmin;
    }

    public Integer getEmp_bz_count() {
        return emp_bz_count;
    }

    public void setEmp_bz_count(Integer emp_bz_count) {
        this.emp_bz_count = emp_bz_count;
    }

    public Integer getEmp_zz_count() {
        return emp_zz_count;
    }

    public void setEmp_zz_count(Integer emp_zz_count) {
        this.emp_zz_count = emp_zz_count;
    }

    public Integer getEmp_xz_bz_count() {
        return emp_xz_bz_count;
    }

    public void setEmp_xz_bz_count(Integer emp_xz_bz_count) {
        this.emp_xz_bz_count = emp_xz_bz_count;
    }

    public Integer getEmp_xz_zz_count() {
        return emp_xz_zz_count;
    }

    public void setEmp_xz_zz_count(Integer emp_xz_zz_count) {
        this.emp_xz_zz_count = emp_xz_zz_count;
    }

    public Integer getEmp_xz_wh_bs() {
        return emp_xz_wh_bs;
    }

    public void setEmp_xz_wh_bs(Integer emp_xz_wh_bs) {
        this.emp_xz_wh_bs = emp_xz_wh_bs;
    }

    public Integer getEmp_xz_wh_ss() {
        return emp_xz_wh_ss;
    }

    public void setEmp_xz_wh_ss(Integer emp_xz_wh_ss) {
        this.emp_xz_wh_ss = emp_xz_wh_ss;
    }

    public Integer getEmp_xz_wh_bk() {
        return emp_xz_wh_bk;
    }

    public void setEmp_xz_wh_bk(Integer emp_xz_wh_bk) {
        this.emp_xz_wh_bk = emp_xz_wh_bk;
    }

    public Integer getEmp_xz_wh_zk() {
        return emp_xz_wh_zk;
    }

    public void setEmp_xz_wh_zk(Integer emp_xz_wh_zk) {
        this.emp_xz_wh_zk = emp_xz_wh_zk;
    }

    public Integer getEmp_xz_wh_gz() {
        return emp_xz_wh_gz;
    }

    public void setEmp_xz_wh_gz(Integer emp_xz_wh_gz) {
        this.emp_xz_wh_gz = emp_xz_wh_gz;
    }

    public Integer getEmp_xz_xz_gwy() {
        return emp_xz_xz_gwy;
    }

    public void setEmp_xz_xz_gwy(Integer emp_xz_xz_gwy) {
        this.emp_xz_xz_gwy = emp_xz_xz_gwy;
    }

    public Integer getEmp_xz_xz_aqry() {
        return emp_xz_xz_aqry;
    }

    public void setEmp_xz_xz_aqry(Integer emp_xz_xz_aqry) {
        this.emp_xz_xz_aqry = emp_xz_xz_aqry;
    }

    public Integer getEmp_sy_bz_count() {
        return emp_sy_bz_count;
    }

    public void setEmp_sy_bz_count(Integer emp_sy_bz_count) {
        this.emp_sy_bz_count = emp_sy_bz_count;
    }

    public Integer getEmp_sy_zz_count() {
        return emp_sy_zz_count;
    }

    public void setEmp_sy_zz_count(Integer emp_sy_zz_count) {
        this.emp_sy_zz_count = emp_sy_zz_count;
    }

    public Integer getEmp_sy_zc_gj() {
        return emp_sy_zc_gj;
    }

    public void setEmp_sy_zc_gj(Integer emp_sy_zc_gj) {
        this.emp_sy_zc_gj = emp_sy_zc_gj;
    }

    public Integer getEmp_sy_zc_zj() {
        return emp_sy_zc_zj;
    }

    public void setEmp_sy_zc_zj(Integer emp_sy_zc_zj) {
        this.emp_sy_zc_zj = emp_sy_zc_zj;
    }

    public Integer getEmp_sy_zc_cj() {
        return emp_sy_zc_cj;
    }

    public void setEmp_sy_zc_cj(Integer emp_sy_zc_cj) {
        this.emp_sy_zc_cj = emp_sy_zc_cj;
    }

    public Integer getEmp_sy_wh_bs() {
        return emp_sy_wh_bs;
    }

    public void setEmp_sy_wh_bs(Integer emp_sy_wh_bs) {
        this.emp_sy_wh_bs = emp_sy_wh_bs;
    }

    public Integer getEmp_sy_wh_ss() {
        return emp_sy_wh_ss;
    }

    public void setEmp_sy_wh_ss(Integer emp_sy_wh_ss) {
        this.emp_sy_wh_ss = emp_sy_wh_ss;
    }

    public Integer getEmp_sy_wh_bk() {
        return emp_sy_wh_bk;
    }

    public void setEmp_sy_wh_bk(Integer emp_sy_wh_bk) {
        this.emp_sy_wh_bk = emp_sy_wh_bk;
    }

    public Integer getEmp_sy_wh_zk() {
        return emp_sy_wh_zk;
    }

    public void setEmp_sy_wh_zk(Integer emp_sy_wh_zk) {
        this.emp_sy_wh_zk = emp_sy_wh_zk;
    }

    public Integer getEmp_sy_wh_gz() {
        return emp_sy_wh_gz;
    }

    public void setEmp_sy_wh_gz(Integer emp_sy_wh_gz) {
        this.emp_sy_wh_gz = emp_sy_wh_gz;
    }

    public Integer getEmp_sy_xz_gl() {
        return emp_sy_xz_gl;
    }

    public void setEmp_sy_xz_gl(Integer emp_sy_xz_gl) {
        this.emp_sy_xz_gl = emp_sy_xz_gl;
    }

    public Integer getEmp_sy_xz_zyjs() {
        return emp_sy_xz_zyjs;
    }

    public void setEmp_sy_xz_zyjs(Integer emp_sy_xz_zyjs) {
        this.emp_sy_xz_zyjs = emp_sy_xz_zyjs;
    }

    public Integer getEmp_sy_xz_gr() {
        return emp_sy_xz_gr;
    }

    public void setEmp_sy_xz_gr(Integer emp_sy_xz_gr) {
        this.emp_sy_xz_gr = emp_sy_xz_gr;
    }

    public Integer getEmp_other() {
        return emp_other;
    }

    public void setEmp_other(Integer emp_other) {
        this.emp_other = emp_other;
    }

    public Integer getEmp_retired() {
        return emp_retired;
    }

    public void setEmp_retired(Integer emp_retired) {
        this.emp_retired = emp_retired;
    }
    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

}
