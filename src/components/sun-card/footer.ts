import { html, TemplateResult } from "lit";

import { ESunCardI18NKeys, ISunCardConfig, TSunCardData, TSunCardFields, TSunCardTimes } from "../../types";
import { Helpers } from "../../utils/helpers";
import { I18N } from "../../utils/i18n";

export class Footer {
  private data: TSunCardData;
  private i18n: I18N;
  private times: TSunCardTimes;
  private fields: TSunCardFields;

  constructor(config: ISunCardConfig, data: TSunCardData) {
    this.data = data;

    this.i18n = config.i18n!;
    this.times = data?.times;
    this.fields = config.fields!;
  }

  public render(): TemplateResult {
    return html`
      <div class="sun-card-footer">
        <div class="sun-card-field-row">
          ${
      this.fields?.dawn !== undefined && this.times?.dawn !== undefined
        ? Helpers.renderFieldElement(this.i18n, ESunCardI18NKeys.Dawn, this.times.dawn)
        : Helpers.nothing()
    }
          ${
      this.fields?.noon !== undefined && this.times?.noon !== undefined
        ? Helpers.renderFieldElement(this.i18n, ESunCardI18NKeys.Noon, this.times.noon)
        : Helpers.nothing()
    }
          ${
      this.fields?.dusk !== undefined && this.times?.dusk !== undefined
        ? Helpers.renderFieldElement(this.i18n, ESunCardI18NKeys.Dusk, this.times.dusk)
        : Helpers.nothing()
    }
        </div>

        <div class="sun-card-field-row">
          ${
      this.fields?.azimuth !== undefined && this.data?.azimuth !== undefined
        ? Helpers.renderFieldElement(this.i18n, ESunCardI18NKeys.Azimuth, this.data?.azimuth)
        : Helpers.nothing()
    }
          ${
      this.fields?.elevation !== undefined && this.data?.elevation !== undefined
        ? Helpers.renderFieldElement(this.i18n, ESunCardI18NKeys.Elevation, this.data?.elevation)
        : Helpers.nothing()
    }
        </div>
      </div>
    `;
  }
}
