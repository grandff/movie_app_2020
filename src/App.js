import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import "./App.css";

/* exact 옵션을 넣어서 해당 path가 아니면 렌더링을 안하도록 설정 */
/* Router 밖에선 Navigation이 동작하지 않음. 꼭 안에서 써야함. */
/* HashRouter가 아닌 BrowserRouter를 쓰는 경우 url창에 #가 안생김 */
/* 단, git hub pages에 업로드 하기 위해선 hash가 더 쉬움 */
function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Home} />  
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
