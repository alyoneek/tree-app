import { FC, useState } from "react";

import Card from "@ui/Card";

interface NodeProps {}

const Node: FC<NodeProps> = ({ data }) => {
  const [open, setOpen] = useState(true);

  const toggleChildren = () => {
    setOpen(!open);
  };

  return (
    <li>
      <Card onExpand={data.children.length ? toggleChildren : undefined} open={open}>
        {data.name}
      </Card>

      <ul className={open ? "visible" : "hidden"}>
        {data.children.map((child) => (
          <Node key={child.id} data={child} />
        ))}
      </ul>
    </li>
  );
};

export default Node;
