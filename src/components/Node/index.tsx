const Node = ({ data }) => {
  return (
    <>
      <li style={{ background: "#b7b4b4", margin: "10px", padding: "10px" }}>{data.name} </li>
      <ul style={{ marginLeft: "20px" }}>
        {data.children.map((child) => (
          <Node data={child} />
        ))}
      </ul>
    </>
  );
};

export default Node;
