
const test = require("node:test");
const assert = require("node:assert");
const getHomeMessage = require("../app");

test("E-commerce application home page", () => {
    assert.strictEqual(
        getHomeMessage(),
        "Welcome to E-commerce Web Application!"
    );
});
