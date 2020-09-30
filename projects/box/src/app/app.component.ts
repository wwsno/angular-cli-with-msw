import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  data = 'no-data';

  constructor(private httpClient: HttpClient) {}

  myClick(): void {
    console.log('click');

    this.httpClient.get<string>('http://example.com/meow').subscribe({
      next: (result) => {
        this.data = result;
      },
      error: (e) => {
        this.data = e.message;
      }
    });
  }
}
