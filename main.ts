input.onPinPressed(TouchPin.P0, function () {
    score += 1
    if (score == 5) {
        score = 0
        music.playTone(988, music.beat(BeatFraction.Half))
    }
})
let score = 0
let score_images = [
images.createImage(`
    . # # # .
    # . . . #
    # . . . #
    # . . . #
    . # # # .
    `),
images.createImage(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `),
images.createImage(`
    . # # # .
    . . . # .
    . # # # .
    . # . . .
    . # # # .
    `),
images.createImage(`
    . # # # .
    . . . # .
    . # # # .
    . . . # .
    . # # # .
    `),
images.createImage(`
    . # . # .
    . # . # .
    . # # # .
    . . . # .
    . . . # .
    `),
images.createImage(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
]
score = 0
basic.forever(function () {
    score_images[score].showImage(0)
})
