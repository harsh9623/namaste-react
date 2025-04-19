/*
HMR - Hot module Replacement
File Watcher Algorithm- c++
Building 
Minify
Cleaning the code
Dev and Production Build
Super fast build algorithm
Image optimization
caching while development
compression 
Polyfill - compatible with older version of browsers
https on dev
port number
consistant hashing algorithm
Zero configuration
Transitive Dependencies
Tree shaking algorithm

**/

import React from "react";
import ReactDOM from "react-dom/client";
import logoimg from './images/AlbedoBase_XL_A_stylish_and_elegant_logo_design_for_Harsh_Vill_3.jpg';

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <a href="/">
      <img className="logo" src="https://th.bing.com/th/id/OIP.XjCglgfr-FwunT_wRgVFDgHaFj?rs=1&pid=ImgDetMain" alt="logo"/>
      </a>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};
const BodyComponent = () => {
  return (
    <div className="body">
     <Foodcard/>   
     <Foodcard/>   
     <Foodcard/>   
     <Foodcard/>   
     <Foodcard/>   
     <Foodcard/>   
    </div>
  );
};
    
const cupnoodles ={
 name:"Cup Noodles",
 image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b4817ea5bb972089f419c6f14e5a0bdd",
 cusines:["Chinese", "Spicy"],
 rating:"4.3"
};

const Foodcard =()=> {
  return(<>
  <div className="card">
    <img alt="food" src={cupnoodles.image}/>
    <h2>{cupnoodles.name}</h2>
    <h3>{cupnoodles.cusines}</h3>
    <h4>{cupnoodles.rating}</h4>
  </div>
  </>)
}

function App() {
  return (
    <>
      <div id="app">
        <HeaderComponent />
        <BodyComponent/>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// Steps to deploy this project on GitHub:

// 1. Initialize a Git repository in your project folder:
// Open a terminal in the project directory and run:
// git init

// 2. Create a `.gitignore` file to exclude unnecessary files:
// Add the following to `.gitignore`:
// node_modules/
// dist/
// .env

// 3. Commit your project files:
// Stage all files and commit them:
// git add .
// git commit -m "Initial commit"

// 4. Create a new repository on GitHub:
// Go to GitHub, create a new repository, and copy the repository URL.

// 5. Add the GitHub repository as a remote:
// Replace `<repository-url>` with your GitHub repository URL:
// git remote add origin <repository-url>

// 6. Push your code to GitHub:
// Push the code to the main branch:
// git branch -M main
// git push -u origin main

// 7. Enable GitHub Pages (optional for deployment):
// Go to the repository settings on GitHub, scroll to "Pages," and select the branch (e.g., `main`) and folder (e.g., `/root`) to deploy.