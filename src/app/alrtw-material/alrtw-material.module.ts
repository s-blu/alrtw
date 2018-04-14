import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTooltipModule} from '@angular/material/tooltip';

const materialModules = [CommonModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatInputModule,
  MatFormFieldModule, MatTooltipModule];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  declarations: []
})
export class AlrtwMaterialModule { }
