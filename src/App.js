console.log('hello');
function App() {
  return (
    <body>
    <div class="wrapper">
      <div class="header">
        <div class="container">
          <div class="header__logo">
            <img width="38" src="./img/cake-logo.svg" alt="cake logo" />
            <div>
              <h1>Arzum Cake</h1>
              <p>Bake me a wish!✨</p>
            </div>
          </div>
          <div class="header__cart">
            <a href="/cart.html" class="button button--cart">
              <span>AZN</span>
              <div class="button__delimiter"></div>
              <span>3</span>
            </a>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="container">
          <div class="content__top">
            <div class="categories">
              <ul>
                <li class="active">Все</li>
                <li>На новый год</li>
                <li>На день рождение</li>
                <li>Традиционные</li>
                <li>Шоколадные</li>
                <li>Фруктовые</li>
              </ul>
            </div>
            <div class="sort">
              <div class="sort__label">
                <b>Сортировка по:</b>
                <span>популярности</span>
              </div>
              <div class="sort__popup">
                <ul>
                  <li class="active">популярности</li>
                  <li>цене</li>
                  <li>алфавиту</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 class="content__title">Все торты</h2>
          <div class="content__items">
            <div class="cake-block">
    <img class="cake-block__image" src="https://img.freepik.com/free-photo/chocolate-cake-with-chocolate-sprinkles_144627-8998.jpg?w=740&t=st=1671279403~exp=1671280003~hmac=c197c717b234501c013323fc5609256f05341ca368465ffe1b682de218949980"
    alt="cake"
    />
  <h4 class="cake-block__title">"Шоколадный рай"</h4>
  <div class="cake-block__selector">
    <ul>
      <li class="active">одноярусный</li>
      <li>двухъярусный</li>
    </ul>
    <ul>
      <li class="active">1 кг.</li>
      <li>2 кг.</li>
      <li>3 кг.</li>
    </ul>
  </div>
  <div class="cake-block__bottom">
    <div class="cake-block__price">от 15 ₼/кг. </div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div class="cake-block">
  <img
    class="cake-block__image"
    src="https://img.freepik.com/free-photo/fruits-cake_74190-4962.jpg?w=740&t=st=1671279956~exp=1671280556~hmac=aceccfa572138be907ce65902a60602641239e6a558625c93054ecb23515d9c0"
    alt="cake"
  />
  <h4 class="cake-block__title">"Фруктовый остров"</h4>
  <div class="cake-block__selector">
    <ul>
      <li class="active">одноярусный</li>
      <li>двухъярусный</li>
    </ul>
    <ul>
      <li class="active">1 кг.</li>
      <li>2 кг.</li>
      <li>3 кг.</li>
    </ul>
  </div>
  <div class="cake-block__bottom">
    <div class="cake-block__price">от 15 ₼/кг. </div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div class="cake-block">
  <img
    class="cake-block__image"
    src="http://almode.ru/uploads/posts/2021-12/thumbs/1640585733_15-almode-ru-p-tort-novogodnii-na-belom-fone-17.jpg"
    alt="cake"
  />
  <h4 class="cake-block__title">"Новогоднее чудо"</h4>
  <div class="cake-block__selector">
    <ul>
      <li class="active">одноярусный</li>
      <li>двухъярусный</li>
    </ul>
    <ul>
      <li class="active">1 кг.</li>
      <li>2 кг.</li>
      <li>3 кг.</li>
    </ul>
  </div>
  <div class="cake-block__bottom">
    <div class="cake-block__price">от 15 ₼/кг. </div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div class="cake-block">
  <img
    class="cake-block__image"
    src="https://ae04.alicdn.com/kf/U99f9cf24fc0647a5a345292cb9f084e5O/-.jpg"
    alt="cake"
  />
  <h4 class="cake-block__title">"Рафаэлло"</h4>
  <div class="cake-block__selector">
    <ul>
      <li class="active">одноярусный</li>
      <li>двухъярусный</li>
    </ul>
    <ul>
      <li class="active">1 кг.</li>
      <li>2 кг.</li>
      <li>3 кг.</li>
    </ul>
  </div>
  <div class="cake-block__bottom">
    <div class="cake-block__price">от 15 ₼/кг. </div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div class="cake-block">
  <img
    class="cake-block__image"
    src="https://sun9-46.userapi.com/impf/cECyvQOLCNUBsBUZWLLNq8cIK6DA1g_593iUwg/r1xIsHCEwAg.jpg?size=600x600&quality=96&sign=0437b46ba1488597e11c18e361fc237a&type=album"
    alt="cake"
  />
  <h4 class="cake-block__title">"Захер"</h4>
  <div class="cake-block__selector">
    <ul>
      <li class="active">одноярусный</li>
      <li>двухъярусный</li>
    </ul>
    <ul>
      <li class="active">1 кг.</li>
      <li>2 кг.</li>
      <li>3 кг.</li>
    </ul>
  </div>
  <div class="cake-block__bottom">
    <div class="cake-block__price">от 15 ₼/кг. </div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div class="cake-block">
  <img
    class="cake-block__image"
    src="https://avatars.mds.yandex.net/get-mpic/5376414/img_id5092297276230972396.jpeg/orig"
    alt="cake"
  />
  <h4 class="cake-block__title">"Наполеон"</h4>
  <div class="cake-block__selector">
    <ul>
      <li class="active">одноярусный</li>
      <li>двухъярусный</li>
    </ul>
    <ul>
      <li class="active">1 кг.</li>
      <li>2 кг.</li>
      <li>3 кг.</li>
    </ul>
  </div>
  <div class="cake-block__bottom">
    <div class="cake-block__price">от 15 ₼/кг. </div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div class="cake-block">
  <img
    class="cake-block__image"
    src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614524912_114-p-tort-na-belom-fone-178.jpg"
    alt="cake"
  />
  <h4 class="cake-block__title">"Happy Birthday"</h4>
  <div class="cake-block__selector">
    <ul>
      <li class="active">одноярусный</li>
      <li>двухъярусный</li>
    </ul>
    <ul>
      <li class="active">1 кг.</li>
      <li>2 кг.</li>
      <li>3 кг.</li>
    </ul>
  </div>
  <div class="cake-block__bottom">
    <div class="cake-block__price">от 15 ₼/кг. </div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div class="cake-block">
  <img
    class="cake-block__image"
    src="https://avatars.mds.yandex.net/get-mpic/5316009/img_id8929673983997845520.jpeg/orig"
    alt="honey cake"
  />
  <h4 class="cake-block__title">Медовик</h4>
  <div class="cake-block__selector">
    <ul>
      <li class="active">одноярусный</li>
      <li>двухъярусный</li>
    </ul>
    <ul>
      <li class="active">1 кг.</li>
      <li>2 кг.</li>
      <li>3 кг.</li>
    </ul>
  </div>
  <div class="cake-block__bottom">
    <div class="cake-block__price">от 15 ₼/кг. </div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      </svg>
      <span>Добавить</span>
      <i>2</i>
    </div>
  </div>
</div> <div class="cake-block">
  <img
    class="cake-block__image"
    src="https://www.pngplay.com/wp-content/uploads/7/Cheesecake-Background-PNG-Image.png"
    alt="cake"
  />
  <h4 class="cake-block__title">"Cheesecake"</h4>
  <div class="cake-block__selector">
    <ul>
      <li class="active">одноярусный</li>
      <li>двухъярусный</li>
    </ul>
    <ul>
      <li class="active">1 кг.</li>
      <li>2 кг.</li>
      <li>3 кг.</li>
    </ul>
  </div>
  <div class="cake-block__bottom">
    <div class="cake-block__price">от 15 ₼/кг. </div>
    <div class="button button--outline button--add">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      </svg>
      <span>Добавить</span>
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
