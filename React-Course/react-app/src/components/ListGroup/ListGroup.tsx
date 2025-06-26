import "./ListGroup.css";
import styled from "styled-components"; // could need to install @types/styled-components if having error

// Here we are writing style for all instances of the specified dom object
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;
interface Props {
  items: string[];
  heading: string;
  //(item:string) => void
  onSelectItem: (item: string) => void;
}
import { useState } from "react";
// import style from "./ListGroup.module.css";
// import { MouseEvent } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   let selectedIndex = 0;
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  //   arr[0]; // variable (selectedIndex)
  //   arr[1]; // updater function

  // Event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);
  //   const message = items.length === 0 ? <p> No Items Found</p> : null;

  //   const getMessage = () => {
  //     return items.length === 0 ? <p> No Items Found</p> : null;
  //   };

  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p>No Items Found</p>}
      {/* <ul className={[style.ListGroup, style.container].join(" ")}> */}
      <List>
        {/* if the style.<name> is created using hyphins `-` -> we refrence those using `[""]`*/}
        {items.map((item, index) => (
          <ListItem
            key={item}
            active={index === selectedIndex}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
