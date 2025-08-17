
import express from "express"
import connectDB from "./db/index.js";

// require("dotenv").config({path: "./env"})
import dotenv from "dotenv"
const app = express()
dotenv.config({path: "./env"})
connectDB()
    .then(() => {
         app.on("error", (error) => {
            console.log("error:", error)
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
      console.log("server is runnig on port :" ,process.env.PORT)
    })
    }).catch((error) => {
    console.log("MOnogdb connection faied !!! :", error )
})


/*
(async () => {
    try {
       await mongoose.connect(`${process.env.Database_URL}/ ${DB_Name}`)
        app.on("error", (error) => {
            console.log("error:", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log("app is running on ", process.env.PORT )
        })
    } catch (error) {
        console.error("error:", error)
        throw err
    }
})()
    */