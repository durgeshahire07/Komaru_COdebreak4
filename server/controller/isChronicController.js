const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const isChronic = async (req, res) => {
  console.log("sent");

  try {
    const { question } = req.body;
    console.log(question);
    const userQuestion = `patient having ${question} disease are serious or not? answer me in one word 'yes' or 'no'.`;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: userQuestion,
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    res.status(200).send(response.data.choices[0].text);
  } catch (error) {
    console.log(error);
    res.send("something went wrong!");
  }
};

module.exports = { isChronic };
