import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  yearAmount: string | number | undefined = '- -';
  monthAmount: string | number | undefined = '- -';
  dayAmount: string | number | undefined = '- -';

  handleClick(): void {
    console.log('Button clicked!');
  }
}
