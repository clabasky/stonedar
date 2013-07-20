Ext.define('Stone.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    config: {
        
        items : [
                 {
                    xtype: 'container',
                    layout: 'card',
                    height: '100%',
                    items : [
                       // {xtype: 'activitypanel'},
                        {xtype: 'browseseshpanel'},
                        {xtype: 'createseshpanel'}
                    ]
                 }
                 ]
    }
});
