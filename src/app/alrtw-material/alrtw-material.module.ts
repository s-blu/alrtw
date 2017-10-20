import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

const materialModules = [MatButtonModule, MatCheckboxModule, MatInputModule, NoopAnimationsModule];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  declarations: []
})
export class AlrtwMaterialModule { }
