import React, { useState, useEffect } from "react";
import List from "./List";
import { Button, Card, CardBody, CardTitle } from "reactstrap";
import { toast } from "react-toastify";
import OrderButton from "./order-button";
import MyModal from "./modal";

const Container = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Jean" },
    { id: 2, name: "Laurent" }
  ]);
  const [currentId, setCurrentId] = useState(2);
  const [order, setOrder] = useState("asc");
  const [open, setOpen] = useState(false);

  const addItem = newItem => {
    const newId = currentId + 1;
    setItems([...items, { name: newItem.name, id: newId }]);
    setCurrentId(newId);
  };

  const openModal = () => {
    setOpen(true);
  };
  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  useEffect(() => {
    items.length > 0 && toast.success("Items list updated !!");
  }, [items.length]);

  // TP3 part 1 -- ajouter un composant fonctionnel (order)
  const orderItems = order => {
    setOrder(order);
  };

  useEffect(() => {
    setItems(
      [...items].sort((a, b) => (order === "asc" && a.name > b.name ? 1 : -1))
    );
  }, [order]);
  // TP3 part 1 -- fin

  return (
    <div className="container">
      <Card>
        <CardBody>
          <CardTitle>
            {items.length > 0 ? `${items.length} items` : `Items`}
          </CardTitle>
          <Button onClick={openModal} color="primary">
            Add item
          </Button>
          <br />
          <OrderButton orderItems={orderItems} />
          <List items={items} deleteItem={deleteItem} />
        </CardBody>
      </Card>
      <MyModal open={open} addItem={addItem} onClose={() => setOpen(false)}/>
    </div>
  );
};

export default Container;
