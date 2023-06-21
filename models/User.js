import mongoose from 'mongoose';

// create user schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
      default: 'ahmed12',
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
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female'],
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// export user schema
export default mongoose.models.User || mongoose.model('User', userSchema);
