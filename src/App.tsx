import React, { Suspense } from "react";

import Router from "./Router";
import { Loader } from "./components";

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
    </div>
  );
};

export default App;
