import Clock from "../dist/model/Clock.js";

describe("Creating the clock", () => {
  test("The clock is created with the right values", () => {
    const clock = new Clock(10);
    expect(clock.getTimeinSeconds()).toBe(600);
  });

  test("The clock is created paused", () => {
    const clock = new Clock(10);
    expect(clock.getTimeIsCounting()).toBeFalsy();
  });
});
