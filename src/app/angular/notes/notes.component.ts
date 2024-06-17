import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../service/data.service';
import { CodeHighlightDirective } from '../../directive/code-highlight.directive';
import { HighlightDirective } from '../../directive/highlight.directive';

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
  imports: [CommonModule, CodeHighlightDirective, HighlightDirective],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent implements OnInit{

  notes : any[] = [];
  selectedNote: Note | null = null ;

  constructor(private service : DataService){}
  ngOnInit(): void {
    this.service.getNotes().subscribe(data => {
      this.notes = data.notes
    })
    
  }

  selectNote(note : Note){
    this.selectedNote = note
  }

}
