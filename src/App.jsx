import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
const App = () => {
  useEffect(() => {
  }, []);

  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default App;