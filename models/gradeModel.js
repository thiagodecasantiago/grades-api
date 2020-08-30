import { db } from './index.js';

const gradeSchema = new db.mongoose.Schema(
  {
    name: { type: String, required: true },
    subject: { type: String, required: true },
    type: { type: String, required: true },
    value: { type: Number, required: true, min: 0 },
    lastModified: Date,
  },
  { versionKey: false, toJSON: { virtuals: true } }
);

const Grade = db.mongoose.model('grade', gradeSchema);

export default Grade;
