import { sum } from "./sum";

describe("test add function", () => {
  it("should return 15 for add(10, 5)", () => {
    expect(sum(10, 5)).toBe(15);
  });

  it("should return 5 for add(2, 3)", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should return 0 for add(1, null)", () => {
    expect(sum(1, null)).toBe(0);
  });

  it("should return 0 for add(undefined, 10)", () => {
    expect(sum(undefined, 10)).toBe(0);
  });

  it("should return 0 for add('', 9)", () => {
    expect(sum(undefined, 9)).toBe(0);
  });
});
