import { sum } from "../src/sum";

describe("테스트 작성해보기", () => {
  it("sum", () => {
    const a: number = 10;
    const b: number = 25;
    const result: number = sum(a, b);

    expect(result).toEqual(a + b);
  });
});
