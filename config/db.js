//
const mongoose = require("mongoose");
//รอการทำงานของสิ่งที่เราเรียกใช้จากภายนอกโดยการใช้ฟังก์ชัน await และหัวฟังก์ชันต้องใส่ asyncเพื่อบอกว่าต้องรอ
const connectDB = async () => {
    mongoose.set('strictQuery',true);
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected ${conn.connection.host}`);
}


module.exports = connectDB;