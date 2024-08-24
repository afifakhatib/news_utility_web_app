import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const MatModuleArr = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatListModule,
  MatDividerModule,
  MatSnackBarModule,
  MatDialogModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatIconModule,
  MatChipsModule,
  MatSidenavModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatNativeDateModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MatModuleArr
  ],
  exports : [
      ...MatModuleArr
  ]
})
export class MaterialModule { }








