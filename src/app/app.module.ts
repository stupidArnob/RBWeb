import { Md5 } from 'ts-md5';
import { CartListService } from './service/cart-list/cart-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrintRequestComponent } from './print-request/print-request.component';
import { HttpModule } from '@angular/http';
import { SqlService } from './service/sql/sql.service';
import { AccountViewComponent } from './account-view/account-view.component';
import { CookieService } from 'ngx-cookie-service';
import { AccountEntryComponent } from './account-entry/account-entry.component';
import { SearchComponent } from './search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/components/common/messageservice';

// App Route
const appRoutes: Routes = [
  { path: '', component: IndexPageComponent},
  { path: 'print-oder', component: PrintRequestComponent},
  { path: 'account-view', component: AccountViewComponent},
  { path: 'account-entry', component: AccountEntryComponent},
  { path: 'search', component: SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    NavbarComponent,
    PrintRequestComponent,
    AccountViewComponent,
    AccountEntryComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CalendarModule,
    ToastModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  providers: [
    CartListService,
    SqlService,
    CookieService,
    MessageService,
    Md5
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
