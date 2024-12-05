import { Controller, Post, Get, Body, Req, UseGuards } from '@nestjs/common';
import { NotesService } from './notes.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller()
@UseGuards(JwtAuthGuard)
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Post('createNote')
  createNote(@Req() req, @Body() body) {
    const { title, content } = body;
    return this.notesService.createNote(req.user._id, title, content);
  }

  @Get('notes')
  getUserNotes(@Req() req) {
    return this.notesService.getUserNotes(req.user._id);
  }
}
