import { Component, OnInit  } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {
  noteObj = { title: '', content: '' };
  notes: any[] = [];
  token: string | null = localStorage.getItem('accessToken');

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getNotes();
  }

  addNote() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json' 
    });
    this.http.post('http://localhost:3000/createNote', this.noteObj,  { headers }).subscribe(() => {
      this.getNotes();
      this.noteObj = { title: '', content: '' }; 
    });
  }

  getNotes() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,  // Attach token to the Authorization header
    });

    this.http.get('http://localhost:3000/notes', { headers }).subscribe((data: any) => {
      this.notes = data;
    },
    (error) => {
      console.error('Error fetching notes:', error);
    });
  }
}