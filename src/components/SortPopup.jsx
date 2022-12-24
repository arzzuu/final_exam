import React from "react";

function SortPopup({ items }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const activeLabel = items[activeItem];

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };
  const sortRef = React.useRef();
  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) setVisiblePopup(false);
    // console.log('outside');
  };
  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, [visiblePopup]);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((name, index) => (
                <li
                  className={activeItem === index ? "active" : ""}
                  onClick={() => onSelectItem(index)}
                  key={`${name}_${index}`}
                >
                  {name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default SortPopup;
