process.env.NODE_ENV = "test";

const app = require("../app");
const request = require("supertest");
const User = require("../models/user");
const { describe } = require("../models/user");

//Tests
describe("GET /users/", ()=> {
    it("gets all users", async ()=> {
        const response = await request(app).get("/users/");
        expect(response.statusCode).toBe(200);
        expect(response.body.users.length).toEqual(3);
    })
})

// Get TypeError:Cannot read properties of undefined (reading 'QueryInterface')
// This is a sequelize issue even though it is triggered by "describe", the testing function
