Ext.define('Calculadora.store.Historial', {
    extend: 'Ext.data.Store',

    storeId: 'historial',

    alias: 'store.historial',

    model: 'Calculadora.model.Historial',

    autoLoad: true,

});
