import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../../service/data.service';

interface Note {
  title: string;
  description : Description[];
  code: string;
}
interface Description {
  summary: string;
  code: string;
}

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  notes : any[] = [];
  selectedNote: Note | null = null ;
  constructor(private service : DataService){

  }
  ngOnInit(){
    this.service.getAWSNotes().subscribe(data =>{
      this.notes = data.notes ;
    })
  }

  selectNote(note : Note){
    this.selectedNote = note
  }
}
