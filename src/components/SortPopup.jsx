import { type } from "@testing-library/user-event/dist/type";
import React from "react";

function SortPopup({ items }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const activeLabel = items[activeItem].name;

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
        <b>Sort:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((obj, index) => (
                <li
                  className={activeItem === index ? "active" : ""}
                  onClick={() => onSelectItem(index)}
                  key={`${obj.type}_${index}`}
                >
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default SortPopup;
