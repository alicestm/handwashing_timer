micwert = 0
def countdown():
    for Index in range(5):
        for Index2 in range(5):
            led.plot(Index2, Index)
            basic.pause(1000)
    basic.show_icon(IconNames.HEART)
    music.begin_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
    basic.pause(1000)
def on_forever():
    micwert = pins.analog_read_pin(AnalogPin.MIC)
    if micwert > 800:
        countdown()
    else:
        basic.clear_screen()
basic.forever(on_forever)