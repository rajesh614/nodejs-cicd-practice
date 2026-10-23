const test = require("node:test");
const assert = require("node:assert/strict");
const server = require("./app");

test("GET / returns a success response", async () => {
    await new Promise((resolve) => {
        server.listen(0, "127.0.0.1", resolve);
    });

    try {
        const address = server.address();
        const response = await fetch(`http://127.0.0.1:${address.port}/`);

        assert.equal(response.status, 200);

        const data = await response.json();
        assert.equal(
            data.message,
            "Node.js server is running! Auto-deployment works!!",
        );
    } finally {
        await new Promise((resolve, reject) => {
            server.close((err) => (err ? reject(err) : resolve()));
        });
    }
});
