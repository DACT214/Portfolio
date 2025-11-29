# What is React

- JavaScript library created by Facebook that is the most widely used for Frontend development
- We use React to create Components that simplifies the DOM and DOM elements
  - Components help us create resuable, modular, and better organized code
- An React application is a tree of components, with the app being the Root and all the other components comming together in layers to make the full application

# Component Tree

- React can use function or class base components
  - more modern application uses function based, but legacy react apps may use class base
- App.tsx being the root component and all other components are the children, React take this componet tree and creates a JavaScript component call the **virtual dom**.

## The Virtual Dom

> It’s a lightweight, in-memory representation of our component tree using nodes.

- When the state or data in a component changes, in a child component, then react updates the node in the virual dom to reflect those changes
- then it compares the current and new virtual dom and change those nodes
- This is all done with the **ReactDom** library
  > mobile apps uses **React Native** library

# React Ecosytem

- Unlike React there is Angular and Vue which are frameworks

## differnce between a Library and a Framework

> A **library** is a tool that provides specific functionality (tool)
> A **Framework** is a set of tools and guidlines for building applicaitons (toolset)

- React is only good for making dynamic and interactive UIs
  - we need additional tools for other concerns like: _routing, http, managing app state, internationalization, form validation, animations..._
    - The good thing React doesn't have an opinion for the tools we use to address any of the concerns above

---

# Fundementals of React

- Building components
- Rendering markup with JSX
- Managing state
- Passing input via props
- Debugging React apps

## Creating a componont

- Most commonly used web styling used today is bootstrap
- Elements can be wrapped in parent elements within our return value of our fucntion components
  - This is to pervent multiple, seperate, elements in our applicaiton which breaks our react applicaiton.
    > the reason being that react will try to conver the first elelment into html while hiccuping on the following
- A commmon wrapper element used is a `Fragment` and can either be imported from react itself as `import { Fragment } from "react";`, or not imported at all and simply use empty brackets `<></>`. This tells react to use a fragment which is an element used to _not_ add an elemnt to the dom.

- To render a list in JSX, we use the ‘array.map()’ method. When mapping items, each
  item must have a unique key, which can be a string or a number.

- Element can be populated dynamically in the dom using variables and methods.

  > an `if` statement or ternary operator

  > Inserting data dynamically can be done using curly brackets`{}`
  > You can use curly brackets to also make method refrences or insert inline methods into dom elements

  - These can be use to dynamaclly handle events (_event handlers_) or change element classes

-**State** are Data managed by a component, similar to local variables

- **mutable** variables, or data that can change over time
  > `useState()` is a function that we can use to set dynamic functionality base off a boolean value

```TypeScript
import { useState } from "react";
//===================
const [alertVisable, setAlertVisaibility] = useState(false);
// use setAlertVisability() to set the value of the state of said componnet
  {alertVisable && (<Alert onClose={() => setAlertVisaibility(false)}>I'm an alert</Alert>)}
```

- Each component will have their own **state**
- **Hooks** are function that we use to utilize built-in features in react.

  - ex: State hook -> `const arr = useState() // returns an array` that we can destructure to handle state changes in the dom

- **Props** (Properties): the imputs/arguments to our components.
  - Props are **immutable**
  - Props can be set to any data type, literals or functions
    > if you call a prop function you will simply refrence it and not initialize it with parentheses `()`

> **React Dev Tools** is a browser extension that we can use to view the structure of our react page and how each componnent relates to the root app. we can also see all the _props_ and which component renders the selected component. You can even see the source code.

# Styling using CSS

## Plain / Vanilla

- This is simple css implementation.
  - create `.css` file, and
  - import file into the respected `.tsx` file that requires said styling
    > Problem! can clash with other styling with the same name (this can be solved in CSS Module)

## CSS Module

- This allows for style to be called as a normal and unique JavaScript object.
  > the uniqueness of the style object is what allows resuability of style class names
- if you want multiple styles at once, we can wrap all the styles in an array `[]` and then call the `.join(' ')` which will join each style class with a space.

  - This syntax can be used to call style classes dynamically since the styling behaves like an object

  ```css
  .btn {
    padding: 8px 12px;
    border-radius: 3px;
    border: 0;
  }
  .btn-primary {
    background-color: blue;
    color: white;
  }
  ```

  ```html
  <!--here we are dynamically using the variable 'color' to call the specific style class we want to use -->
  <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  ```

## CSS-IN-JS

- This styling is:
  - scoped style like modules
  - all the css & js/ts code in one place
  - easier to delete a component
  - easier to style based on props/state

Libraries:

- Styled components
- Emotion
- Polished

### Style Components

> How to install:

```
npm i styled-components
// you may need to install types
npm i @types/styled-components

```

