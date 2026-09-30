const r = require('raylib');

const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 700;
const TITLE = "RAYLIB-TEMPLATE";
const FPS = 50;

function running() {
    return !r.WindowShouldClose();
}


function setup() {
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, TITLE);
    r.SetTargetFPS(FPS);
}

const color = {

    rect: {
        r: 255,
        g: 0,
        b: 0,
        a: 255,
    },

    lines: {
        r: 255,
        g: 255,
        b: 255,
        a: 255,
    }


}

const windowRect = {

    x: 50,
    y: 50,
    width: 100,
    height: 80,
}


function update() {

}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    // write code from here

    r.DrawRectangleRec(windowRect, color.rect);
    r.DrawRectangleLines(windowRect.x, windowRect.y, windowRect.width, windowRect.height, color.lines)

    // code end
    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};