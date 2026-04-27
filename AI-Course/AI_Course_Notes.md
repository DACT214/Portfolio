# AI Course

## Rise of AI Engineering

- AI Engineers don't train LLM but use pre-trained LLM to create smarter apps
- AI is being used to createa quick takeaway from long threads

### What is a LLM?

- **A system that is trained to understand and generate human language**
- Examples:
  - Commercial:
    - GPT (OpenAI)
    - Gemini (Google)
    - Claude
    - Grok
  - Open-Source Models
    - Llama
    - Mistral
- LLM are _"Large"_ because they are trained on a large amount of text, from all sources of mediums
- The training teaches these models patterns in a language like:
  - Grammer
  - Tone
  - Common facts
  - Phrasing
- So asking a LLM a question isn't a search for the answer but gives what a helpful response would look like, derived from the training it received
  - **Auto-complete on steroids**
- LLM are mathamatical structure made of Billions of parameters, and those parameters represent patterns in language like grammar, facts, tone, and style.
  - These models don't have any real intelligence but are really good at predicting what comes next.
- All this relies on the data these Models are trained on.
  - If the data is biased, inaccurate, outdated, or low-quality, then the model will structure its responses based on that data.
    - hence some models are politially bias data or confidently wrong. **Especially in code**
      - In code, it takes a large sample of code from across sources like GitHub as data, but most of that code is outdated, messy, or buggy.
        - _It may look professional, but it may not work_
- Training Matters A Lot
  - But the cost to have the hardware infrastructure for such a model is extremely steep.

### What can you do with Language Models?

- In an application structure, the LLM is a supporting system that depends on our features
- Some use cases are:
  - Summarization
  - Content Creation
  - Text Classification
    - This can enable us to identify forms of texts and parse that data for our backend to use
  - Translation
  - Data Extraction
    - This can enable us to extract data from texts and parse that data for our backend to use
  - Chat Interfaces
- All these use cases follow the same model: **_Text in Text out_**

### Understanding Tokens and Context Windows

- **Tokens**
  - These are the broken-down pieces of text that the LLM uses to understand what a user is trying to say.
    - These aren't the same as characters, and they're not the same as whole words, but _something in between_. They can be:
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

- Today, new LLM are being created weekly, so choosing one can be hard.
- The criteria for choosing a model rely on what our application needs.
  - **Don't focus on which models exactly** but on the **criteria** your model needs for your application.
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
  - If **_Slower_** output is ok, use the **_Larger_** model
- Modalities
  - This is the type of medium you're using (text, images, video, or audio)
  - **_Multipe media types_** you'll need a **_LMMs (Large Multi-Modal Models)_**
  - **_Just text_** you'll can use a simple **_LLM_**
- Cost
  - Depends on the cost per token (_usually charged per million_)
    - Generating a lot of documents or content, the cost can add up quickly
- Context Window
  - If you need **_More context_** for the user experiance use a model with a **_Large Context Window_**
  - If **_Less context_** is ok or needed for the user experiance use a model with a **_Smaller Context Window_**
- Privacy
  - If handling **_Private Data_** then its best to use a **_Open-Source, Self-Hosted_** AI
  - If handling **_Private Data_** then its ok to use a **_Comnmercial_** AI
