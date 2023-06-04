import Node from "@components/Node";

const Tree = ({ renderData }) => {
  return (
    <ul>
      {renderData.map((item) => (
        <Node data={item} />
      ))}
    </ul>
  );
};

export default Tree;
