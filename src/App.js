console.log('hello');
function App() {
  return (
    <body>
    <div className="wrapper">
      <div className="header">
        <div className="container">
          <div className="header__logo">
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/992/992717.png" alt="cake logo" />
            <div>
              <h1>Arzum Cake</h1>
              <p>Bake me a wish!✨</p>
            </div>
          </div>
          <div className="header__cart">
          <a href="/cart.html" class="button button--cart">
              <span>45 AZN</span>
              <div class="button__delimiter"></div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>3</span>
            </a>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <div className="categories">
              <ul>
                <li className="active">Все</li>
                <li>На новый год</li>
                <li>На день рождение</li>
                <li>Традиционные</li>
                <li>Шоколадные</li>
                <li>Фруктовые</li>
              </ul>
            </div>
            <div className="sort">
              <div className="sort__label">
                <b>Сортировка по:</b>
                <span>популярности</span>
              </div>
              <div className="sort__popup">
                <ul>
                  <li className="active">популярности</li>
                  <li>цене</li>
                  <li>алфавиту</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 className="content__title">Все торты</h2>
          <div className="content__items">
            <div className="cake-block">
    <img className="cake-block__image" src="https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=740&t=st=1671279403~exp=1671280003~hmac=c197c717b234501c013323fc5609256f05341ca368465ffe1b682de218949980"
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
</div> <div className="cake-block">
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
</div> <div className="cake-block">
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
</div> <div className="cake-block">
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
</div> <div className="cake-block">
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
</div> <div className="cake-block">
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
</div> <div className="cake-block">
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
</div> <div className="cake-block">
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
</div> <div className="cake-block">
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
      </div>
    </div>
  </body>
  );
}

export default App;
