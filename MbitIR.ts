

//% weight=10 color=#008B00 icon="\uf1eb" block="Tinybit_IR_V2"
namespace MbitIR {
    
    let irstate:number;
    let state:number;
    
    export enum enIRButton {

        //% blockId="Power" block="Power"
        Power = 0x00,
        //% blockId="Up" block="Up"
        Up = 0x01,
        //% blockId="Light" block="Light"
        Light = 0x02,
        //% blockId="Left" block="Left"
        Left = 0x04,
        //% blockId="Beep" block="Beep"
        Beep = 0x05,
        //% blockId="Right" block="Right"
        Right = 0x06,
        //% blockId="SpinLeft" block="SpinLeft"
        SpinLeft = 0x08,
        //% blockId="Down" block="Down"
        Down = 0x09,
        //% blockId="SpinRight" block="SpinRight"
        SpinRight = 0x0a,
        //% blockId="Add" block="Add"
        Add = 0x0c,
        //% blockId="Zero" block="Zero"
        Zero = 0x0d,
        //% blockId="Minus" block="Minus"
        Minus = 0x0e,
        //% blockId="One" block="One"
        One = 0x10,
        //% blockId="Two" block="Two"
        Two = 0x11,
        //% blockId="Three" block="Three"
        Three = 0x12,
        //% blockId="Four" block="Four"
        Four = 0x14,
        //% blockId="Five" block="Five"
        Five = 0x15,
        //% blockId="Six" block="Six"
        Six = 0x16,
        //% blockId="Seven" block="Seven"
        Seven = 0x18,
        //% blockId="Eight" block="Eight"
        Eight = 0x19,
        //% blockId="Nine" block="Nine"
        Nine = 0x1a,

    }



     /**
     * Read IR sensor value V2.
     */

    //% advanced=true shim=Mbit_IR::irCode
    function irCode(): number {
        return 0;
    }

    //% weight=5
    //% blockId=MbitIR_IR_KeyValue block="IR_KeyValue|value %value"
    export function IR_KeyValue(value: enIRButton): number {
        return value;
    }

    
    //% weight=5
    //% blockId=MbitIR_IR_readV2 block="read IR key value"
    export function IR_readV2(): number {
        return valuotokeyConversion();
    }

    //% weight=2
    //% blockId=MbitIR_IR_callbackUserV2 block="on IR received"
    //% draggableParameters
    export function IR_callbackUserV2(cb: (message: number) => void) {
        state = 1;
        control.onEvent(11, 22, function() {
            cb(irstate);
        }) 
    }

    function valuotokeyConversion():number{
        let irdata:number;
        switch(irCode()){
            case 0xff00:irdata = 0;break;
            case 0xfe01:irdata = 1;break;
            case 0xfd02:irdata = 2;break;
            case 0xfb04:irdata = 4;break;
            case 0xfa05:irdata = 5;break;
            case 0xf906:irdata = 6;break;
            case 0xf708:irdata = 8;break;
            case 0xf609:irdata = 9;break;
            case 0xf50a:irdata = 10;break;
            case 0xf30c:irdata = 12;break;
            case 0xf20d:irdata = 13;break;
            case 0xf10e:irdata = 14;break;
            case 0xef10:irdata = 16;break;
            case 0xee11:irdata = 17;break;
            case 0xed12:irdata = 18;break;
            case 0xeb14:irdata = 20;break;
            case 0xea15:irdata = 21;break;
            case 0xe916:irdata = 22;break;
            case 0xe718:irdata = 24;break;
            case 0xe619:irdata = 25;break;
            case 0xe51a:irdata = 26;break;
            default:
             irdata = -1;
        }
        return irdata;
    }

    basic.forever(() => {
        if(state == 1){
            irstate = valuotokeyConversion();
            if(irstate != -1){
                control.raiseEvent(11, 22);
            }
        }
        
        basic.pause(20);
    })

}
