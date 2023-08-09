import mongoose from "mongoose";

let isConnected = false; // variable to check if mongoose is connected

export async function connectToDB() {
	mongoose.set("strictQuery", true);

	if (!process.env.MONGODB_URL) return console.log("MONGODB_URL not found");
	if (isConnected) return console.log("Already connected to MONGODB");

	try {
		await mongoose.connect(process.env.MONGODB_URL);

		isConnected = true;

		console.log("Connected to MongoDb");
	} catch (error) {
		console.log(error);
	}
}
