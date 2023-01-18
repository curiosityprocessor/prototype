import { Configuration, OpenAIApi } from "openai";

const openAiConfig = new Configuration({
  organization: "org-Pgzl27YeZ6inGKaKd7joMWG6",
  apiKey: "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",
})
export const openAi = new OpenAIApi(openAiConfig);

export const axiosConfig: any = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer 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`,
  }
}