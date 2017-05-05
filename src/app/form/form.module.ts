import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { InputFieldCheckComponent } from './input/input-field-check/input-field-check.component';
import { InputFieldComponent } from './input/input-field/input-field.component';
import { InputFieldSubmitComponent } from './input/input-field-submit/input-field-submit.component';
import { InputTextAreaComponent } from './input/input-text-area/input-text-area.component';
import { InputSelectComponent } from './input/input-select/input-select.component';
const FormRoute: Routes = [
  { path: '', component: FormComponent,
    children: [
      { path: 'form', component: FormComponent }
    ]
  }];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormRoute),
    FormsModule
  ],
  declarations: [
    FormComponent,
    InputComponent,
    InputFieldCheckComponent,
    InputFieldComponent,
    InputFieldSubmitComponent,
    InputTextAreaComponent,
    InputSelectComponent]
})
export class FormModule {
 }
