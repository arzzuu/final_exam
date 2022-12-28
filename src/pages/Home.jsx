import React from "react";
import Header from "../components/Header";
import CakeBlock from "../components/CakeBlock";
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";

function Home({ items }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <div className="content__top">
          <Categories
            onClickItem={(name) => console.log(name)}
            items={[
              "New Year",
              "Birthday",
              "Традиционные",
              "Шоколадные",
              "Фруктовые",
            ]}
          />
          <SortPopup
            items={[
              { name: "popular", type: "popular" },
              { name: "prise", type: "price" },
              { name: "alphabet", type: "alphabet" },
            ]}
          />
        </div>
        <h2 className="content__title">Все торты</h2>
        <div className="content__items">
          {items && items.map((obj) => <CakeBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