- Styled Components allows users to make style classes for specific dom elmenets, allows for uniformed designing for all instance of said element.
  - Doing so also can rename those elements:
  ```
  const List = styled.ul`
  list-style: none;
  padding: 0;
  `;
  ```
- You can create a prop interface for setting dynaming properties for your styling

  ```
  interface ListItemProps {
  active: boolean;
  }
  ```

  - you can then use the property in the decleration of the styling and in its instance:
    ```
      const ListItem = styled.li<ListItemProps>`
      padding: 5px 0;
      background: ${(props) => (props.active ? "blue" : "none")};
      `;
      <ListItem
            key={item}
            active={index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}>
            {item}
      </ListItem>
    ```

## Inline Style

- Inserting styling inline with the element you wanting to add css to
- can be messy and harder to maintain, but are easy to implement
  - should be used as a last resort

## Styling with Libraries

- Bootstrap
- Material UI
- Tailwindcss

- dasiy UI
- chakra UI (built on top of tailwindcss)

## Icons

- We can add icons to our application using the **react-icons** library

# Seperation of Concern

Divide a program into distinct sections where each section handles a specific functionality, rather than having everything in one place. This ensures that our program will be:

- Modular
- Easier to Understand
- Easier to Maintain
- Easier to Modify

---

# State Managment

## State Hook

- React updates state asynchronously
- Stored outside of the component
- Use hooks at the top level of our component
  - The order of state hooks matter! The variables are stored in an array where each index is the order of when each state hook is declared in the application.
    > if a state hook is declared in a for loop or other dynamic block it could disrupt the order of the varibles stored in React.
- When declaring a state variable, you can make simple single value variable **or** declare objects
  > avoid deeply nested structures

### best practices with state hooks

- Avoid redundant state variables
- Group related variables inside an object
- avoid deeply nested structures

## Purity

- **Pure Function**: A function that gives the same result everytime
  > _Inpure_: returns different results everytime

React is designed around the same idea

- Our applications components will be rendered twice!
  - 1 to check for any errors or problems
  - 2 to finally update the ui

## Managing Componnets State

- The state hook allows us to add state to function componenets.

```
 const [count, setCount] = useState(0); // count is state, setCount updates it, useState is the state hook

```

- Hooks can only be called at the top level of components.
- State variables stay in memory (as long as the compononet is still on screen)
  - different from local variables in a funciton
  - State is tied to the component **instance**
  - React will destroy the componenet and its state when it is removed from the screen
- Updates are asynchronous, and aren't applied immediately
  - They're applied after all event handlers are finihsed executing.
  - React will re-render the component after the state is updated
- Organized state variables into an Object
- Avoid "_deeply nested_" state object
  - "_flat objects_" are perfered, and easier to deal with.

```javascript
// Updating Object
const [drink, setDrink] = useState({
  title: "Americano",
  price: 5,
});

setDrink({ ...drink, price: 2 });

/////////////////////////////////////////////////////////////////////////////

// Updating Nested Objects
const [customer, setCustomer] = useState({
  name: "John",
  address: {
    city: "San Francisco",
    zipCode: 94111,
  },
});

setCustomer({
  ...customer,
  address: { ...customer.address, zipCode: 94112 },
});

/////////////////////////////////////////////////////////////////////////////

// Updationg Arrays
const [tags, setTags] = useState(["a", "b"]);

// adding
setTags([...tags, "c"]);

//removing
setTags(tags.filter((tag) => tag !== "a"));

// Updating
setTags(tags.map((tag) => (tag === "a" ? "A" : tag)));

/////////////////////////////////////////////////////////////////////////////

// Updating Array of Objects
const [bugs, setbugs] = useState([
  { id: 1, title: "bug 1", fixed: false },
  { id: 2, title: "bug 2", fixed: false },
]);

setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
```

- Keep state as minimal as possible
  - Avoid redundant state variables that can be computed from existing variables
- **Pure Function**: A function that returns the same result given the same input.
  - Shouldn't modify objects outside of the function
  - React expect Pure Function Components -> Always return the same JSX with same inputs
    - avoid making changes in the render phase
- **Strict Mode** helps us catch potential problems such as impure componenets.
  - Renders components twice to detect any potential side effects.
- Objects & Arrays should be treated as immutable objects.
  - create new objects to update state.
- **Immer** is a library that can help us update objects and arrays in a more consise and mutable way.
  ```
  npm install immer
  ```
  ```javascript
  import produce from "immer";
  setBugs(
    produce((draft) => {
      const bug = draft.find((bug) => bug.id === 1);
      if (bug) bug.fixed = true;
    })
  );
  ```
- To share state between components:
  1. Lift the state up to the cloest parent componenet.
  2. Then pass it down as props to child components.
  - The Component that holds some state should be the one that updates it.
    - _if a child component needs to update some state, it should notify the parent component using a callback function passed down as a prop._

