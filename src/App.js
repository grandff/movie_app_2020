import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

/* exact 옵션을 넣어서 해당 path가 아니면 렌더링을 안하도록 설정 */
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />  
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
