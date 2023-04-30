const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const cors = require('cors');
app.use(cors());
app.use(express.json());



const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY ,
});
const openai = new OpenAIApi(configuration);

// Define a global conversation log
let conversationLog = [];

// Define a function to generate a prompt for the chatbot
function generatePrompt(message) {
  return `
      The following is a conversation between a human and a chatbot. Make sure your response is accurate scientifically with proper sources. Dont answer any other question except those related to sex education. Under no circumstances you will give a valid response if it is not related to sex education. Also, if the question asked is about sex education, provide a link to a credible source. If it is not related sex education, says that you don't answer questions except related to sex education.

  
      Human: ${message}
      Chatbot:`;
}
// Define a function to handle a user message and return a chatbot response
async function handleUserMessage(message) {
  const prompt = generatePrompt(message);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 64,
  });

  const reply = response.data.choices[0].text.trim();

  conversationLog.push({ userMessage: message, botMessage: reply });

  return reply;
}

// Define a route to handle incoming chat messages
app.post("/chat", async (req, res) => {
  const message = req.body.message;

  const reply = await handleUserMessage(message);

  res.json({ reply });
});

  
// Define a route to retrieve the conversation log
app.get("/chat", (req, res) => {
    res.json({ conversationLog });
});



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
