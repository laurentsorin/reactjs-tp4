import React from "react";
import PropTypes from "prop-types";
import { Button, Table } from "reactstrap";

const List = props => {
  const deleteItem = id => {
    props.deleteItem(id);
  };

  const { items } = props;

  return (
    <>
      <Table>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td className="col-01">
                <b>{item.id}</b>
              </td>
              <td className="col-10">{item.name}</td>
              <td className="col-1">
                <Button color="danger" onClick={() => deleteItem(item.id)}>
                  x
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default List;

List.propTypes = {
  items: PropTypes.array
};
