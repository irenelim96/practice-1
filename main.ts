input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    for (let index = 0; index < 7; index++) {
        basic.showNumber(Timer)
        basic.pause(1000)
        Timer += -1
        strip.shift(1)
        strip.show()
    }
    if (Timer == 0) {
        basic.showNumber(0)
        basic.pause(500)
        basic.showIcon(IconNames.Sad)
    }
})
let strip: neopixel.Strip = null
let Timer = 0
Timer = 7
basic.showNumber(7)
strip = neopixel.create(DigitalPin.P0, 7, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.pause(1000)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
	
})
