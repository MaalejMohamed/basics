import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  name='Luis'
  imgURL='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqG_IrW41OWowRakdludbu-8KSLJLrXifvvyW3djZd&s'

  getName() { return this.name; }

}
