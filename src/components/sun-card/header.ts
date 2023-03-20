import { html, TemplateResult } from "lit";

import { ESunCardI18NKeys, ISunCardConfig, TSunCardData, TSunCardFields, TSunCardTimes } from "../../types";
import { Helpers } from "../../utils/helpers";
import { I18N } from "../../utils/i18n";

export class Header {
  private title?: string;
  private times: TSunCardTimes;
  private fields: TSunCardFields;
  private i18n: I18N;

  constructor(config: ISunCardConfig, data: TSunCardData) {
    this.title = config.title;
    this.fields = config.fields!;
    this.times = data?.times;

    this.i18n = config.i18n!;
  }

  public render(): TemplateResult {
    return html`
      ${this.showTitle() ? this.renderTitle() : Helpers.nothing()}
      ${this.renderHeader()}
    `;
  }

  private renderTitle(): TemplateResult {
    return html`<div class="sun-card-title">${this.title}</div>`;
  }

  private renderHeader(): TemplateResult {
    return html`
      <div class="sun-card-header">
        ${
      this.fields?.sunrise && this.times?.sunrise
        ? Helpers.renderFieldElement(this.i18n, ESunCardI18NKeys.Sunrise, this.times.sunrise)
        : Helpers.nothing()
    }
        ${
      this.fields?.sunset && this.times?.sunset
        ? Helpers.renderFieldElement(this.i18n, ESunCardI18NKeys.Sunset, this.times.sunset)
        : Helpers.nothing()
    }
      </div>
    `;
  }

  private showTitle(): boolean {
    return this.title !== undefined;
  }
}
