// ประกาศตัวแปรเพื่อดึง express dotenv มาใช้งาน
const express = require('express');
const dotenv  = require('dotenv');

//route files
const hospitals  = require('./routes/hospitals');

//load env จากไฟล์ config
dotenv.config({path:'./config/config.env'});

//ประกาศตัวแปร app จาก express ที่เราเรียกมา
const app=express();

app.use('/api/v1/hospitals',hospitals);

// ระบุ port ที่ใช้งาน โดยอ้างอิงถึงไฟล์ config
const PORT = process.env.PORT || 5000;

// เมื่อแอปรัน ให้รอ liten ที่ Port ที่ตั้งค่าไว้ และแสดงผลออกทางหน้าจอตามที่ตั้งค่า
app.listen(PORT, console.log('Server running in ',process.env.NODE_ENV,'mode on port',PORT));