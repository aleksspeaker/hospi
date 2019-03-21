import React from "react";

import "./BurgerMenu.scss";

interface IItem {
  id: string;
  itemName: string;
}

const BurgerMenu = ({ stateObj, clickHandler }) => {
  const {
    isOpen,
    openMenuItems,
    activeOpenMenuItem,
    openMenuLowerItems,
  } = stateObj;

  return (
    <section
      className={
        isOpen === true
          ? "Burger-menu Burger-menu_opened"
          : "Burger-menu Burger-menu_closed"
      }
    >
      <div className="Burger-menu__upper-part">
        <ul className="Burger-menu-items">
          {openMenuItems.map((item: IItem) => {
            return (
              <li
                className={
                  activeOpenMenuItem === item.id
                    ? "Burger-menu-items__item Burger-menu-items__item_active"
                    : "Burger-menu-items__item"
                }
                key={item.id}
                onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                  clickHandler(e, item);
                }}
              >
                <a href="/">{item.itemName}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="Burger-menu__lower-part">
        <ul className="Burger-menu-lower-items">
          {openMenuLowerItems.map((item: IItem) => {
            return (
              <li
                className={
                  activeOpenMenuItem === item.id
                    ? "Burger-menu-lower-items__item Burger-menu-lower-items__item_active"
                    : "Burger-menu-lower-items__item"
                }
                key={item.id}
                onClick={(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
                  clickHandler(e, item);
                }}
              >
                <a href="/">{item.itemName}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default BurgerMenu;
