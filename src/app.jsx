import React from "react";
import { createRoot } from "react-dom/client";

console.log("I ran this from the app.jsx file!");

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<h2>Hello from React in Electron!</h2>);
