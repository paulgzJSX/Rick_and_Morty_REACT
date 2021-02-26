import './App.css';
import { CardsGrid, Header, Character } from './components/index'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Backdrop } from './components/index'

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'><CardsGrid /></Route>
          <Route path='/character:id'><Character /></Route>
        </Switch>
        <Backdrop />
      </BrowserRouter>
    </div>
  );
}

export default App;
