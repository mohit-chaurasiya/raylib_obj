const r = require('raylib');

const WINDOW_WIDTH = 800;
const WINDOW_HEIGHT = 700;
const TITLE = "Two - Points";
const FPS = 50;

function running() {
    return !r.WindowShouldClose();
}


function setup() {
    r.SetTraceLogLevel(r.LOG_NONE)
    r.InitWindow(WINDOW_WIDTH, WINDOW_HEIGHT, TITLE);
    r.SetTargetFPS(FPS);
}

const leftPoint = {
    x: 50,
    y: 100,
    r: 50,
    color: r.RED
}

const rightPoint = {
    x: 250,
    y: 500,
    r: 50,
    color: r.RED
}




function update() {

}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    // write code from here

    r.DrawCircle(leftPoint.x, leftPoint.y, leftPoint.r, leftPoint.color)
    r.DrawCircle(rightPoint.x, rightPoint.y, rightPoint.r, rightPoint.color)
    r.DrawLineV(leftPoint, rightPoint, r.BLACK)
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