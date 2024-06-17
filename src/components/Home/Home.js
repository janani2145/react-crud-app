import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home(){
  return (
    <>
    <div className="crud bg-light mt-5  rounded-5">
      
      <div className="w-75  ">
      <h2 className=" text-center mt-5 fw-bold">
        CRUD Operations
      </h2>
      <p className=" text-center mt-3">
        😊 Master the basics of CRUD operations!
      </p>
      <p className="text-center">
        💻 Dive into modern React hooks like useState!
      </p>
      <p className=" text-center">
        🧠 Enhance your state management with useReducer!
      </p>
      <p className="text-center">
        🌐 Manage global state effortlessly with useContext!
      </p>
    
      </div>
    </div>
    </>
  );
}