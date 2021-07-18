import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import {HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ClientDetailListComponent } from './clients/client-detail-list/client-detail-list.component';
import { ClientDetailService } from './service/client-detail.service';



@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientDetailComponent,
    ClientDetailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ClientDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
