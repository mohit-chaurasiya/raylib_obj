const r = require('raylib');

const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 700;
const TITLE = "Coincenteric Circle";
const FPS = 50;

function running() {
    return !r.WindowShouldClose();
}


function setup() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, TITLE);
    r.SetTargetFPS(FPS);
}

const targetPosition = {
    x: 250,
    y: 250,
}

const largeCircle = {
    r: 80,
    color: r.GREEN,
}

const mediumCircle = {
    r: 40,
    color: r.BLUE,
}

const smallCircle = {
    r: 20,
    color: r.RED,
}


function target() {
    r.DrawCircle(targetPosition.x, targetPosition.y, largeCircle.r, largeCircle.color)
    r.DrawCircle(targetPosition.x, targetPosition.y, mediumCircle.r, mediumCircle.color)
    r.DrawCircle(targetPosition.x, targetPosition.y, smallCircle.r, smallCircle.color)
}

function update() {

}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    // write code from here

    target();
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