let value = 0
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("Alarm disabled")
})
basic.forever(function () {
    if ((0 as any) > (200 as any)) {
        music.playMelody("C5 G C5 G C5 G C5 G ", 296)
    } else {
        value = pins.analogReadPin(AnalogPin.P1)
        basic.showNumber(value)
    }
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(300)
})
