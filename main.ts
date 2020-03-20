let micwert = 0
function countdown () {
    for (let Index = 0; Index <= 4; Index++) {
        for (let Index2 = 0; Index2 <= 4; Index2++) {
            led.plot(Index2, Index)
            basic.pause(1000)
        }
    }
    basic.showIcon(IconNames.Heart)
    music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    basic.pause(1000)
}
basic.forever(function () {
    micwert = pins.analogReadPin(AnalogPin.MIC)
    if (micwert > 800) {
        countdown()
    } else {
        basic.clearScreen()
    }
})
