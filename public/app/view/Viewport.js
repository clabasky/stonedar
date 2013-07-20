Ext.define('Stone.view.Viewport', {
    extend: 'Ext.Container',
    xtype: 'app_viewport',
    requires: [
    'Ext.TitleBar'
    ],
    config: {
	html: 'fucka you',
        fullscreen: true,
        layout: 'fit',
        items : [
		 {
                    xtype : 'main',
                //    cls: 'slide',
                    
                    // Needed to fit the whole content
                    width: '100%'												
        },
	/*{
                    xtype : 'navigation',
                    width : 250
        }*/
	]
    }
});
