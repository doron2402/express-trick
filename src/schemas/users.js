let mongoose = require('mongoose');
let userSchema = mongoose.Schema({
  name: String,
  userName: {
    type: String,
    index: { unique: true },
    lowercase: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    index: { unique: true },
    lowercase: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  active: Boolean,
  phone: String,
  followers:{
    count: Number,
    ids: []
  },
  following: {
    count: Number,
    ids: []
  },
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now }
});

userSchema.pre('save', function(next){
  var now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  next();
});

userSchema.pre('update', function(next){
  var now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  next();
});

module.exports = userSchema;