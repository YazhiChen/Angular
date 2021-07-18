import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientDetail } from 'src/app/service/client-detail.model';
import { ClientDetailService } from 'src/app/service/client-detail.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {

  constructor(private service: ClientDetailService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      ClientID: 0,
      Name: "",
      Address: "",
      City: "",
      State: "",
      PostCode: "",
      Country: ""
    }
  }

  onSubmit(form: NgForm) {
    // insert record
    if (this.service.formData.ClientID == 0 && !this.service.formData.Name.includes(form.name)) {
      this.service.postClientDetail().subscribe(
        res => {
          this.resetForm(form);
          this.service.refreshList();
        },
        err => {
          console.log(err);
        }
      )
    }
    else {
      // update record
      this.service.putClientDetail().subscribe(
        res => {
          this.resetForm(form);
          this.service.refreshList();
        },
        err => {
          console.log(err);
        }
      )
    }
  }

 
}



