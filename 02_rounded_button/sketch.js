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



const button = {
    position: {
        x: 100,
        y: 100,
        height: 300,
        width: 600,
    },

    color: {
        r: 255,
        g: 0,
        b: 0,
        a: 255,
    }
}



function update() {

}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    // write code from here


    r.DrawRectangleRounded(button.position, 0.9, 1, button.color);
    r.DrawRectangleLines(button.position.x, button.position.y, button.position.width, button.position.height, r.BLACK)


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