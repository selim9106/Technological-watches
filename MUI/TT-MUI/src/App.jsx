import React, { useState } from "react";

import ItemsList from "./components/ItemsList";
import TextInput from "./components/TextInput";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([
    { text: "CSS Modules", id: "i1" },
    { text: "Finish the tech talk", id: "i2" },
  ]);

  const addItemHandler = (enteredText) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedItems;
    });
  };

  const deleteItemHandler = (goalId) => {
    setItems((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No items found. Add some</p>
  );

  if (items.length > 0) {
    content = (
      <ItemsList items={items} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="item-form">
        <TextInput onAddItem={addItemHandler} />
      </section>
      <section id="items">
        {content}
        {/* {items.length > 0 && (
          <CourseGoalList
            items={items}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
