import React, { useState } from "react";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const OrderButton = props => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Order</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => props.orderItems("asc")}>Asc</DropdownItem>
        <DropdownItem onClick={() => props.orderItems("desc")}>
          Desc
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default OrderButton;
