import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App: FC = () => {
  return (
    <Router>
      <div>
        <header>
          Signed in as Eufy
        </header>
        <nav>
          <ul>
            <li><Link to="/">Hotel Search</Link></li>
            <li><Link to="/voucher">Add Voucher</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/occupancy"><Occupancy /></Route>
          <Route path="/rooms"><Rooms /></Route>
          <Route path="/success"><Success /></Route>
          <Route path="/voucher/confirm"><VoucherConfirm /></Route>
          <Route path="/voucher"><Voucher /></Route>
          <Route path="/"><Search /></Route>
        </Switch>
      </div>
    </Router>
  );
}

const HotelCta: FC<{ id: string }> =({ id }) => {
  const history = useHistory();
  const handleClick = () => history.push('/rooms?id=' + id);
  return <div className="hotel-result">{id}<button type="button" onClick={handleClick}> Choose rooms </button></div>
}

const HotelRoom: FC<{ id: string }> =({ id }) => {
  const history = useHistory();
  const handleClick = () => history.push('/occupancy?id=' + id);
  return <div className="hotel-result">{id}<button type="button" onClick={handleClick}> Select </button></div>
}

const Occupancy: FC = () => {
  const history = useHistory();
  const handleClick = () => history.push('/success');
  const options = [...Array(10).keys()].map(k => <option key={k}>{k}</option>);

  return (
    <>
      <h2>Occupancy</h2>
      <form>
        <div>Adults:</div>
        <select> {options} </select>
        <div>Children:</div>
        <select> {options} </select>
      </form>
      <button type="button" onClick={handleClick}> Select </button>
    </>
  );
}

const Search: FC = () => {
  return (
    <>
      <h2>Hotel Search</h2>
      <HotelCta id="afe0678" />
      <HotelCta id="pj3478" />
      <HotelCta id="or38d8" />
    </>
  );
}

const Rooms: FC = () => {
  return (
    <>
      <h2>Rooms</h2>
      <HotelRoom id="678" />
      <HotelRoom id="478" />
      <HotelRoom id="8d8" />
    </>
  );
}

const Success: FC = () => {
  return (
    <h2>Your booking has been made!</h2>
  );
}

const Voucher: FC = () => {
  return (
    <>
      <h2>Add A Voucher</h2>
      <textarea placeholder="Enter Code" cols={50} />
      <button><Link to="/voucher/confirm">Submit</Link></button>
    </>
  );
}

const VoucherConfirm: FC = () => {
  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <>
      <h2>Voucher Added!</h2>
      <button type="button" onClick={handleClick}>Continue</button>
    </>
  );
}

export default App;
