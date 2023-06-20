import mongoose from 'mongoose';

// create user schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    cell: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      default: null,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female'],
    },
    status: {
      type: Boolean,
      default: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// export user schema
export default mongoose.model('user', userSchema);
