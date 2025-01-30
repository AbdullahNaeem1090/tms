import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

async function dbConnect() {
  try {
    if (connection.isConnected) {
      console.log("Connection IS already Established");
      return;
    }
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI!);
    connection.isConnected = dbConnection.connections[0].readyState;
    console.log("DataBase Connected");
  } catch (error) {
    console.log("Connectionc failed", error);
    process.exit(1);
  }
}

export default dbConnect;