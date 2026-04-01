import { it, expect, describe } from "vitest";
import { formatMoney } from "./money";

describe("formatMoney", () => {
  it("formats 1999 cents as $19.99", () => {
    expect(formatMoney(1999)).tobe("$19.99");
  });

  it("display 2 decimals", () => {
    expect(formatMoney(1090)).tobe("$10.90");
    expect(formatMoney(100)).tobe("$1.00");
  });
});
