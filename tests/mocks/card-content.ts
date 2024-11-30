import { html, TemplateResult } from "lit";

export class CardContent {
  public render(): TemplateResult {
    return html`
      <ha-card>
        <div class="sun-card">
          SUN CARD CONTENT
        </div>
      </ha-card>
    `;
  }
}
