/**
 * This class is the main controller for the app.
 **/
Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',

    stores: [
        'Activities@MyApp.store'
    ],

    models: [
        'Activities@MyApp.model'
    ],

    views: [
        'Index@MyApp.view.main'
    ],

    init: function() {
    }
});
