Ext.define('MyApp.model.Activities', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.reader.Json'
    ],

    fields: ['no', 'date', 'username']
});
