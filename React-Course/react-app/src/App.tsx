import ListGroup from "./components/ListGroup";
import Message from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import { useEffect, useRef, useState } from "react";
import LikeButton from "./components/LikeButton/LikeButton";

import { FaCalendar } from "react-icons/fa"; //react-icon
import ExpandableText from "./components/ExpandableText";
import ProductLIst from "./components/ProductLIst";
import categories from "./expense-tracker/categories";

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
// import Form from "./components/Form";

// function App() {

//   return (
//     <>
//     <Form></Form>
//     </>
//   );
// }
// export default App;

//======== building a expense list ===============

// import { ExpenseList } from "./expense-tracker/components/ExpenseList";
// import { ExpenseFilter } from "./expense-tracker/components/ExpenseFilter";
// import { ExpenseForm } from "./expense-tracker/components/ExpenseForm";
// import categories from "./expense-tracker/categories";
// function App() {
//   const [selected, setSelected] = useState("");

//   const [expenses, setExpenses] = useState([
//     { id: 1, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 2, description: "bbb", amount: 10, category: "Utilities" },
//     { id: 3, description: "ccc", amount: 10, category: "Utilities" },
//     { id: 4, description: "ddd", amount: 10, category: "Utilities" },
//   ]);

//   const visibleExpenses = selected
//     ? expenses.filter((e) => e.category === selected)
//     : expenses;

//   return (
//     <>
//       <div className="mb-5">
//         <ExpenseForm
//           onSubmit={(expense) =>
//             setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
//           }
//         ></ExpenseForm>
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter onSelectCategory={(category) => setSelected(category)} />
//       </div>
//       <ExpenseList
//         expense={visibleExpenses}
//         onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
//       ></ExpenseList>
//     </>
//   );
// }
// export default App;

//======== Using the EFFECT HOOK ===============

// import { useEffect, useRef } from "react";

// function App() {
//   const ref = useRef<HTMLInputElement>(null);

//   // after Render
//   useEffect(() => {
//     //side effect
//     if (ref.current) ref.current.focus();
//   });

//   useEffect(() => {
//     document.title = "My App";
//   });

//   return (
//     <div>
//       <input ref={ref} type="text" className="form-control" />
//     </div>
//   );
// }
// export default App;

//======== Using the EFFECT Dependencies ===============

// function App() {
//   const [category, setCategory] = useState("");

//   return (
//     <div>
//       <select
//         className="form-select"
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         <option value=""></option>
//         <option value="Clothing">Clothing</option>
//         <option value="Household">Household</option>
//       </select>
//       <ProductLIst category={category}></ProductLIst>
//     </div>
//   );
// }
// export default App;

//======== Using the EFFECT CLean Up ===============

// const connect = () => console.log("connecting...");
// const disconnect = () => console.log("disconnecting...");

// function App() {
//   useEffect(() => {
//     connect();

//     // clean up function
//     return () => disconnect();
//   });

//   return <div></div>;
// }
// export default App;

//======== Fetch Data ===============
// import axios from "axios";

// interface User {
//   id: number;
//   name: string;
// }

// function App() {
//   const [users, setUsers] = useState<User[]>([]);

//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
//       .then((res) => setUsers(res.data))
//       .catch((err) => setError(err.message));
//   }, []);

//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

//======== Fetch Data with Async and Await ===============
// import axios, { AxiosError } from "axios";

// interface User {
//   id: number;
//   name: string;
// }

// function App() {
//   const [users, setUsers] = useState<User[]>([]);

//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await axios.get<User[]>(
//           "https://jsonplaceholder.typicode.com/xusers"
//         );
//         setUsers(res.data);
//       } catch (err) {
//         setError((err as AxiosError).message);
//       }
//     };
//     fetchUser();
//   }, []);

//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

//======== Cancelling a Fetch Request ===============
// import axios, { CanceledError } from "axios";

// interface User {
//   id: number;
//   name: string;
// }

// function App() {
//   const [users, setUsers] = useState<User[]>([]);

//   const [error, setError] = useState("");

//   useEffect(() => {
//     const controller = new AbortController();

//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/users", {
//         signal: controller.signal,
//       })
//       .then((res) => {
//         setUsers(res.data);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//       });

//     return () => controller.abort();
//   }, []);

//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

//======== Adding Loader to Fetch Request ===============
// import axios, { CanceledError } from "axios";

// interface User {
//   id: number;
//   name: string;
// }

// function App() {
//   const [users, setUsers] = useState<User[]>([]);

//   const [error, setError] = useState("");

//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setLoading(true);
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/users", {
//         signal: controller.signal,
//       })
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });

//     return () => controller.abort();
//   }, []);

//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}
//       {isLoading && <div className="spinner-border"></div>}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// export default App;

//======== Delete Data ===============
import axios, { CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const originalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/xusers/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
