import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '../../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CadastroPacienteService } from './cadastro-paciente.service';
import { ProfilePacienteComponent } from './profile/profile.component';
import { ListaPacienteComponent } from './lista/lista.component';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [
  {
    path: 'lista',
    component: ListaPacienteComponent,
  },
  {
    path: 'profile',
    component: ProfilePacienteComponent,
  },
];

@NgModule({
  declarations: [ListaPacienteComponent, ProfilePacienteComponent],
  imports: [
    MatMenuModule,
    MatTableModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [CadastroPacienteService],
})
export class CadastroPacienteModule {}

