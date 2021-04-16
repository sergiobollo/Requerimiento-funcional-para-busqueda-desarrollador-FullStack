Ext.define('Calculadora.store.Historial', {
    extend: 'Ext.data.Store',

    alias: 'store.historial',

    model: 'Calculadora.model.Historial',

    data: { items: [
        { numero1: '1', numero2: "2", operacion: "+", resultado: '3' },

    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
