import { html } from "lit";

import { CardContent } from "../../../../src/components/sun-card/card-content";
import { ISunCardConfig, TSunCardData } from "../../../../src/types";
import { Helpers } from "../../../../src/utils/helpers";
import { CustomSnapshotSerializer, TemplateResultTestHelper } from "../../../helpers";

jest.mock("../../../../src/components/sun-card/header", () => require("../../../mocks/header"));
jest.mock("../../../../src/components/sun-card/sun-curve", () => require("../../../mocks/sun-curve"));
jest.mock("../../../../src/components/sun-card/footer", () => require("../../../mocks/footer"));

expect.addSnapshotSerializer(new CustomSnapshotSerializer());

describe("CardContent", () => {
  describe("render", () => {
    beforeAll(() => {
      jest.spyOn(Helpers, "nothing").mockImplementation(() => html``);
    });

    it("sets dark mode when it is set to true on the config", async () => {
      const config: ISunCardConfig = {
        type: "sun-card",
        darkMode: true
      };

      const sunCardContent = new CardContent(config, {} as TSunCardData);
      const element = window.document.createElement("test-element") as TemplateResultTestHelper<typeof sunCardContent.render>;
      element.templateResultFunction = () => sunCardContent.render();
      window.document.body.appendChild(element);
      await element.updateComplete;

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot();
    });

    it("does not set dark mode when it is set to false on the config", async () => {
      const config: ISunCardConfig = {
        type: "sun-card",
        darkMode: false
      };

      const sunCardContent = new CardContent(config, {} as TSunCardData);
      const element = window.document.createElement("test-element") as TemplateResultTestHelper<typeof sunCardContent.render>;
      element.templateResultFunction = () => sunCardContent.render();
      window.document.body.appendChild(element);
      await element.updateComplete;

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot();
    });

    it("renders the header when show header returns true", async () => {
      const sunCardContent = new CardContent({} as ISunCardConfig, {} as TSunCardData);
      jest.spyOn((sunCardContent as unknown as { showHeader: () => boolean }), "showHeader").mockImplementation(() => true);

      const element = window.document.createElement("test-element") as TemplateResultTestHelper<typeof sunCardContent.render>;
      element.templateResultFunction = () => sunCardContent.render();
      window.document.body.appendChild(element);
      await element.updateComplete;

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot();
    });

    it("does not render the header when show header returns false", async () => {
      const sunCardContent = new CardContent({} as ISunCardConfig, {} as TSunCardData);
      jest.spyOn((sunCardContent as unknown as { showHeader: () => boolean }), "showHeader").mockImplementation(() => false);

      const element = window.document.createElement("test-element") as TemplateResultTestHelper<typeof sunCardContent.render>;
      element.templateResultFunction = () => sunCardContent.render();
      window.document.body.appendChild(element);
      await element.updateComplete;

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot();
    });

    it("renders the footer when show footer returns true", async () => {
      const sunCardContent = new CardContent({} as ISunCardConfig, {} as TSunCardData);
      jest.spyOn((sunCardContent as unknown as { showFooter: () => boolean }), "showFooter").mockImplementation(() => true);

      const element = window.document.createElement("test-element") as TemplateResultTestHelper<typeof sunCardContent.render>;
      element.templateResultFunction = () => sunCardContent.render();
      window.document.body.appendChild(element);
      await element.updateComplete;

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot();
    });

    it("does not render the footer when show footer returns false", async () => {
      const sunCardContent = new CardContent({} as ISunCardConfig, {} as TSunCardData);
      jest.spyOn((sunCardContent as unknown as { showFooter: () => boolean }), "showFooter").mockImplementation(() => false);

      const element = window.document.createElement("test-element") as TemplateResultTestHelper<typeof sunCardContent.render>;
      element.templateResultFunction = () => sunCardContent.render();
      window.document.body.appendChild(element);
      await element.updateComplete;

      expect(element.shadowRoot!.innerHTML).toMatchSnapshot();
    });
  });
});
