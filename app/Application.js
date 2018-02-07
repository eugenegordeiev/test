/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'MyApp',

    //autoCreateViewport: 'MyApp.view.Viewport', 
    requires: [
        'MyApp.view.Viewport',
        'Ext.window.MessageBox'
    ],   
    mainView: 'MyApp.view.Viewport',
    controllers : [
        'Main'
    ],
    launch : function() {
    }
});
