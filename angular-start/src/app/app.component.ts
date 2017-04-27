import { Component, Inject } from '@angular/core';
// import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  values: string[];
  check: boolean;

    constructor(@Inject('mail') private mail){
      this.name = "Ankit";
      this.values = [
          "Mango", "Banana"
        ]
      this.check = true;
      }

    change(i) {
        console.log(this.values[i]);
    }
}
