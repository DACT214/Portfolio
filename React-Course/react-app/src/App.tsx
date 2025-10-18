import ListGroup from "./components/ListGroup";
import Message from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import LikeButton from "./components/LikeButton/LikeButton";

import { FaCalendar } from "react-icons/fa"; //react-icon
import ExpandableText from "./components/ExpandableText";

// ========= List of cities Compononet ===========
// function App() {
//   let items = ["New York", "San Francisco", "Chicago", "Seattle", "San Jose"];
//
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//
//   return (
//     <div>
//       <ListGroup
//         heading="Citites"
//         items={items}
//         onSelectItem={handleSelectItem}
//       ></ListGroup>
//     </div>
//   );
// }
//
// export default App;

// ======== Using React-Icon ===============
//     function App() {
//       return (
//         <div>
//           <FaCalendar color="red" size={40} />
//         </div>
//       );
//     }
//
//     export default App;

// ======== Alert with Button component ===============
// function App() {
//   const [alertVisable, setAlertVisaibility] = useState(false);
//   return (
//     <div>
//       {alertVisable && (
//         <Alert onClose={() => setAlertVisaibility(false)}>I'm an alert</Alert>
//       )}
//       <Button color="primary" onClick={() => setAlertVisaibility(true)}>
//         Click me
//       </Button>
//     </div>
//   );
// }
// export default App;

// ======== Like onClick component ===============
// function App() {
//   const [alertVisable, setAlertVisaibility] = useState(false);
//   return (
//     <div>
//       <Button color="primary" onClick={() => setAlertVisaibility(true)}>
//         Click me
//       </Button>
//     </div>
//   );
// }
// export default App;

// ======== Like button component ===============
// function App() {
//   return (
//     <div>
//       <LikeButton onClick={() => console.log("clicked")} />
//     </div>
//   );
// }
// export default App;

// ======== drink component ===============
// function App() {
//   const [drink, setDrink] = useState({
//     title: "Americano",
//     price: 5,
//   });
//
//   const handleClick = () => {
//     setDrink({
//       ...drink,
//       price: 6,
//     });
//   };
//
//   return (
//     <>
//       {drink.price}
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   );
// }
// export default App;

// ======== nested object component ===============
// function App() {
//   const [customer, setCustomer] = useState({
//     name: "John",
//     address: {
//       city: "San Francisco",
//       zipCode: 94111,
//     },
//   });
//
//   const handleClick = () => {
//     setCustomer({
//       ...customer,
//       address: { ...customer.address, zipCode: 94112 },
//     });
//   };
//
//   return (
//    <>
//      <button onClick={handleClick}>Click Me</button>
//    </>;
//   );
// }
// export default App;

// ======== string array component ===============
// function App() {
//   const [tags, setTags] = useState(["happy", "cheerful"]);
//
//   const handleClick = () => {
//     // add
//     setTags([...tags, "exciting"]);
//
//     // remove
//     // setTags(tags.filter((tag) => tag !== "happy"));
//
//     // update
//     // setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
//   };
//
//   return (
//     <>
//       <button onClick={handleClick}>Click Me</button>
//       {tags}
//     </>
//   );
// }
// export default App;

// ======== updateing an object in an array component ===============
// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);
//
//   const handleClick = () => {
//     setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
//   };
//
//   return (
//     <>
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   );
// }
// export default App;

// ======== immer component ===============
// import produce from "immer";

// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);

//   const handleClick = () => {
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };

//   return (
//     <>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title} {bug.fixed ? "Fixed" : "New"}
//         </p>
//       ))}
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   );
// }
// export default App;

// ======== immer component ===============
// import Cart from "./components/Cart";
// import NavBar from "./components/NavBar";
//
// function App() {
//   const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
//
//   const handleClick = () => {};
//
//   return (
//     <>
//       <NavBar cartItmesCount={cartItems.length} />
//       <Cart cartItem={cartItems} onClear={() => setCartItems([])} />
//     </>
//   );
// }
// export default App;

// ======== updating state exercise 1/2 ===============
// update the name of player from game state object.
// import Cart from "./components/Cart";
// import NavBar from "./components/NavBar";

// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "John",
//     },
//   });

//   const handleClick = () => {
//     setGame({
//       ...game,
//       player: { ...game.player, name: "Bob" },
//     });
//   }

//   return (
//     <>
//       {game.player.name}
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   );
// }
// export default App;

// ======== updating state exercise 2/3 ===============
// add a new topping to the pizza's toppings array in the pizza state object.
// import Cart from "./components/Cart";
// import NavBar from "./components/NavBar";

// function App() {
//   const [pizza, setPizza] = useState({
//    name: 'Spicy Pepperoni',
//     toppings: ['Mushroom']
//   });

//   const handleClick = () => {
//     setPizza({
//       ...pizza,
//       toppings:[...pizza.toppings, 'Onion']
//     });
//   }

//   return (
//     <>
//       {pizza.toppings.join(', ')}
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   );
// }
// export default App;

// ======== updating state exercise 3/3 ===============
// update the quantity of the array object with id 1 in the cart state object.
// function App() {
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     item: [
//       { id: 1, title: "Product 1", quantity: 1 },
//       { id: 2, title: "Product 2", quantity: 1 },
//     ],
//   });

//   const handleClick = () => {
//     setCart({
//       ...cart,
//       item: cart.item.map((item) =>
//         item.id === 1 ? { ...item, quantity: item.quantity++} : item
//       ),
//     }
//     );
//   };
//   return (
//     <>
//       {cart.item.map((item) => (
//         <p key={item.id}>
//           {item.title} - {item.quantity}
//         </p>
//       ))}
//       <button onClick={handleClick}>Click Me</button>
//     </>
//   );
// }
// export default App;


// ======== building an expandable text component ===============

// function App() {
  
//   return (
//     <>
//     <ExpandableText maxChars={10}>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi id facere ducimus tempore iusto natus recusandae est, illum necessitatibus consequatur, aliquam sit ut explicabo neque iure pariatur sunt dignissimos nisi? Quas repellendus excepturi vitae suscipit eos esse molestiae alias, ullam recusandae ut molestias eligendi veritatis ducimus cupiditate doloremque enim, dicta odit, itaque obcaecati architecto laudantium? Harum, sapiente? Alias dignissimos repudiandae dolore sequi in esse ipsam incidunt ipsum tenetur saepe animi, eligendi iste voluptate quidem! Excepturi totam aut aspernatur. Laborum molestias nisi sequi a tenetur tempore recusandae, deleniti quia commodi sint quas libero in nobis, eos, dicta dignissimos consequatur. Doloremque, delectus.
//     </ExpandableText>
//     </>
//   );
// }
// export default App;


// ======== building a form ===============
import Form from "./components/Form";

function App() {
  
  return (
    <>
    <Form></Form>
    </>
  );
}
export default App;