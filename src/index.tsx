import * as React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from 'react-dom';


import Apps from './Pages/App';
import Test from './Pages/Test';
import Error404 from './Pages/404';

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Apps />} ></Route>
        <Route path="/Test" element={<Test />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
}
render(<App />, document.getElementById('root'));