import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Note {
  @Prop({ required: true })
  userId: string; // ID of the user who owns the note

  @Prop({ required: true })
  title: string;

  @Prop()
  content: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
