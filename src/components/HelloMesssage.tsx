import React from "react";

// Define the interface for the props
interface HelloMessageProps {
  name: string;
  favoriteColor:string;
  favoriteDish:string;
}

// Use the interface in the component
const HelloMessage: React.FC<HelloMessageProps> = ({ name, favoriteColor,favoriteDish }) => {
  return<div> <h1>Hello, {name}!</h1>;
  <p>my favorite color is:{favoriteColor}</p>
  <p>my favorite dish is:{favoriteDish}</p></div>
};

export default HelloMessage;
