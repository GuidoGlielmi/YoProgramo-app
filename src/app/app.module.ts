import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { SectionComponent } from './components/section/section.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { EducationComponent } from './components/education/education.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProgressRingComponent } from './components/progress-ring/progress-ring.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CloseIconComponent } from './components/close-icon/close-icon.component';
import { CloseAndEditComponent } from './components/close-and-edit/close-and-edit.component';
import { FormComponent } from './components/form/form.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalInfoComponent,
    ExperienceComponent,
    DropDownComponent,
    SectionComponent,
    ExperienceItemComponent,
    EducationComponent,
    EducationItemComponent,
    SkillsComponent,
    ProgressRingComponent,
    ProjectsComponent,
    ProjectItemComponent,
    FooterComponent,
    ModalComponent,
    CloseIconComponent,
    CloseAndEditComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
