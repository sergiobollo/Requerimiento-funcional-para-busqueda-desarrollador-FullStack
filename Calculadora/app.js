/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Calculadora.Application',

    name: 'Calculadora',

    requires: [
        // This will automatically load all classes in the Calculadora namespace
        // so that application classes do not need to require each other.
        'Calculadora.*'
    ],

    // The name of the initial view to create.
    mainView: 'Calculadora.view.main.Main'
});
