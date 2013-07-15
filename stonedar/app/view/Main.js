Ext.define('Stone.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {
        
        items : [
                 {
                    xtype: 'container',
                    layout: 'card',
                    height: '100%',
                    items : [/*{
                        xtype : 'titlebar',
                        title : 'fuck me 1',
                        docked : 'top',
                        items :[{
                            align : 'left',
                            name : 'nav_btn',
                            iconCls : 'list',
                            ui : 'plain'
                        }]
                    },*/
                    {
                        xtype: 'container',
                        html: 'fuck me1',
                        items: [
                            {xtype: 'toptoolbar'}
                        ]
                    },
                    {
                        xtype: 'container',
                        html: 'fuck me2'
                    }
                    ]
                 }
                 ]
    }
});
