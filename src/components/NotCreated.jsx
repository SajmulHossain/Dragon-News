import React from "react";
import Header from "../mainComponents/Header";
import Nav from "../mainComponents/Nav";

const NotCreated = () => {
  return (
    <>
      <header className="py-5 px-4 md:w-11/12 mx-auto">
        <Nav />
      </header>
      <main className="h-screen flex justify-center items-center">
        <h2 className="font-bold text-2xl">Page not created yet</h2>
      </main>
    </>
  );
};

export default NotCreated;
