const app = require("../app");
const request = require("supertest");
const server = request(app);

describe("Businesses TESTS", () => {
  it("Register A Business", (done) => {
    const data = {
      business_name: "Testing with erwizzle",
      user_name: "Test",
      password: "bizzzz",
      type: "biz",
      logo: "img.com",
    };
    return server.post("business/register").send(data).expect(201, done());
  });

  it("Get all Businesses", (done) => {
    return server.get("business/all").expect(200, done());
  });

  it("Login as a business", (done) => {
    const user = {
      user_name: "Test",
      password: "bizzzz"
    };
    return server.post("business/login").send(user).expect(201, done());
  })
});
