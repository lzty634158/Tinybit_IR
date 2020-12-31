/*
Copyright (C): 2020, Shenzhen Yahboom Tech
modified by chengengyue
*/

/**
 * IR remote V1.5
 */

//% color=50 weight=11
//% icon="\uf1eb"
//% block="HelloBot_IR_V1.5"
namespace Mbit_IR {

    /**
    * initialization
    */
    //% blockId=Mbit_IR_init
    //% blockGap=20 weight=90
    //% block="connect ir receiver to %pin"
    //% shim=Mbit_IR::init
    export function init(pin: Pins): void {
      return
    }
  
    /**
    * button pushed.
    */
    //% blockId=Mbit_IR_received_event
    //% blockGap=20 weight=89
    //% block="on |%btn| button pressed"
    //% shim=Mbit_IR::onPressEvent
    export function onPressEvent(btn: RemoteButton, body:Action): void {
      return
    }
  
  
  }
  