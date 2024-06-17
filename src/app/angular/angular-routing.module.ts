import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { AddNotesComponent } from './add-notes/add-notes.component';


const routes: Routes = [
  {
    path : '',
    component: NotesComponent
  },
  {
    path : 'add-notes',
    component: AddNotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
