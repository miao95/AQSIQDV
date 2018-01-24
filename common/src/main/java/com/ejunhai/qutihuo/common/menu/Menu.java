package com.ejunhai.qutihuo.common.menu;

import com.ejunhai.qutihuo.statistical.model.Measurement;
import com.ejunhai.qutihuo.system.model.SystemAction;

import java.util.List;

public class Menu {
    boolean node;
    SystemAction menuNode;
    List<SystemAction> menuList;

    public Menu(boolean isNode){
        this.node=isNode;
    }

    public boolean isNode() {
        return node;
    }

    public SystemAction getMenuNode() {
        return menuNode;
    }

    public void setMenuNode(SystemAction menuNode) {
        this.menuNode = menuNode;
    }

    public List<SystemAction> getMenuList() {
        return menuList;
    }

    public void setMenuList(List<SystemAction> menuList) {
        this.menuList = menuList;
    }
}
