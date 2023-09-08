let light2 = 0
let y1 = 0
let x1 = 0
let temp = 0
input.onButtonPressed(Button.A, function () {
    if (light2 < 100) {
        basic.showIcon(IconNames.Ghost)
    } else {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
function graph (y: number, x: number) {
    y1 = 4
    x1 = x
    for (let index = 0; index < y; index++) {
        led.plot(x1, y1)
        y1 += -1
    }
    basic.pause(5000)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    if (temp > 15 && temp < 28) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
loops.everyInterval(1000, function () {
    light2 = input.lightLevel()
    if (light2 <= 51) {
        graph(1, 0)
    } else if (light2 > 51 && light2 <= 102) {
        graph(2, 0)
    } else if (light2 > 102 && light2 <= 153) {
        graph(3, 0)
    } else if (light2 > 153 && light2 <= 204) {
        graph(4, 0)
    } else if (light2 > 204) {
        graph(5, 0)
    }
})
loops.everyInterval(1000, function () {
    temp = input.temperature()
    if (temp <= 11) {
        graph(1, 2)
    } else if (temp > 11 && temp <= 22) {
        graph(2, 2)
    } else if (temp > 22 && temp <= 33) {
        graph(3, 2)
    } else if (temp > 33 && temp <= 44) {
        graph(4, 2)
    } else if (temp > 44) {
        graph(5, 2)
    }
})
basic.forever(function () {
	
})
