import * as dotenv from "dotenv";
dotenv.config();
import Middleware from "../middleware/";
import { sendSuccessResponse, sendErrorResponse } from "../utils/sendResponse";
const logger = require("../utils/logger");

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAPI_KEY,
});

const openai = new OpenAIApi(configuration);

exports.correctGrammer = async (req, res) => {
  try {
    const { error } = Middleware.Validation.textValidation(req.body);
    if (error)
      return await sendErrorResponse(res, {
        error: error.details[0].message,
      });
    let { text } = req.body;
    const prompt = `Please correct this to standard English: ${text}`;
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.5,
      max_tokens: 1000,
      //   top_p: 1.0,
      //   frequency_penalty: 0.0,
      //   presence_penalty: 0.0,
    });
    // return completion.data.choices[0].text;

    await sendSuccessResponse(res, {
      result: completion.data.choices[0].text,
    });
  } catch (error) {
    logger.error(`Error : ${error},Request : ${req.originalUrl}`);
    console.log(error);
    await sendErrorResponse(res, { error: "Some error occured" });
  }
};
