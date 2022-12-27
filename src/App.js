import React from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import store from "./redux/store";
import { setCakes } from "./redux/actions/cakes";
// import store from "./redux/store";
// import { Outlet } from "react-router-dom"

// console.log("hello");
// function App() {
//   const [cakes, setCakes] = React.useState([]);
//   React.useEffect(() => {
//     fetch("http://localhost:3000/db.json")
//       .then((res) => res.json())
//       .then((json) => {
//         setCakes(json.cakes);
//       });
//   }, []);
//   console.log(cakes);
//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Routes>
//           <Route path="/" element={<Home items={cakes} />} exact />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }
class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      window.store.dispatch(setCakes(data.cakes));
    });
  }
  render() {
    // console.log(this.props);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={this.props.items} />} exact />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.cakes.items,
  };
};

export default connect(mapStateToProps)(App);
