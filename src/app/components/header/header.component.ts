import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  title = 'angular-crash-brad';
  toggleAddTask(){
    console.log('addtask')
  }
  constructor() { }

  ngOnInit(): void {

  }

}
