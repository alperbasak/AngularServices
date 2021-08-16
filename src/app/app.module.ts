import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {AccountComponent} from './account/account.component';
import {NewAccountComponent} from './new-account/new-account.component';
import {AccountsService} from './accounts.service';
import {LoggingService} from './logging.service';
import {AssignmentComponent} from './assignment/assignment.component';
import {CounterService} from './assignment/counter.service';
import { InactiveComponent } from './assignment/inactive/inactive.component';
import { ActiveComponent } from './assignment/active/active.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    AssignmentComponent,
    InactiveComponent,
    ActiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  // provide service as a global level so that it can be used between services
  providers: [AccountsService, LoggingService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
