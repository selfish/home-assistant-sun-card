import { CSSResult } from "lit";

import cardStyles from "../../src/styles";

describe("cardStyles", () => {
  it("returns a CSSResult", () => {
    expect(cardStyles).toBeInstanceOf(CSSResult);
  });
});