# Building Forms

- `onSubmit` attribute is set in the **Props** interface and implemention is passed through the parent component of the form component

```typescript
// Handling Form Submission

const App = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted");
  };
};
```

- **Ref Hooks** is another built in hook in React that we can use to refrence the value of an input field upon submitting a from.
  - _There is a small performance advantage when using ref hooks, since state hooks rerenders your entire app with every change; ref does't rerender but stores value in `.current`_

```typescript
// Accessing Input Fields using the Ref Hook

const App = () => {
  const nameRef = useRef<HTMLInputElemet>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (nameRef.current) console.log(nameRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" />
    </form>
  );
};
```

- State hook can be used to create state variables and update them as the user types into input fields.

```typescript
// Managing Form State using the State Hook

const App = () => {

  const[name, setName] = useState('');

  return(
    <form>
      <input type="text" value{name} onChange=(event)=> {setName(event.target.value)} />
    </form>
  );
};
```

- **React Hook Form** is a popular library used to help us build forms quickly with less code.
  - _no longer have to worry about using state or ref hooks_
  - `import { useForm } from "react-hook-form";`

```typescript
// Managing State Using React Hook Form

import { FieldFalues, useForm } = fomr 'react-hook-form';

const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log('Submitting the form', data);
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} type="text"/>
    </form>
  )
}
```

- React Hook Form supports the standard HTML attributes for data validation such as required, minLength, etc.

```typescript
// Validation using HTML 5 Attributes

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => {
    console.log('Submitting the form', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...('name', {required: true})} type="text">
      {errors.name?.type === 'required' && <p>Name is required.</p>}
    </form>
  );
};
```

- We can validate our forms using schema-based validation usch as **_joi, yup, zod_**, etc. With these libraries, we can define all our validation rules in a single place called a schema.

```typescript
// Schema-Based Validation with Zod

import { FeildValues, useForm } from 'react-hook-form';
import { z } form 'zod';
import { zodResolver } from '@hookform/resolver/zod';

const schema = z.object({
  name:z.string().min(3),
});

type FormData = z.infer<typeof schema>;

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema)});l

  const onSubmit = (data: FieldValues) => {
    console.log('Submitting the form', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} type='text' />
      {errors.name && <p>{errors.name.message}</p>}
    </form>
  );
};
```

> Bonus tips for validation in forms

```typescript
// Disableing the Submit Button

const App = () => {
  const {
    formState: { isValid },
  } = useForm<FormData>();

  return (
    <form>
      <button disabled={!isValid}>Submit</button>
    </form>
  );
};
```

# Connecting to the Backend

## Understand the Effect Hook

- `useEffect()` is used when we want to execute a piece of code after the render
  - Our React componenets need to be _Pure Functions_; thus keeping any code out of the render phase.
    - However this limits saving data in the browser/local storage, calling the server to fetch/save data, or manually modifing the DOM
    - That's where the **Effect Hook** comes in
- Multiple Effects can be executed within the same components.
  - each new effect will run in order after each render of the component

## Effect dependency

- sometimes we want more control over when the effect is executed, and not just after each render.
  - not controling this can lead to infinate loops of the effect hook.
- To pervent this we can pass the second argument of the `useEffect()` function:

```typescript
useEffect(() => {}, []);
```

> The Array block stops the infient loops and executes the Effect function only once

```typescript
useEffect(() => {}, [randomVal...]);
```

> The Array block, with a value(s) within it, stops the infient loops, and executes the Effect function only when said value(s) changes.

## Effect Clean Up

- Sometimes we need to execute some "_clean up_" code to disconnect or unsubscribe a user from some service or server.
  - This is done by adding clean up code within the `useEffect` function:

```typescript
const connect = () => console.log("connecting...");
const disconnect = () => console.log("disconnecting...");

function App() {
  useEffect(() => {
    connect();

    // clean up function
    return () => disconnect();
  });
}
```

# Fetching Data

- We can use `fetch()` but we could also use **Axios**, a very popular npm library used to make http reqeusts.
- `npm install axios`
- using Axios, we can make a server reqeust within the `useEffect()` like this:

```typescript
useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users");
}, []);
```

> This return a **_Promise_**, an object that holds the eventural result or failure of an asynchronus operation.

```typescript
useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data));
}, []);
```

> Since axios http request are _promises_ we can appen the `.then()` method after http method.

```typescript
const [error, setError] = useState("");
useEffect(() => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => setUsers(res.data))
    .catch((err) => setError(err.message));
}, []);

return (
  <>
    {error && <p className="text-danger">{error}</p>}
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </>
);
```

