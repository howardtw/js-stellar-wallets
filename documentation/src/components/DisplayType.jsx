import React, { useState } from "react";
import styled from "styled-components";

import { useStateValue } from "AppState";

import DisplayInterface from "components/DisplayInterface";

const El = styled.a`
  position: relative;
`;

const InfoEl = styled.div`
  z-index: 10;
  position: absolute;
  top: 20px;
  left: 50%;

  width: 300px;
  height: 200px;
  padding: 10px;
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;

const DisplayType = ({ name, type, id }) => {
  const [isVisible, toggleVisibility] = useState(false);

  const [{ itemsById }] = useStateValue();

  if (!itemsById[id]) {
    return <span>{name || "any"}</span>;
  }

  return (
    <El
      href={`#item_${id}`}
      onMouseEnter={() => toggleVisibility(true)}
      onMouseLeave={() => toggleVisibility(false)}
    >
      {name || "{}"}

      {isVisible && (
        <InfoEl>
          <DisplayInterface {...itemsById[id]} />
        </InfoEl>
      )}
    </El>
  );
};

export default DisplayType;
