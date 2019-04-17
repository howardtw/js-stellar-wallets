import React from "react";

const Index = ({ itemsByKind }) => {
  return (
    <div>
      {Object.keys(itemsByKind).map((kind) => (
        <>
          <h3>{kind}</h3>

          {itemsByKind[kind] &&
            itemsByKind[kind].map((item) => (
              <li>
                <a href={`#item_${item.id}`}>{item.name}</a>
              </li>
            ))}
        </>
      ))}
    </div>
  );
};

export default Index;
