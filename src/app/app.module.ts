import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { SectionComponent } from './components/section/section.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { ExperienceFormComponent } from './components/forms/experience-form/experience-form.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectsFormComponent } from './components/forms/projects-form/projects-form.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { EducationComponent } from './components/education/education.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { EducationFormComponent } from './components/forms/education-form/education-form.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProgressRingComponent } from './components/progress-ring/progress-ring.component';
import { CloseIconComponent } from './components/close-icon/close-icon.component';
import { CloseAndEditComponent } from './components/close-and-edit/close-and-edit.component';
import { FormComponent } from './components/form/form.component';
import { ResponsesInterceptor } from './interceptors/responses.interceptor';
import { TechsFormComponent } from './components/forms/techs-form/techs-form.component';
import { SkillsFormComponent } from './components/forms/skills-form/skills-form.component';
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
    ProjectsFormComponent,
    EducationFormComponent,
    ExperienceFormComponent,
    TechsFormComponent,
    SkillsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ResponsesInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
