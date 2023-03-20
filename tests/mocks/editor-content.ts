import { html, TemplateResult } from "lit";

export class EditorContent {
  static onMock: jest.Mock;

  public on(eventName: string, listener: () => void) {
    EditorContent.onMock(eventName, listener);
  }

  public render(): TemplateResult {
    return html`
      <div class="card-config">
        SUN CARD EDITOR CONTENT
      </div>
    `;
  }
}
