import mongoose from "mongoose"

mongoose.connect("mongodb+srv://ptkstefano:123@cluster0.rebdpxv.mongodb.net/AluraNode")

let db = mongoose.connection;

export default db;