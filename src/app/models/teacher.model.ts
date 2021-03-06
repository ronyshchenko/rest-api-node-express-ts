import * as mongoose from 'mongoose';
import { Schema, Document } from 'mongoose';

export interface ITeacher extends Document {
  firstNameTeacher: string;
  surNameTeacher: string;
  lastNameTeacher: string;
  emailTeacher: string;
  ageTeacher: number;
  sexTeacher: string;
  yearOfExpTeacher: number;
  workedInUniverTeacher: boolean;
  canTeachSubjects: string;
  //teacherId: Schema.Types.ObjectId; 
}

const TeacherSchema: Schema = new Schema({
  firstNameTeacher: { type: String, required: true },
  surNameTeacher: { type: String, required: true },
  lastNameTeacher: { type: String, required: true },
  emailTeacher: { type: String, required: true, unique: true, ref: 'LessonModel' },
  //teacherId: { type: Schema.Types.ObjectId, required: true, ref: 'LessonModel' },
  ageTeacher: { type: Number, required: true },
  sexTeacher: { type: String, required: true },
  yearOfExpTeacher: { type: Number, required: true },
  workedInUniverTeacher: { type: Boolean },
  canTeachSubjects: { type: Boolean },
});

export const TeacherModel = mongoose.model<ITeacher>('Teacher', TeacherSchema);