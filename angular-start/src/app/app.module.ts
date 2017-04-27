import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MailService } from './mail.service';
import  {routing} from './app.routing';
import { BasicComponent } from './Components/basic/basic.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    {provide: 'mail', useClass: MailService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
