import React from "react";
import { Link } from "react-router-dom";
// import Header from "../components/Header";

function Cart({ items }) {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="container">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <div className="header__logo">
              <img
                className="logo"
                src="https://cdn-icons-png.flaticon.com/512/992/992717.png"
                alt="cake logo"
              />
              <div>
                <h1>Arzum Cake</h1>
                <p>Bake me a wish!✨</p>
              </div>
            </div>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <button className="about">About Us</button>
          </Link>
        </div>
      </div>
      <div className="korzina">
        <div>
          <h1>Корзина пустая 😒</h1>
          <p>
            Вероятней всего, вы не заказывали ещё тортик. Для того, чтобы
            заказать тортик, перейдите на главную страницу.
          </p>
        </div>
      </div>
      <div className="shop">
        <img
          src="https://img.freepik.com/free-vector/online-shopping-concept-young-man-shopping-online-via-smartphone_1150-51083.jpg?w=740&t=st=1672129194~exp=1672129794~hmac=0250f21c33e78c94e6e7ffa7da265e99ffb481e7ae5a47c6e00275f6a6cedf43"
          alt="man"
        ></img>
      </div>
    </div>
  );
}

export default Cart;
