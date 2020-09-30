import { ComponentHarness } from '@angular/cdk/testing';

async function waitFor<T>(waitCondition: () => Promise<T>, interval: number = 1, timeout: number = 1000) {
  const startTime = new Date().getTime();

  while (true) {
    const result = await waitCondition();

    if (result) {
      return result;
    }
    if (new Date().getTime() - startTime > timeout) {
      break;
    }
    await wait(interval);
  }

  throw new Error(`Wait timed out after ${new Date().getTime() - startTime}ms`);
}

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

  async waitForDataToChangeTo(wantedData: string) {
    await waitFor(async () => (await this.data()) === wantedData);
    return this.data();
  }
}
