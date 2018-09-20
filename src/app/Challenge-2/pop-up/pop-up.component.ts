import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  modalRef:BsModalRef;

  constructor(private modalService:BsModalService) { }
  
  //Challenge 2
  ngOnInit() {
    setTimeout(()=>{
      window.alert("Challenge 2")
    },5000);
  }

}
