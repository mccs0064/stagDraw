import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PrizesService } from './services/prizes/prizes.service';
import { MainComponent } from './components/main/main/main.component';
import { PrizeComponent } from './components/prize/prize/prize.component';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './components/buy/buy/buy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'buy-tickets', component: BuyComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PrizeComponent,
    BuyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [PrizesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
