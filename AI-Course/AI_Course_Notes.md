# AI Course

## Rise of AI Engineering

- AI Engineer don't train LLM but use pre-trained LLM to create smarter apps
- AI is being use to create quick takeaway from long threads

### What is a LLM?

- **A system that is trained to understand and generate human language**
- Examples:
  - Commercial:
    - GPT (OpenAI)
    - Gemini (Google)
    - Claude ()
    - Grok
  - Open-Source Modles
    - Llama
    - Mistral
- LLM are _"Large"_ because they are trained on a large amounts of text, from all source of mediums
- The training teaches these models patterns in a language like:
  - Grammer
  - Tone
  - Common facts
  - Phrasing
- So asking a LLM a question isn't a search for the answer but gives what a helpful response would look like, derived from the training it recieved
  - **Auto-complete on steriods**
- LLM are mathamatical structure made of Billions of parameters, and those parameters represent patterns in language like grammer, facts, tone, and style.
  - These models don't have any real intelligent but are really good at perdicting what comes next.
- All this relies on the data these Models are trained on.
  - If the data is bias, inaccuare, outdated or low-quality then the model will structure its responses off that data.
    - hence some models are politially bias data or confidentlly wrong. **Especially in code**
      - In code it take a large sample of code from across sources like GitHub as data, but most of that code is outdated, messy, or buggy.
        - _It may look professional, but it may not work_
- Training Matters A Lot
  - But the cost to have the hardware infrustructure for such a model is extreamly steep.

### What can you do with Language Models?

- In an applicaiton structure, the LLM is a supporting system that depends on our features
- Some use cases are:
  - Summarization
  - Content Creation
  - Text Classification
    - This can enable us to identify froms of texts and parse that data for our backend to use
  - Translation
  - Data Extraction
    - This can enable us to extract data from texts and parse tha tdata for our backend to use
  - Chat Interfaces
- All these use cases follow the same model: **_Text in Text out_**

### Understanding Tokens and Context Windows

- **Tokens**
  - These are the broken down pieces of text that the LLM uses to understand what a user is trying to say.
    - These aren't the same as characters, and they're not the same as whole words but _something in between_. They can be:
      - Whole words (_Paris_)
      - Parts of words (_engi_ | _neer_)
      - Punctuation
      - Emojis or spaces
      - ~3/4 of a word
        > [OpenAI Tokenizer](https://platform.openai.com/tokenizer)
  - Tokens matter because they determin cost of LLM
- **Context Window**
  - This is the limit of how many tokens a LLM can handle at once.
    - This window includes the:
      - Prompt (_our input_),
      - Model's Response, and
      - The Chat History

### Counting Tokens

- In our applicaiton we can import the **_tiktoken_** library to count our tokens within a prompt before sending it to our model.
  - This allows us to plan for the Model's _Context Window_ and reduce incomplete responses

### Choosing the right Model

- Today, new LLM are being crated weekly so choosing one can be hard.
- The criteria in choosing a model relies on what our application needs.
  - **Don't focus on which models exactly** but on the **criterias** your models needs for your application.
- The list of criterias are listed as such:
  - Reasoning
  - Speed
  - Modalities
  - Cost
  - Context
  - Privacy

- Reasoning
  - More **_complex_** the task use the **_Bigger_** model
  - More **_simple_** the task use the **_Smaller_** model
- Speed
  - **_Faster_** output, use the **_Smaller_** model
  - **_Slower_** output, use the **_Larger_** model
- Modalities
  - This is the type of meduim you're using (text, images, video, audio)
  - **_Multipe media types_** you'll need a **_LMMs (Large Multi-Modal Models)_**
  - **_Just text_** you'll can use a simple **_LLM_**
- Cost
  - Depends on the cost per token (_usually charged by per million_)
    - generating a lot of documents or contetent, cost can add up quickly
- Context Window
  - If you need **_More context_** for the user experiance use a model with a **_Large Context Window_**
  - If you need **_Less context_** for the user experiance use a model with a **_Smaller Context Window_**
- Privacy
  - If handling **_Private Data_** then its best to use a **_Open-Source, Self-Hosted_** AI
  - If handling **_Private Data_** then its ok to use a **_Comnmercial_** AI
- _Knowledge Cutoff_
  - This is the cutoff date of until when the model has stopped being trained.
  - This maybe important to your selection but it isn't the ultimate decision making of the models you choose
    > [OpenAI Models](https://platform.openai.com/docs/models/compare)

### Understanding Model Settings

- In configuring models you can play around with different settings like:
  - **Format**
    - This changes the format of the response
      - Text, json_object, json_schema
  - **Temprature**
    - this is how crative the model can be
      - we never use extream values because the model can be a little too wild in its response
      - For more **_logical, precise_** answers use: **0.2 - 0.4**
      - For more **_Creative_** answers use: **0.7 - 1.0**
  - **Max Tokens**
    - This is the amount of tokens our resopnse will be made up of.
    - This can control cost
      - if we don't need to generate large responses, we don't need to have a large token max
      - but if we use too low of a max token value, our responses can get cutoff
        - thats why our prompts will need to be more specific, and even dictate how long it needs to be
  - **Top P**
    - This is another random generator based on the list of possible next words to use.
      - Each word in this list is given a value, and the Top P value can determin how many of those words can be used as possible next words.
    - We usually change Temprature or Top P, but never both.
      - Safe rule of thumb is to leave Top P at 1, and change Temprature to your liking.
  - _Store Logs_
    - This is simply storing all the logs for debuggin purposes
    - Logs showcase everthing from the prompt and response, to the settings the model used

### Calling Models

- In our application we can call our AI Models by importing a AI client
  - For OpenAI, we install `npm i openai`
  - Then we configure the client with our api key:

  ```javascript
  // your AI api key goes here
  const OPENAI_API_KEY = process.env.API_KEY;

  // configure your ai client here
  const client = new OpenAI({
    apiKey: OPENAI_API_KEY,
  });
  ```

  - After we need to configure our model we're going to use in our applicaiton:
    - In this block of code `stream` is a property of our model that enables the **_Async Iterable_** output that we are so use to seeing in AI chat resposnes
      - without it it will ouput a singular object with our full response from our model.
    - Thus, a list of objects will, one-by-one, be generated as an output into your constant `stream` similar to adding objects into an array.

  ```javascript
  // configure you model here
  const stream = await client.responses.create({
    model: "gpt-4.1",
    input: "Write a story about a dragon",
    temperature: 0.7,
    max_output_tokens: 250,
    stream: true,
  });
  ```

  - To output the response like moder AI Chat bot we will need to `process.stdout.write()` the data
    - However, the Async Iterable `stream` woudld need to be looped through and discected for the value of the token that needs to be printed.
    - Thus, we loop through the response tokens and write them to the console like so:

  ```javascript
  for await (const event of stream) {
    if (event.delta) process.stdout.write(event.delta);
  }
  ```