> Like the `.then()` method, Axios also has a catch error method, `.catch()` where we can pass an error and display that error uing our state hook.

- (IF YOU WANT TO BE STUPID AND STINKY) There is another way to do the above implementation using `await` and `async`:

```typescript
const [error, setError] = useState("");

useEffect(() => {
  const fetchUser = async () => {
    try {
      const res = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/xusers"
      );
      setUsers(res.data);
    } catch (err) {
      setError((err as AxiosError).message);
    }
  };
  fetchUser();
}, []);
```

## Cancelling a reqeust

- When dealing with server request, sometimes you'll want to cancel the request to the server because the data is no longer needed (user navigates to another page). We can use the `AbortController()` method:

```typescript
useEffect(() => {
  const controller = new AbortController();

  axios
    .get<User[]>(
      "https://jsonplaceholder.typicode.com/users",
      // here you'll add a second perameter, configuration object
      { signal: controller.signal }
    )
    .then((res) => setUsers(res.data))
    .catch((err) => {
      // Don't forget to configure if you want the error to show or not
      if (err instanceof CanceledError) return;
      setError(err.message);
    });

  // clean up function
  return () => controller.abort();
}, []);
```

### loading indicator

- This is a simple state hook implementation. Just creat a state for your loading state, add it to before and after your fetch reqeust has finished (\*_true_ before the request is made, and _false_ at the end of your `.then` and `.catch` blocks\*), and finally add your loading element using bootstrapL:

```typescript
const [isLoading, setLoading] = useState(false);
useEffect(() => {
    const controller = new AbortController();

    // make the loader appear
    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        // gets rid of the loader
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        // gets rid of the loader
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      // loader shows if isLoading is true
      {isLoading && <div className="spinner-border"></div>}
    </>
```


# Connecting to the Backend
- We use the **Effect Hook** to perform "*side effects*", such as *fetching data* or *updating the DOM*
- The effect hook takes a *function* that performs the side effects and an *optional array of dependencies*. 
  - Whenever the dependencies change, the effect hook runs again.
```typescript
function App(){
  useEffect(() = > {
    document.title = 'App';
  }, []);
}
```
- To clean up any resources that were created by the Effect Hook, we can include a **clean-up function** that runs when the component *unmounts* or the *dependencies change*.
> Reacts handles front-end development; but we need A Back-end to handle business logic, data storage, and other functionality.
- The communication between the front-end and teh back-end happens over HTTP, the same protocol that powers the web.
  - The front-end sends an HTTP request to the back-end, and the back-end sends an HTTP response back.
  - Each HTTP request and response contains a header and a body. 
  - The header provides metadata about the message, such as the content type and HTTP status code, while tha body contains the actual data being sent or received.
- To send HTTP requests to the backend, we can use **axios**, a popular JavaScript library. *Axios* makes it easy to send requests.
```typescript
const [users, setUsers] = useState<User[]>([]);

useEffect(()=>{
  //GET
  axios.get<User[]>('http://...')
  .then((res)=> setUsers(res.data));
},[]);

// =================
  //DELETE
  axios.delete('http://...')
  //CREATE (POST)
  axios.post('http://...', newUser)
  // UPDATE (PUT)
  axios.put('http://...', updatedUser)
```
- When we send HTTP requests with the *effect hook*, we should provide a *clean-up function* to **cancel** the request if the component is unmounted before teh response is received. 
  - This is important to prevent errors, especially if the user navigates to different page while the request is still pending.
```typescript
useEffect(()=>{
  const controller = new AbortController();

  axios.get<User[]>('http://...')
  .then((res) => setUsers(res.data))
  .catch(err => {
    if(err onstanceof CanceledError) return;
    setError(err.message)
  });
},[]);
```
- When sending HTTP requests, we must handle errors properly. This can be done using `try-catch` blocks or by handling the error in the promise chain using `.catch()`.
```typescript
const[error, setError]= useState('');

useEffect(()=>{
  axios.get<User[]>('http://...')
  .then((res)=> setUsers(res.data))
  .catch(err => setError(err.message));
},[])
```
- **Custom hooks** are a way to reuse code logic between multiple components. 
  - By encapsulating logic in a custom hook, we can create reusable pieces of code that can be shared across components without duplication the code. 
  - **Custom hooks** can be used to handle common tasks, such as fetching data, and can help to make our code more organized and easier to maintain.



---

---

---

# Key Comands and features:

## commands

- Create React Project command: `npm create vite@latest //or specific version`
- Installing all dependencies: `npm i`
- Running React App: `npm run dev`

## freatures

- When orginzing your components into respected folders, you can create a `index.tsx` file that _imports_ and _exports_ the `.tsx` file of your component (not named index), so you only have to reference the folder name and not the file directly in the folder.
