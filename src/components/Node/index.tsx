import Card from "@ui/Card";
import { useState } from "react";

const Node = ({ data }) => {
  const [hidden, setHidden] = useState(false);

  const toggleChildren = () => {
    setHidden(!hidden);
  };

  return (
    <li>
      <Card onExpand={toggleChildren}>{data.name}</Card>
      <ul className={hidden ? "hidden" : "visible"}>
        {data.children.map((child) => (
          <Node key={child.id} data={child} />
        ))}
      </ul>
    </li>
  );
};

export default Node;
