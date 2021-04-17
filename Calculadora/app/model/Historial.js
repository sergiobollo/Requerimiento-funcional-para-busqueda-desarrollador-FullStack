Ext.define('Calculadora.model.Historial', {
    extend: 'Calculadora.model.Base',

    fields: ['numero1', 'numero2', 'operacion', 'resultado'],
    proxy: {
        type: 'localstorage',
        id: 'historial'
    }
});