- _Knowledge Cutoff_
  - This is the cutoff date until which the model has stopped being trained.
  - This may be important to your selection, but it isn't the ultimate decision-making of the models you choose
    > [OpenAI Models](https://platform.openai.com/docs/models/compare)

### Understanding Model Settings

- In configuring models, you can play around with different settings like:
  - **Format**
    - This changes the format of the response
      - Text; json_object; json_schema
  - **Temprature**
    - This is how creative the model can be
      - We never use extreme values because the model can be a little too wild in its response
      - For more **_logical, precise_** answers use: **0.2 - 0.4**
      - For more **_Creative_** answers use: **0.7 - 1.0**
  - **Max Tokens**
    - This is the amount of tokens our response will be made up of.
    - This can control cost
      - If we don't need to generate large responses, we don't need to have a large token max
      - but if we use too low a max token value, our responses can get cut off
        - That's why our prompts will need to be more specific, and even dictate how long it needs to be
  - **Top P**
    - This is another random generator based on the list of possible next words to use.
      - Each word in this list is given a value, and the Top P value can determine how many of those words can be used as possible next words.
    - We usually change Temperature or Top P, but never both.
      - A safe rule of thumb is to leave Top P at 1, and change Temperature to your liking.
  - _Store Logs_
    - This is simply storing all the logs for debugging purposes
    - Logs showcase everything from the prompt and response to the settings the model used

### Calling Models

- In our application, we can call our AI Models by importing an AI client
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

  - After we need to configure our model that we're going to use in our application:
    - In this block of code, `stream` is a property of our model that enables the **_Async Iterable_** output that we are so used to seeing in AI chat responses
      - Without it, it will output a singular object with our full response from our model.
    - Thus, a list of objects will, one-by-one, be generated as an output into your constant `stream`, similar to adding objects into an array.

  ```javascript
  // configure your model here
  const stream = await client.responses.create({
    model: "gpt-4.1",
    input: "Write a story about a dragon",
    temperature: 0.7,
    max_output_tokens: 250,
    stream: true,
  });
  ```

  - To output the response like a modern AI chatbot, we will need to `process.stdout.write()` the data (_for console output_)
    - However, the Async Iterable `stream` would need to be looped through and dissected for the value of the token that needs to be printed.
    - Thus, we loop through the response tokens and write them to the console like so:

  ```javascript
  for await (const event of stream) {
    if (event.delta) process.stdout.write(event.delta);
  }
  ```

## Full-Stack for Course

### Prerequisite for the course

- We'll be using 3 main tools and frameworks:
  - Bun
  - Vite
  - Express
  - Tailwind
  - shadcn/ui
  - Husky

### Setting up Bun

- Modern JS runtime
  - Kinda like Node.JS but faster and more integrated
  - Node.JS requires multiple tools for multiple features, Bun we get all the features of said tools in one tool

  | Node.js                                          | Bun                   |
  | ------------------------------------------------ | --------------------- |
  | npm (tool to run packages)                       | Runtime               |
  | ts-node (tool to run TypeScript)                 | Package Manager       |
  | nodemon (tool to restart the server upon change) | Task Runner           |
  |                                                  | Typescript Transpiler |

- Installing Bun (_on Windows_)
  - In the terminal, run this command `powershell -c "irm bun.sh/install.ps1 | iex"` (_from `https://bun.sh/` as of 1.27.2026_)
    - doesn't matter if PowerShell or cmd terminal
  - Then close all terminals and code editors, reopen, and type `Bun` in the terminal to check if installed.
    - A list of commands will appear.

![Bun Installed](./Snapshots_and_Media/Bun_Installed.png)

### Creating Project Structure

- To create a project, using Bun, we want to run: `bun init` in the directory we want to hold our app in
- Once you init the project, a question will appear:
  - ```
    Select a project template
        Blank // This is used in this part of the course
        React
        Library
    ```
- Once the project is initilized a few files are created:
  - .gitignore
  - index.ts
  - tsconfig.json (for editor autocomplete)
  - README.md

- Bun has a feature called "**_Workspace_**," which lets us manage multiple sub-projects like a client and a server application from a single place.
  - _Also available in Node.js_
- By **Workspace** convention, we put all our sub-projects in a directory called "_Packages_."
  - and sub-directories for our client app, and another for our server app

![Packages Directory Structure](./Snapshots_and_Media/packages_dir_structure.png)

- After adding our directories, we have to declare our _Workspaces_ in our `package.json` file
  - ```json
    "...":{...},
      "workspaces":[
        "packages/client",
        "packages/server"
        // "packages/*" This syntax can be used to refer to all directories in the packages directory as workspaces
      ]
    ```

### Creating the Backend

- Init another Bun project within the `server` directory in your `packages` directory of your main project
  - After running `bun init` from `packages/server` folder, you see `node_modules` folder on the **root** and **server** folder levels, but the server’s `node_modules` folder is technically **NOT** a real location of your installed dependencies. The dependencies are still located on the root level. After you install any dependency, check out the `packages/server/node_modules` folder. You’ll see that it contains only **_symbolic links_** that refer to the **root node_modules** folder.
    - > It used to be that there was only one `node_module` directory at the root of the Bun project, but now you see them in each workspace package.
  - to install packages in Bun, you'll need to run a command as:
    ```cmd
      C:\Users\my-app\packages\sever> bun add <package-you-want-to-install>
    ```
- In the `package.json` directory, you can set up scripts to change your application start command (originally was: `bun run index.ts`) and even set up new ones for different environments like a dev or test environment.
  - ```json
      // server>package.json

       "scripts": {
          "start": "bun run index.ts",
          "dev": "bun --watch run index.ts"
        },
    ```

- Install your framework like **Express.js**
  - ```cmd
      C:\Users\my-app\packages\sever> bun add express
    ```
- In your new Bun application, on your new server, you want to configure your environment variables.
  - Save your environment variables, like your OpenAI API Key, in a `.env` file in your `server` directory, and make sure it can be called into your server application

    ```javascript
    //client>src>App.tsx

    import express from "express";

    const app = express();
    const port = Bun.env.PORT || 3000;

    app.get("/", (req, res) => {
      res.send(Bun.env.OPENAI_API_KEY + "!");
    });
    ```

  - > Bun handles environment variables automatically, but will take the system set variables over anything else. To gain more control over your variables, you can install (add) dotenv and config what file you want to gather your environment variables from.

### Createing the Frontend

- In the `client` directory, you'll need to install **Vite** (_Or another frontend build tool or framework_) to create a **React** application.
  - ```cmd
    C:\Users\my-app\packages\client> bun create vite .
    ```

    - This command makes the React application within the client directory
      - remove the `.` at the end to make a whole new directory

  - Once you create your React app, you can test the run command:
    - ```cmd
      C:\Users\my-app\packages\client> bun run dev
      ```

### Starting Both Apps at once!

- Since it is tedious to start the server and the client separately in two different terminals. Let's do it at the same time!
- At the **full project's root** install concurrently:
  - ```cmd
      C:\Users\my-app> bun add -d concurrently
    ```
  - This library allows us to start multiple applications using a single command
  - ![concurrently install](./Snapshots_and_Media/concurrently%20install.png)

- Once installed, we need to configure the concurrent run script.
  - ```javascript
    // my-app>index.ts

    import concurrently from "concurrently";

    concurrently([
      {
        name: "server",
        command: "bun run dev",
        cwd: "packages/server",
        prefixColor: "yellow",
      },
      {
        name: "client",
        command: "bun run dev",
        cwd: "packages/client",
        prefixColor: "blue",
      },
    ]);
    ```

    ```json
    // my-app>package.json
        "scripts": {
          "dev": "bun run index.ts"
        },
    ```

- After the scripts are configured, we can run the `bun run dev` command and get something like this:
  ![Concurrent Running 2 apps](./Snapshots_and_Media/concurrently%20run%20script.png)
  - > The names and colors are set within the `concurrently()` script and are nicely labeled within your terminal when running.

### Setting Up TailwindCSS

- [Tailwind](https://tailwindcss.com/docs/installation/using-vite) is a utility-first CSS framework
  - It included classes like:
    - flex,
    - pt-4
    - text-center,
    - rotate-90
- **To install Tailwind for Vite**
  - You'll need to install 2 libraries:
    ```cmd
        C:\Users\my-app\packages\client> bun add tailwindcss @tailwindcss/vite
    ```
  - After you need to configure your vite plugin

    ```javascript
    // vite.config.ts
    import { defineConfig } from "vite";
    import tailwindcss from "@tailwindcss/vite"; //add this line

    export default defineConfig({
      plugins: [tailwindcss()], //add this method to array
    });
    ```

  - Then import Tailwind into your `index.css` file
    ```css
    @import "tailwindcss";
    ```

### Setting Up Shadcn

- [Shadcn](https://ui.shadcn.com/) is a component library with modern customizable ui components.
- Shadcn **uses Tailwind**
- **To install with Shadcn:**
  - Install and configure Tailwind (_like shown above_)
  - Then we need to modify our _TypeScript Configuration_ files

    ```json
    // tsconfig.json
    {
      "files": [],
      "references": [
        { "path": "./tsconfig.app.json" },
        { "path": "./tsconfig.node.json" }
      ],

      // added for Shadcn
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "@/*": ["./src/*"]
        }
      }
    }
    ```

    ```json
    // tsconfig.app.json
    {
      "compilerOptions": {
    // added for Shadcn
        "baseUrl": ".",
        "paths": {
          "@/*": ["./src/*"]
        },
    // ============
        "tsBuildInfoFile": ...
    }
    ```

  - Next update the Vite Configuration file
    - Add node types dependency

    ```cmd
      C:\Users\my-app\packages\client> bun add -D @types/node
    ```

    - Modify `vite.config.ts`

    ```javascript
    // vite.config.ts
    import path from "path"; // add this
    import tailwindcss from "@tailwindcss/vite";
    import react from "@vitejs/plugin-react";
    import { defineConfig } from "vite";

    // https://vite.dev/config/
    export default defineConfig({
      plugins: [react(), tailwindcss()],
      // add resolve
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
    });
    ```

  - Lastly Run the CLI

    ```cmd
      C:\Users\my-app\packages\client> bunx --bun shadcn@latest init
    ```

    - It will ask a few questions
      ![Shadcn color](./Snapshots_and_Media/Shadcn_color.png)

  - In the end it will create a file called `component.json` that keeps track of the components you install, and now you're ready to use **Shadcn Components**
    - There will also be additnial CSS added to the `index.css` file based on our chosen theme

- **Using Shadcn Components**
  - From [Shadcn Components](https://ui.shadcn.com/docs/components) page you can select any component you want to use.
    ![Component Selection Page](./Snapshots_and_Media/Component-page.png)
  - Selecting a component will land you on the documentation of said component.
    ![Component's Page](./Snapshots_and_Media/Componets_doc_page.png)
  - To use the component, you need to install it into your project

    ```cmd
      C:\Users\my-app\packages\client> bunx --bun shadcn@latest add button
    ```

    - The components you install will be stored in the new `components\ui` folder

      ![shadcn component folder](./Snapshots_and_Media/Shadcn_componet_folder.png)

    - Then you can add the component to your UI

      ```JavaScript
      // App.tsx
        import { Button } from "./components/ui/button";

        ...

          return (
            <div className="p-4">
              <p className="font-bold text-3xl">{message}</p>
              <Button variant={"outline"}>CLick Me</Button>
            </div>
          );
      ```

### Setting up Formatter

- I use Prettier as my code formatter. However, since this is a personal project, I don't believe I need to set up the Prettier as a development dependency in this project... But you can.
- **Setting up Prettier as a Dependency**
  - Install Prettier extension to your IDE.
  - Then create a file in you root directory called: `.prettierrc` and add your prefrences on prettier configurations:
    ```json
    //Example
    {
      "singleQuote": true,
      "semi": true,
      "trailingComma": "es5",
      "printWidth": 80,
      "tabWidth": 3
    }
    ```
  - Install Prettier as dependency to your root project:

  ```cmd
    C:\Users\my-app> bun add -d prettier
  ```

  - Then modify the root `package.json` file:

    ```json
    //my-app/package.json
    "scripts": {
      "dev": "bun run index.ts",
      "format": "prettier --write ." // add format script here
    },
    ```

    - This will start from the current directory as part of formating our files

  - To avoid formating 3rd party code like the `node_models` we want to set up a `.prettierignore` in the root directory:
    ```
    //my-app/.pretterignore
      node_modules
      bun.lock //lock file use by bun (shouldn't touch)
    ```
  - Once all set up, you can run the format command you made:
    ```cmd
    C:\Users\my-app> bun run format
    ```

### Automating Pre-Commit Checks with Husky

- Since we now have a formatter that needs to be run before we commit our code we could forget to do so... So lets automate the process with Husky!

- At https://typicode.github.io/husky/get-started.html we can copy the script and install Husky as a dependency
  ```cmd
    C:\Users\my-app> bun add --dev husky
  ```
- This will create a `.husky` directory with a `pre-commit` file

  ![.husky directory](./Snapshots_and_Media/huskyDir.png)

- In the `pre-commit` file add your pre-commit scripts

  ```
  //my-app/.husky/pre-commit

    bun run format
  ```

- Now we only want to format only the staged files
  - For that we need a seprate library called [Lint Stage](https://www.npmjs.com/package/lint-staged)

  ```cmd
    C:\Users\my-app> bun add --dev lint-staged
  ```

  - Now we can modify our `pre-commit` file to include lint-staged init

    ```
    //my-app/.husky/pre-commit

      bunx lint-staged
    ```

  - After create a new file: `.lintstagedrc` and add the files you want formatted before you commit
    ```json
    // my-app/.linttagedrc
    {
      "*.{js,jsx,ts,tsx,css}": "prettier --write"
    }
    ```

> Husky only works at the root of the project. So I had to do a work-around considering my repository is a polyglot of projects. Pleas refer to my work-around at the [root](../.) of the repository

## Building a chatbot

### Chat API

- First we need to introduce our chosen AI Model into our application
  - > If you need to review how to choose a model, refer to the [Choosing the right Model](#choosing-the-right-model) section.

  ```JavaScript
    import OpenAI from 'openai';

    // Insert Environment variables before initiating the app with express
    // THIS APP IS NOT USING DOTENV
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Enable JSON parsing right after initiating app
    app.use(express.json());

    app.post('/api/chat', async (req, res) => {
      const { prompt } = req.body; // This is the input data for the AI model

      // create the response with chosen AI model
      const response = await client.responses.create({
          model: 'gpt-4o-mini',
          input: prompt,
          temperature: 0.2,
          max_output_tokens: 100,
      });

      res.json({ message: response.output_text });
    });
  ```

  - This state of the AI chat will not retain memory thou...

- To retaining memeory, _one way_ is by keeping a _global variable_ of keeping track of the last _**Response ID**_
  - ```TypeScript
      let lastResponseID: string | null = null; //Global Variable

      app.post('/api/chat', async (req, res) => {
        const { prompt } = req.body;

        const response = await client.responses.create({
            model: 'gpt-4o-mini',
            input: prompt,
            temperature: 0.2,
            max_output_tokens: 100,
            previous_response_id: lastResponseID, // Passing stored response ID, from previous response, into model memory
        });

        lastResponseID = response.id; //Storing NEW Response's ID into gobal variable

        res.json({ message: response.output_text });
      });
    ```

    - > This is a temporary solution. This can only keep track of the last Response ID for **one conversation**.

- To retain memory for multiple users, conversations, we need to create a map of those conversations.
  - ```TypeScript
      const conversations= new Map<string, string>(); // Replaced the Global Variable with a Map

      app.post('/api/chat', async (req, res) => {
        const { prompt, conversationId } = req.body; // Now we need to pass through a unique identifier of the conversation, conversationId

        const response = await client.responses.create({
            model: 'gpt-4o-mini',
            input: prompt,
            temperature: 0.2,
            max_output_tokens: 100,
            previous_response_id: lastResponseID, // Passing stored response ID, from previous response, of our mentioned conversatonId
        });

        conversations.set(conversationId, response.id); // Once we recieve our response, we set it to our conversationId, with the response's ID


        res.json({ message: response.output_text });
      });
    ```

  - This method allows our chat bot to keep track of multiple user's conversations at once so each user can have their own experiance with the bot and not obtain the memory of another's conversation.

### Input Validation

- Once we have our input structure set, we need to validate user input to ensure that they are within the limitation of our model.
- The tool we use in this project is [Zod](https://zod.dev/), which allows us to define the shape of our objects, like incoming reqeust data, and easily validate them.
  - With **Zod** we can set validation to our reqeusts by setting response type, min/max length, and even set custom error messages

  ```TypeScript
    import z from 'zod';

    ...

    const chatSchema = z.object({
      prompt: z
          .string()
          .trim()
          .min(1, 'Request is blank, please write something.')
          .max(1000, 'Prompt is too long for our Model'),
      conversationId: z.uuid(), // has a error message already that is easy to understand
    });

    app.post('/api/chat', async (req, res) => {

    // We validate here
   const parseResult = chatSchema.safeParse(req.body);

    // If the validation fails return the error objects
   if (!parseResult.success) {
      res.status(400).json(parseResult.error!.issues);
      // Can use z.treeifyError(parseResult.error) for a simpler object of errors
      return;
   }

   ...

   }
  ```

### Error Handling

- Simple... TryCatch it:

  ```TypeScript
    try{
      // ALL the code relating to our Conversation with our AI Bot (Request body parsing, the getting a response, and coversation map update)

      const { prompt, conversationId } = req.body;

      const response = await client.responses.create({
          model: 'gpt-4o-mini!',
          input: prompt,
          temperature: 0.2,
          max_output_tokens: 100,
          previous_response_id: conversations.get(conversationId),
      });

      conversations.set(conversationId, response.id);

      console.log(response.output_text);

      res.json({ message: response.output_text });

    }
    catch(error){
    // Then handle the error if the above code fails
      res.status(500).json({error:'Failed to generate a response.'})
    }
  ```

  > # Refactoring
  >
  > We need to make sure our Applicaiton has seperation of concers. This will orginize our code into layers and sections within those layers.
  >
  > ## Layers
  >
  > - **Controllers**: The gateway of our app, and handle recieveing HTTP requests and Sending HTTP responses
  > - **Services**: The App's logic
  > - **Repositories**: Store or Recieve Data
  >
  > Refactoring our code, or coding with the above layer structure in mind allow our code to be more modular and scalable

### Creating Chat Bot UI

#### Creating the text area

We can do this in any way we want, this is just how it is done in this practice.

- In our client package, we want to create a new component for our chatbot text input.
  ![ChatBot.tsx](./Snapshots_and_Media/Chatbot_Component_tsx.png)
  - In the new component we would want to create a component that allows the user to submit their prompt to our ai model. Thus, a `textarea` and a `submit` button are required

  ```Typescript
    import { Button } from './ui/button';
    import { FaArrowUp } from 'react-icons/fa';

    const ChatBot = () => {
      return (
          <div className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl">
            <textarea
                className="w-full resize-none"
                placeholder="Ask Anything..."
                maxLength={1000}
            />
            <Button className="rounded-full w-9 h-9">
                <FaArrowUp />
            </Button>
          </div>
      );
    };

    export default ChatBot;
  ```

  - > This inclueds both elements from shadcn and react-icons

- Now that we have our chat bot text area set and ready to take in input, we need to add the functionality of submiting the form (cause thats what this is).
  - We use [react-hook-forms](https://react-hook-form.com/) to handle forms here, and we import it into our component with `import { useForm } from 'react-hook-form';`
  - After we want to set our FormData, this is the form object and we will use it to assign different inputs to repective FormData properties.
  - Now we add the `useForm()` hook function set to our FormData, and we pass the `register` and `handleSubmit` function. This enables the registering of our form properties to the FormData object and our `onSubmit` handler.

  ```Typescript
    type FormData = {
        prompt: string;
      };

    const ChatBot = () => {
    const { register, handleSubmit } = useForm<FormData>();

  return(
    <form
      onSubmit={handleSubmit(data=> console.log(data))}
      className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl"
    >
      <textarea
        // The register() has multiple properties that we can utilize, for this case we spread all of those properties with the `...`
        {...register('prompt', {required: true})}
        className="w-full resize-none"
        placeholder="Ask Anything..."
        maxLength={1000}
      />
      <Button
        className="rounded-full w-9 h-9">
        <FaArrowUp />
      </Button>
    </form>
    );
    };
  ```

- This is a basic implementation of what we want, ther is still validation, UX fine tuning, and basic edge-cases to consider.

```typescript
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { FaArrowUp } from 'react-icons/fa';

type FormData = {
   prompt: string;
};

const ChatBot = () => {
   const { register, handleSubmit, reset, formState } = useForm<FormData>();

  // function for on submit
   const onSubmit = (data: FormData) => {
      console.log(data);
      reset();
   };

  // Handles the pressing enter key for submit,
  // and not shift+enter
   const onKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         handleSubmit(onSubmit)();
      }
   };

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         onKeyDown={onKeyDown}
         className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl"
      >
         <textarea
            {...register('prompt', {
               required: true,
               // validates if the the prompt has text
               // and isn't just blank spaces
               validate: (data) => data.trim().length > 0,
            })}
            className="w-full resize-none"
            placeholder="Ask Anything..."
            maxLength={1000}
         />
         <Button
         //disable submit if the prompt isn't valid
         disabled={!formState.isValid} className="rounded-full w-9 h-9">
            <FaArrowUp />
         </Button>
      </form>
   );
};
```

# Prompt Engineering

## Anatomy of a Good Prompt

Good Prompts that produce a consistant high quality results include:

- **Instructions**,
- **Context**,
- **Output Format**

### Insturctions

What you want thed model to do

**example of a simple prompt w/out instructions**

> "Summarize the following reviews."

**example of a simple prompt w/instructions**

> "**Summarize** the following reviews in **3 short bukllet points**, using **simple language**"

### Context

Background information: role, audience, data

**example of a promt w/context**

> "You are a senior software engineer. Read the code snippet below and explain it in plain English."

### Output Format

What kind of output do we want to recieve: text, list, JSON, etc.

**example of prompt with instructions on what formate we want our output**

> "Lable this message as 'spam' or 'not spam'. Return the result as **JSON with a single key called label**."

**_Now all together:_**

> "You are a helpful support agent. Summarize the following customer reviews in 2-3 bullet points. focus on pain points related to the login experience."

## Providing Context

Providing context, when working with LLM, is what seperates a LLM model with a wrapper over it, to a business focused chat bot that helps our users research our business

We can do this through a few simple steps:

- Tell the model who it's supposed to be, and it will take on that **role**.
- Supply relevent **background information**.
- Setting the **audience** so it knows who its writing for.
- Tell what **tone** it should write its response.
- Provide **Refrence Material**.
  - When providing this, it is best to seperate it viusally from the instructions by using:
    - `---`
    - `"""`
    - `<input>...</input>`

## Ouput Format

**Text**
By default you'll get a response in plain TEXT, maybe with some limitations or guidance of the format or length of the response if specified.

- It's good practice to let the model know to not get cut off by having the response complete with a complete sentence.

**Markdown**
Asking the model to reponse using markdown can retrun a more polished response and allow for better formating.

> "Summarize this review in two bullet points using markdown. Highlight important details in bold."

**Comma-Separated**
This is another format that follows plain TEXT but follows a structure of listing items in a comma-seperated list.

**JSON**
To extract structured data we can use JSON format

> "From the paragraph below, extract all product names and their prices.
> Return a valid **JSON array of objects**. Each object should include:
>
> - a name (as a string), and
> - a price (as a number, without currency symbols).
>
>   **Only return valid JSON. NO explanation or extra text.**"

This allows us to recieve a valid JSON object that we can use in our applicaiton

## Prompting Strategies

There are 3 prompting strategies:

- Zero-Shot
- One-Shot
- Few-Shot

### Zero-Shot

You give your model a task with no examples, only constraints.

This is good when the data analysis and the output is simple because it can rely on the data that it was fed in making the model to begin with.

### One-Shot

You give your model a single example so it understands the format of the output you want.

Zero-Shot prompts may lead the model into making its own structure of the output, this can be unsuable in your applicaiton. So giving it an example can show the model what the structure should look like.

### Few-Shot

This is giving a few short examples to cover your basis on how you want the model to read the data and how to respond to it.

- The magic number of examples should be between 3-5 examples, but there isn't a standard number.

Just make sure your examples are:

- High Quality
- Well Formatted
- Diverse
- Cover Edge Cases

### Handling Errors

Just like in software development, we test the "_happy path_" first then go ahead and give a bad input to see how it behaves.
Same thing with prompt engineering. We'll write our prompt with the constraints and format we want, test for the oupout, once we have our happy path set, we test for bad input prompts.
This includes:

- Empty strings,
- White spaces,
- gibberish,
- 1 or 2 random words,
- extreamely long input,
- content that's missing key details

One way to Handle these edge cases is by returning an `error`

- Be default the model will return an answer anyways, so its up to the engineer to set the boudaries of the model.

We can say:

> Summarize this product review.
>
> If the input is empty or not a valid review, respond with:
>
> {error: "Invalid input"}

Another way is to ask a clarifying question when the question is vauge or lacking key details.

### Reducing Hallucinations

Hallucinations happen all the time with LLM, and its because LLMs don't know FACTS.
They are only trained to perdict what should come next based on their training.

Ways to reduce hallucinations in our responses:

**Grounding**

- Providing facts in the prompt.
  > Here's our refund policy:
  >
  > ... the rfund policies ...
  >
  > Now, answer this customer's question:
  >
  > 'Can I cancel my ticket for tomorrow?'

**Silence is better than Fiction**

- Tell the model what to do when it doesn't know based on vague questions or insufficent data.
  > If your're unsure, or the answer isn't available, say:
  >
  > 'Sorry, I don't have that information.'
  >
  > Do not guess or make up a response.

**Linmit the Scope**

- Tell the model not to answer unrealted questions.

The model will try to answer any and all questions even if it doesn't relate to the scope of which it is ment for. This is how we end up with off topic coversations.

> You are a support assistant for specific business.
> Only answer questions related to business (... list of business realted things...)
>
> If the question is unrelated, response with:
>
> 'I'm here to help with business realted questions. Let me know if you have any questions about the busniess in relation to our policies, mission, etc.'

**Don't over-trust the model**
- Always sanitize or validate input and output using validation libraries like Zod
- Avaid using AI for critical decisions without human review
- Log the outputs and monitor for strange behaviors

### Refining Prompts

