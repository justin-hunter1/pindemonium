const router = require('express').Router();
const pgPosty = require("express-pg-posty");
require("dotenv").config();

  router.post('/', async (req, res) => {
    pgPosty({
        // Required: Credentials to Postgres Database
        pgCredentials: {
          host: process.env.DB_URL,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME
        },
     
        // Optional: Specify table name
        tableName: "Image",
     
        // Optional: Return true to authorize a file upload
        authorizePOST: (req, file) => true,
     
        // Optional: Return true to authorize a file request
        // `info` contains the row data for the file (app_data, data, created_at etc.)
        authorizeGET: (req, info) => true
      })
});