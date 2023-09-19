import mongoose from "mongoose";

mongoose.connect("mongodb+srv://micael:micael@2001@cluster0.cdlajak.mongodb.net/micael");

let db = mongoose.connection;

export default db