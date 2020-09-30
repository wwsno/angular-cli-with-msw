import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { AppHarness } from './app.harness';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { startMockBackend, stopMockBackend } from 'projects/box/testing/mock-backend';

describe('AppComponent', () => {
  @Component({
    template: '<app-root></app-root>',
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  class AppHostComponent {}

  beforeEach(async () => {
    await startMockBackend();

    await TestBed.configureTestingModule({
      declarations: [
        AppHostComponent,
        AppComponent,
      ],
      imports: [
        HttpClientModule,
      ]
    }).compileComponents();
  });

  afterEach(async () => {
    stopMockBackend();
  });

  it('should do click', async () => {
    const fixture = TestBed.createComponent(AppHostComponent);
    fixture.detectChanges();

    const loader = TestbedHarnessEnvironment.loader(fixture);
    const harness = await loader.getHarness(AppHarness);

    await harness.click();

    expect(await harness.data()).toEqual('meow');
  });
});
