// ประกาศตัวแปรเพื่อดึง express dotenv มาใช้งาน
const express = require('express');
const dotenv  = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');



//load env จากไฟล์ config
dotenv.config({path:'./config/config.env'});

//Connect to database
connectDB();

//ประกาศตัวแปร app จาก express ที่เราเรียกมา
const app=express();
//Body parser
app.use(express.json());

//Cookie parser
app.use(cookieParser());

//route files
const hospitals  = require('./routes/hospitals');
const auth = require('./routes/auth');

app.use('/api/v1/hospitals',hospitals);
app.use('/api/v1/auth',auth);





// ระบุ port ที่ใช้งาน โดยอ้างอิงถึงไฟล์ config
const PORT = process.env.PORT || 5000;

// เมื่อแอปรัน ให้รอ liten ที่ Port ที่ตั้งค่าไว้ และแสดงผลออกทางหน้าจอตามที่ตั้งค่า
const server =app.listen(PORT, console.log('Server running in ',process.env.NODE_ENV,'mode on port',PORT));

//Handle unhandled promise rejections
process.on('unhandleRejection',(err,promise)=> {
    console.log(`Error: ${err.message}`);
    //close server & exit process
    server.close(()=>process.exit(1));
});
