Ext.define('Stone.view.Navigation', {
    extend: 'Ext.List',
    xtype: 'navigation',
    requires : ['Ext.data.Store'],
    config: {
        cls : 'nav-list',
        itemTpl : '{title}',
        data : [{
                    title : 'Activity',
		    value: 'activity'
                },{
                    title : 'Browse Sessions',
		    value : 'browse'
                },{
                    title : 'Create a Session',
		    value : 'create'
        }]
    }
});