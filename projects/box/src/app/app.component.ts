import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  data = 'no-data';

  constructor(private httpClient: HttpClient, private cd: ChangeDetectorRef) {}

  myClick(): void {
    console.log('click');

    this.httpClient.get<string>('meow', { responseType: 'text' as 'json' }).subscribe({
      next: (result) => {
        this.data = result;
        this.cd.markForCheck();
      },
      error: (e) => {
        this.data = e.message;
        this.cd.markForCheck();
      }
    });
  }
}
