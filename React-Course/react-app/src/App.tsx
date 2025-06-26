import ListGroup from "./components/ListGroup";
import Message from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useState } from "react";
import LikeButton from "./components/LikeButton/LikeButton";

import { FaCalendar } from "react-icons/fa"; //react-icon

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
//
// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);
//
//   const handleClick = () => {
//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };
//
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

// ======== immer component ===============
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {};

  return (
    <>
      <NavBar cartItmesCount={cartItems.length} />
      <Cart cartItem={cartItems} onClear={() => setCartItems([])} />
    </>
  );
}
export default App;
