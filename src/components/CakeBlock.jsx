import React from "react";
import cn from "classnames";

function CakeBlock({ name, imageUrl, price, types, sizes }) {
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);

  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };
  const typesNames = ["одноярусный", "двухъярусный"];
  const availableSizes = [1, 2, 3];
  return (
    <div className="cake-block">
      <img className="cake-block__image" src={imageUrl} alt="cake" />
      <h4 className="cake-block__title">{name}</h4>
      <div className="cake-block__selector">
        <ul>
          {typesNames.map((type, index) => (
            <li
              key={type}
              onClick={() => onSelectType(index)}
              className={cn({
                active: activeType === index,
                disabled: !types.includes(index),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, index) => (
            <li
              key={size}
              onClick={() => onSelectSize(index)}
              className={cn({
                active: activeSize === index,
                disabled: !sizes.includes(size),
              })}
            >
              {size} кг.
            </li>
          ))}
        </ul>
      </div>
      <div className="cake-block__bottom">
        <div className="cake-block__price">от {price} ₼/кг. </div>
        <div className="button button--outline button--add">
          <span>+Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
}

export default CakeBlock;
