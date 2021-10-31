import Clock from "../dist/model/Clock.js";

describe("Creating the clock", () => {
  test("The clock is created with the right values", () => {
    const clock = new Clock(10);
    expect(clock.getTimeinSeconds()).toBe(600);

    const clock2 = new Clock(5);
    expect(clock2.getTimeinSeconds()).toBe(300);
  });

  test("The clock is created paused", () => {
    const clock = new Clock(10);
    expect(clock.getTimeIsCounting()).toBeFalsy();
  });
});

describe("Clock behaviour", () => {
  test("Starting the clock", () => {
    const clock = new Clock(10);
    clock.startClock();

    expect(clock.getTimeIsCounting()).toBeTruthy();
  });

  test("Pausing the clock", () => {
    const clock = new Clock(10);
    clock.pauseClock();

    expect(clock.getTimeIsCounting()).toBeFalsy();
  });

  test("Starting and pausing the clock", () => {
    const clock = new Clock(10);
    clock.startClock();
    clock.pauseClock();

    expect(clock.getTimeIsCounting()).toBeFalsy();

    clock.startClock();

    expect(clock.getTimeIsCounting()).toBeTruthy();
  });

  test("Starting and pausing the clock using toggle", () => {
    const clock = new Clock(10);
    clock.toggleCounting();

    expect(clock.getTimeIsCounting()).toBeTruthy();

    clock.toggleCounting();

    expect(clock.getTimeIsCounting()).toBeFalsy();
  });
});
