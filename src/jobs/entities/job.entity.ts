import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Job extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  deadlineDate: Date;

  @Prop({ required: true })
  description: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const JobSchema = SchemaFactory.createForClass(Job);
export type JobDocument = Job & Document;
