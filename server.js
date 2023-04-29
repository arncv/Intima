const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();



const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY ,
  });
  const openai = new OpenAIApi(configuration);