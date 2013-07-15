Ext.define('Stone.controller.Main',{
    extend: 'Ext.app.Controller',    
    config:{
            refs:{
                main : 'main',
                navigation : 'navigation',
                mainNav : 'main > container',
                
                navBtn : 'button[name="nav_btn"]',
                
                
            },

            control : {
                navBtn : {
                    tap : 'toggleNav'
                },
                
                navigation : {
                    itemtap : function(list, index, target, record){
                        this.navListItemTap(record.data.value);
                        this.toggleNav();
                    }
                }
            }
    },
    
    navListItemTap: function(value){
        
        var mainNav = Stone.app.getController('Main').getMainNav();
        
        if('activity' == value){
            
        }
        if('browse' == value){
            var browse = Stone.app.getController('BrowseSeshController').getBrowseSeshPanel();
            mainNav.setActiveItem(browse);
        }
        if('create' == value){
            var create = Stone.app.getController('CreateSeshController').getCreateSeshPanel();
            mainNav.setActiveItem(create);
        }
    },
    
    /**
     * Toggle the slide navogation view
     */
    toggleNav : function(){
        var me = this,
        mainEl = me.getMain().element;
        
        if (mainEl.hasCls('out')) {
            mainEl.removeCls('out').addCls('in'); 
            me.getMain().setMasked(false);
        } else {
            mainEl.removeCls('in').addCls('out');  
            me.getMain().setMasked(true);
        }
    }
});