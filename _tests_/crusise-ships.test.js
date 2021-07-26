const Ship = require("../src/ship");

describe("constructor", () => {
  let ship;
  beforeEach(() => {
    ship = new Ship();

  });

  it("can be instantiated", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });


  it("has a starting port", () => {
    ship.startingPort = 'Dover'
    expect(ship.startingPort).toBe('Dover');
  });
});
