import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CodeHighlightDirective } from './directive/code-highlight.directive';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CodeHighlightDirective, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'TechNotes';
  codeSnippets: any[] = [];
  // codeSnippets = [
  //   {
  //     title: 'Arrow Function',
  //     code: `
  //       const add = (a, b) => a + b;
  //       console.log(add(2, 3)); // 5
  //     `
  //   }
  // ];
  constructor(private dataService: DataService){}
  ngOnInit(): void {
    this.dataService.getCodeSnippets().subscribe(data => {
      this.codeSnippets = data.codeSnippets;
    });
  }
}
