import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FruitManagerComponent } from './fruit-manager/fruit-manager.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { FruitCardComponent } from './fruit-card/fruit-card.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FruitService } from './services/fruit.service';
import { AddFruitComponent } from './add-fruit/add-fruit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FruitManagerComponent,
    FruitListComponent,
    FruitCardComponent,
    SearchComponent,
    AddFruitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
