const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const chatBot = async (req, res) => {
  console.log("sent");

  try {
    const { question } = req.body;
    console.log(question);

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: question,
      temperature: 0,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log(response.data.choices);

    res.status(200).send(response.data.choices[0].text);
  } catch (error) {
    console.log(error);
    res.send("something went wrong!");
  }
};

module.exports = { chatBot };
