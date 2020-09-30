import { ComponentHarness } from '@angular/cdk/testing';

export class AppHarness extends ComponentHarness {
  static hostSelector = 'app-root';

  button = this.locatorFor('button');
  dataSpan = this.locatorFor('span');

  async click(): Promise<void> {
    await (await this.button()).click();
  }

  async data(): Promise<string> {
    return await (await this.dataSpan()).text();
  }
}
