import { html, TemplateResult } from "lit";

import { ISunCardConfig, TSunCardData } from "../../types";
import { Helpers } from "../../utils/helpers";
import { Footer } from "./footer";
import { Header } from "./header";
import { SunCurve } from "./sun-curve";

export class CardContent {
  private config: ISunCardConfig;
  private data: TSunCardData;

  constructor(config: ISunCardConfig, data: TSunCardData) {
    this.config = config;
    this.data = data;
  }

  render(): TemplateResult {
    return html`
      <ha-card>
        <div class="sun-card ${this.config.darkMode ? "sun-card-dark" : ""}">
          ${this.showHeader() ? this.renderHeader() : Helpers.nothing()}
          ${this.renderGraph()}
          ${this.showFooter() ? this.renderFooter() : Helpers.nothing()}
        </div>
      </ha-card>
    `;
  }

  private renderHeader(): TemplateResult {
    return new Header(this.config, this.data).render();
  }

  private renderGraph(): TemplateResult {
    return new SunCurve(this.data).render();
  }

  private renderFooter(): TemplateResult {
    return new Footer(this.config, this.data).render();
  }

  private showHeader(): boolean {
    // logic based on config
    return true;
  }

  private showFooter(): boolean {
    // logic based on config
    return true;
  }
}
