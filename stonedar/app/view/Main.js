Ext.define('Stone.view.Main', {
    extend: 'Ext.TabPanel',
    xtype: 'main',
    config: {
        tabBar: {hidden: true},
        //tabBarPosition : 'bottom',
        items : [
                 {
                    xtype: 'container',
                    title: 'saucy',
                    html: 'fucka you',
                    items : [{
                        xtype : 'titlebar',
                        title : 'Slide Nav',
                        docked : 'top',
                        items :[{
                            align : 'left',
                            name : 'nav_btn',
                            iconCls : 'list',
                            ui : 'plain'
                        }]
                    }]
                 }
                 ]
    }
});
