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
  > the uniqueness of the style object is what allows resuability of style clas names
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
  - easier to syle based on props/state

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

# Key Comands and features:

## commands

- Create React Project command: `npm create vite@latest //or specific version`
- Installing all dependencies: `npm i`
- Running React App: `npm run dev`

## freatures

- When orginzing your components into respected folders, you can create a `index.tsx` file that _imports_ and _exports_ the `.tsx` file of your component (not named index), so you only have to reference the folder name and not the file directly in the folder.
