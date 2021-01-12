"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonModel = void 0;
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var LessonSchema = new mongoose_1.Schema({
    lessonName: { type: String, required: true },
    lessonDayOfWeek: { type: String, required: true },
    numberOfSemester: { type: Number, required: true },
    nameOfGroupStudents: { type: String, required: true },
    lessonTime: { type: String, required: true },
    chatIdLesson: { type: String, required: true },
    emailTeacher: { type: String, required: true, unique: true, ref: 'TeacherModel' },
    numberClassRoom: { type: Number, required: true, unique: true, ref: 'ClassRoomModel' },
});
exports.LessonModel = mongoose.model('Lesson', LessonSchema);
