import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PrizesService } from './services/prizes/prizes.service';
import { MainComponent } from './components/main/main/main.component';
import { PrizeComponent } from './components/prize/prize/prize.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: MainComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PrizeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [PrizesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
