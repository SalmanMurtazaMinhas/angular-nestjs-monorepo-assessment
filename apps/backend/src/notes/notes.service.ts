import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note } from '../models/note.models';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<Note>) {}

  async createNote(userId: string, title: string, content: string): Promise<Note> {
    const newNote = new this.noteModel({ userId, title, content });
    return newNote.save();
  }

  async getUserNotes(userId: string): Promise<Note[]> {
    return this.noteModel.find({ userId });
  }
}
