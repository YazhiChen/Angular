import { Component, OnInit } from '@angular/core';
import { ClientDetail } from 'src/app/service/client-detail.model';
import { ClientDetailService } from 'src/app/service/client-detail.service';

@Component({
  selector: 'app-client-detail-list',
  templateUrl: './client-detail-list.component.html',
  styleUrls: ['./client-detail-list.component.css']
})
export class ClientDetailListComponent implements OnInit {

  constructor(private service : ClientDetailService)  {}

  ngOnInit() {
    this.service.refreshList();
  }

  editForm(client:ClientDetail){
    this.service.formData = Object.assign({},client);
  }

  onDelete(ClientID){
    if (confirm('Are you sure to delete this client?'))
    this.service.deleteClientDetail(ClientID).subscribe(
      res => {
        this.service.refreshList();
      },
      err =>{
        console.log(err);
      } 
    )
  }

}
