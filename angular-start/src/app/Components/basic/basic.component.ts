import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

    name: string;
    values: string[];
    check: boolean;

      constructor(){
        this.name = "Ankit";
        this.values = [
            "Mango", "Banana"
          ]
        this.check = true;
        }

      change(i) {
          console.log(this.values[i]);
      }

  ngOnInit() {
  }

}
