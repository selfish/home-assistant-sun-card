import { html, TemplateResult } from "lit";

import { ESunCardErrors, ISunCardConfig } from "../types";
import { I18N } from "../utils/i18n";

export class ErrorContent {
  private i18n: I18N;
  private error: ESunCardErrors;

  constructor(config: ISunCardConfig, error: ESunCardErrors) {
    this.i18n = config.i18n!;
    this.error = error;
  }

  public render(): TemplateResult {
    const errorMessage = this.i18n.tr(`errors.${this.error}`);
    // eslint-disable-next-line no-console
    console.error(errorMessage);

    return html`
      <div class="sun-card-error">
        ${errorMessage}
      </div>
    `;
  }
}
