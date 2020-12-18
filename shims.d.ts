// Auto-generated. Do not edit.



//% color=50 weight=11
//% icon="\uf1eb"
//% block="Tinybit_IR_V1.5"
declare namespace Mbit_IR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="on |%btn| button pressed" shim=Mbit_IR::onPressEvent
    function onPressEvent(btn: RemoteButton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="connect ir receiver to %pin" shim=Mbit_IR::initIR
    function initIR(pin: Pins): void;
}

// Auto-generated. Do not edit. Really.
