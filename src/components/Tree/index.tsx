import Node from "@components/Node";

const Tree = ({ renderData }) => {
  return (
    <ul>
      {renderData.map((item) => (
        <Node data={item} />
      ))}
    </ul>

    // <>
    //   <p>Hover This</p>
    //   <ul>
    //     <li>Coffee</li>
    //     <li>Tea</li>
    //     <li>Milk</li>
    //   </ul>
    //   <a>sfdf</a>
    // </>
  );
};

export default Tree;
