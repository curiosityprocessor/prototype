import * as express from "express";
import { openAi, axiosConfig } from "@src/openaiApi";
import { CreateCompletionRequest } from "openai";
import { getPromptForQnA } from "./prompt";

const router = express.Router();

router.post("/test", async (req, res) => {

  const market: string = req.body;
  
  const request: CreateCompletionRequest = {
    model: "text-davinci-003",
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 7
  }

  const { data, status } = await openAi.createCompletion(request, axiosConfig)

  // const { data, status } = await axios.post("https://api.openai.com/v1/completions", body, config);
  console.log(JSON.stringify({status, data}, null, 2))
  res.status(201).send(JSON.stringify(data.choices));
})

router.post("/qna", async (req, res) => {

  console.log(JSON.stringify(req.body))
  const { question } = req.body;
  
  const request: CreateCompletionRequest = {
    model: "text-davinci-003",
    prompt: getPromptForQnA(question),
    temperature: 0,
    max_tokens: 100
  }

  const { data, status } = await openAi.createCompletion(request, axiosConfig);

  console.log(JSON.stringify({status, data}, null, 2))
  res.status(201).send(data.choices[0].text);
})

export default router;