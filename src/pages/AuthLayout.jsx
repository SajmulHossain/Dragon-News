import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../mainComponents/Nav";

const AuthLayout = () => {
  return (
    <section className="bg-[#F3F3F3] h-full">
      <header className="py-8 w-8/12 mx-auto">
        <Nav />
      </header>

      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default AuthLayout;
