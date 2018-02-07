/**
 * This is the main Viewport which provides the main container for all the views
 **/
Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.Panel',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'panel',
            flex: 1
        },
        {
            xtype: 'main-index',
            flex: 1
        },
        {
            xtype: 'panel',
            flex: 1
        }
    ]
});
