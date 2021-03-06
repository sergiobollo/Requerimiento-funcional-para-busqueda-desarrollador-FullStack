/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('Calculadora.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        'Calculadora.store.Personnel'
    ],

    store: {
        type: 'personnel'
    },

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        }
    },

    tabBarPosition: 'bottom',

    items: [
        {
        title: 'Calculos',
        layout: 'fit',
        items: [{
            xtype: 'mainlist'
        }
    ]
    },
   /* {
        title: 'Historial',
        layout: 'fit',
        items: [{
            xtype: 'mainhistorial',
        }
    ]
    } */
    ]
});
