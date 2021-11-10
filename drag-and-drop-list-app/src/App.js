import React from "react";

import "./App.css";


export const App = () => {
  const [cardList, setCardList] = React.useState([
    {id: 1, order: 3, text: "Карточка N3"},
    {id: 2, order: 1, text: "Карточка N1"},
    {id: 3, order: 2, text: "Карточка N2"},
    {id: 4, order: 4, text: "Карточка N4"},
  ]);
  const [currentCard, setCurrentCard] = React.useState(null);

  function dragStartHandler(e, card) {
    setCurrentCard(card);
    console.log("drag", card);
  }

  function dragEndHandler(e) {
    e.target.style.background = "#01A7FD";
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = "blue";
  }

  function dropHandler(e, card) {
    e.preventDefault();
    setCardList(cardList.map(c => {
      if (c.id === card.id) {
        return {...c, order: currentCard.order};
      }
      if (c.id === currentCard.id) {
        return {...c, order: card.order};
      }
      return c;
    }));
    e.target.style.background = "#01A7FD";
    console.log("drop", card);
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className={"main-block"}>
      <div className={"title"}>
        List app
      </div>
      <div>
        {cardList.sort(sortCards).map((card) => {
          return (
            <div
              onDragStart={(e) => dragStartHandler(e, card)}
              onDragLeave={(e) => dragEndHandler(e)}
              onDragEnd={(e) => dragEndHandler(e)}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropHandler(e, card)}
              className={"card"}
              draggable={true}
              key={card.id}
            >
              {card.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};