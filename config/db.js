import mongoose from 'mongoose';

// create connection
async function dbConnect() {
  try {
    const connect = await mongoose.connect(process.env.MONGO_STRING);
    console.log(`MongoDb connected`);
  } catch (error) {
    console.log(error.message);
  }
}

export default dbConnect;
