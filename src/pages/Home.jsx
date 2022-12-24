import React from "react";
import Categories from "../components/Categories";
import SortPopup from "../components/SortPopup";
function Home() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={[
            "На новый год",
            "На день рождение",
            "Традиционные",
            "Шоколадные",
            "Фруктовые",
          ]}
        />
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все торты</h2>
      <div className="content__items">
        <div className="cake-block">
          <img
            className="cake-block__image"
            src="https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=740&t=st=1671279403~exp=1671280003~hmac=c197c717b234501c013323fc5609256f05341ca368465ffe1b682de218949980"
            alt="cake"
          />
          <h4 className="cake-block__title">"Шоколадный рай"</h4>
          <div className="cake-block__selector">
            <ul>
              <li className="active">одноярусный</li>
              <li>двухъярусный</li>
            </ul>
            <ul>
              <li className="active">1 кг.</li>
              <li>2 кг.</li>
              <li>3 кг.</li>
            </ul>
          </div>
          <div className="cake-block__bottom">
            <div className="cake-block__price">от 15 ₼/кг. </div>
            <div className="button button--outline button--add">
              <span>+Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>{" "}
        <div className="cake-block">
          <img
            className="cake-block__image"
            src="https://img.freepik.com/free-photo/fruits-cake_74190-4962.jpg?w=740&t=st=1671279956~exp=1671280556~hmac=aceccfa572138be907ce65902a60602641239e6a558625c93054ecb23515d9c0"
            alt="cake"
          />
          <h4 className="cake-block__title">"Фруктовый остров"</h4>
          <div className="cake-block__selector">
            <ul>
              <li className="active">одноярусный</li>
              <li>двухъярусный</li>
            </ul>
            <ul>
              <li className="active">1 кг.</li>
              <li>2 кг.</li>
              <li>3 кг.</li>
            </ul>
          </div>
          <div className="cake-block__bottom">
            <div className="cake-block__price">от 15 ₼/кг. </div>
            <div className="button button--outline button--add">
              <span>+Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>{" "}
        <div className="cake-block">
          <img
            className="cake-block__image"
            src="http://almode.ru/uploads/posts/2021-12/thumbs/1640585733_15-almode-ru-p-tort-novogodnii-na-belom-fone-17.jpg"
            alt="cake"
          />
          <h4 className="cake-block__title">"Новогоднее чудо"</h4>
          <div className="cake-block__selector">
            <ul>
              <li className="active">одноярусный</li>
              <li>двухъярусный</li>
            </ul>
            <ul>
              <li className="active">1 кг.</li>
              <li>2 кг.</li>
              <li>3 кг.</li>
            </ul>
          </div>
          <div className="cake-block__bottom">
            <div className="cake-block__price">от 15 ₼/кг. </div>
            <div className="button button--outline button--add">
              <span>+Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>{" "}
        <div className="cake-block">
          <img
            className="cake-block__image"
            src="https://ae04.alicdn.com/kf/U99f9cf24fc0647a5a345292cb9f084e5O/-.jpg"
            alt="cake"
          />
          <h4 className="cake-block__title">"Рафаэлло"</h4>
          <div className="cake-block__selector">
            <ul>
              <li className="active">одноярусный</li>
              <li>двухъярусный</li>
            </ul>
            <ul>
              <li className="active">1 кг.</li>
              <li>2 кг.</li>
              <li>3 кг.</li>
            </ul>
          </div>
          <div className="cake-block__bottom">
            <div className="cake-block__price">от 15 ₼/кг. </div>
            <div className="button button--outline button--add">
              <span>+Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>{" "}
        <div className="cake-block">
          <img
            className="cake-block__image"
            src="https://sun9-46.userapi.com/impf/cECyvQOLCNUBsBUZWLLNq8cIK6DA1g_593iUwg/r1xIsHCEwAg.jpg?size=600x600&quality=96&sign=0437b46ba1488597e11c18e361fc237a&type=album"
            alt="cake"
          />
          <h4 className="cake-block__title">"Захер"</h4>
          <div className="cake-block__selector">
            <ul>
              <li className="active">одноярусный</li>
              <li>двухъярусный</li>
            </ul>
            <ul>
              <li className="active">1 кг.</li>
              <li>2 кг.</li>
              <li>3 кг.</li>
            </ul>
          </div>
          <div className="cake-block__bottom">
            <div className="cake-block__price">от 15 ₼/кг. </div>
            <div className="button button--outline button--add">
              <span>+Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>{" "}
        <div className="cake-block">
          <img
            className="cake-block__image"
            src="https://avatars.mds.yandex.net/get-mpic/5376414/img_id5092297276230972396.jpeg/orig"
            alt="cake"
          />
          <h4 className="cake-block__title">"Наполеон"</h4>
          <div className="cake-block__selector">
            <ul>
              <li className="active">одноярусный</li>
              <li>двухъярусный</li>
            </ul>
            <ul>
              <li className="active">1 кг.</li>
              <li>2 кг.</li>
              <li>3 кг.</li>
            </ul>
          </div>
          <div className="cake-block__bottom">
            <div className="cake-block__price">от 15 ₼/кг. </div>
            <div className="button button--outline button--add">
              <span>+Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>{" "}
        <div className="cake-block">
          <img
            className="cake-block__image"
            src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614524912_114-p-tort-na-belom-fone-178.jpg"
            alt="cake"
          />
          <h4 className="cake-block__title">"Happy Birthday"</h4>
          <div className="cake-block__selector">
            <ul>
              <li className="active">одноярусный</li>
              <li>двухъярусный</li>
            </ul>
            <ul>
              <li className="active">1 кг.</li>
              <li>2 кг.</li>
              <li>3 кг.</li>
            </ul>
          </div>
          <div className="cake-block__bottom">
            <div className="cake-block__price">от 15 ₼/кг. </div>
            <div className="button button--outline button--add">
              <span>+Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>{" "}
        <div className="cake-block">
          <img
            className="cake-block__image"
            src="https://avatars.mds.yandex.net/get-mpic/5316009/img_id8929673983997845520.jpeg/orig"
            alt="honey cake"
          />
          <h4 className="cake-block__title">"Медовик"</h4>
          <div className="cake-block__selector">
            <ul>
              <li className="active">одноярусный</li>
              <li>двухъярусный</li>
            </ul>
            <ul>
              <li className="active">1 кг.</li>
              <li>2 кг.</li>
              <li>3 кг.</li>
            </ul>
          </div>
          <div className="cake-block__bottom">
            <div className="cake-block__price">от 15 ₼/кг. </div>
            <div className="button button--outline button--add">
              <span>+Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>{" "}
        <div className="cake-block">
          <img
            className="cake-block__image"
            src="https://www.pngplay.com/wp-content/uploads/7/Cheesecake-Background-PNG-Image.png"
            alt="cake"
          />
          <h4 className="cake-block__title">"Cheesecake"</h4>
          <div className="cake-block__selector">
            <ul>
              <li className="active">одноярусный</li>
              <li>двухъярусный</li>
            </ul>
            <ul>
              <li className="active">1 кг.</li>
              <li>2 кг.</li>
              <li>3 кг.</li>
            </ul>
          </div>
          <div className="cake-block__bottom">
            <div className="cake-block__price">от 15 ₼/кг. </div>
            <div className="button button--outline button--add">
              <span>+Добавить</span>
              <i>2</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
