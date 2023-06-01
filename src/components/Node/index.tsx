const Node = ({ data }) => {
  return (
    <li>
      <div className="nodeName">{data.name}</div>
      <ul>
        {data.children.map((child) => (
          <Node key={child.id} data={child} />
        ))}
      </ul>
    </li>
  );
};

export default Node;
