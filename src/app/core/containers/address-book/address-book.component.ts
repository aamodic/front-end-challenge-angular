import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';
import { ProgressService } from 'src/app/core/services/progress.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {	
	
  addresses$ = this.http.get('http://localhost:3000/addresses');

  constructor(private message: MessageService, private progress: ProgressService, private http:HttpClient) { }
  
  ngOnInit() {
	  console.log("hit init");
	  var elmnt = document.getElementById('address-book');
	  elmnt.setAttribute("style","background-color:#3c4ca7");
  }

  showMsg() {
    this.message.showOkMessage('This is a message!');
  }

  showProgressSpinner() {
    this.progress.showProgressSpinner();
    setTimeout(() => this.progress.hideProgressSpinner(), 2000);
  }

}
