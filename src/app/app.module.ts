import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { SectionComponent } from './components/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalInfoComponent,
    ExperienceComponent,
    DropDownComponent,
    SectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
