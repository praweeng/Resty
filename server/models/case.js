const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaseSchema = new Schema({
    title: { type: String },
    desc: { type: String },
    image: { type: Blob },
    link: { type: String },
    user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
});

