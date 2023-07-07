import { Component } from '@angular/core';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent {

  title = "Hello from second component";
  updateData(name:string)
  {
    console.warn(name)
  }
}
