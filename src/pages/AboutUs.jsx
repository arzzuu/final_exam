import React from "react";
import { Link } from "react-router-dom";
import Comments from "../components/Comments";

function AboutUs() {
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
        </div>
      </div>
      <div className="aboutus">
        <div className="weHeader">
          <div>
            <h1>О нас</h1>
          </div>

          <div>
            <p>
              В 2010 году Арзу испекла торт "Птичье молоко", с которого началась
              история большой и дружной семьи и бренда "Arzum cake". В самом
              начале производствотортов было семейным делом, которое имело в
              своем активе лишь небольшую кухню в типовой квартире в городе
              Баку.
            </p>
          </div>

          <div>
            <p>
              Постепенно нарабатывались клиенты, росла популярность. Вместе с
              ней рос ассортимент предлагаемых десертов и место, где все это
              производилось. Так за 10 лет дело выросло в небольшую семейную
              кондитерскую со своим цехом, салоном заказов и преданными
              клиентами.
            </p>
          </div>

          <div>
            <p>
              С тех пор мы выросли более чем в 5 раз. Территория нашей фабрики
              выросла до 4000 кв.м. Цехов стало уже 4, к тому же появилась
              собственная площадка по производству молочной продукции. Помимо
              фабрики на сегодня у нас уже более 100 собственных фирменных
              магазинов в трех странах (Азербайджан, Турция и Россия). А общее
              количество сотрудников составляет более 1500 человек
            </p>
          </div>

          <div>
            <p>И мы продолжаем расти и развиваться! 👩‍🍳</p>
          </div>
          <div>
            <h1>Мы используем</h1>
            <div className="list">
              <ul>
                <li>
                  <div>НАСТОЯЩИЕ МОЛОЧНЫЕ СЛИВКИ 🐄🥛</div>
                </li>
                <li>
                  <div>НАТУРАЛЬНОЕ СЫРЬЕ 🌿</div>
                </li>
                <li>
                  <div>СИСТЕМУ ПИЩЕВОЙ БЕЗОПАСНОСТИ 🍒</div>
                </li>
                <li>
                  <div>СИСТЕМУ ЗАМОРОЗКИ 🧊</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
}

export default AboutUs;
