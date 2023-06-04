import Tree from "@components/Tree";
import AddNodeForm from "./AddNodeForm";

const tempData = [
  {
    id: 1,
    name: "First",
    children: [
      {
        id: 2,
        name: "Second",
        children: [
          {
            id: 3,
            name: "Third",
            children: [],
          },
        ],
      },
      {
        id: 4,
        name: "Fourth",
        children: [],
      },
    ],
  },
  {
    id: 5,
    name: "Fifth",
    children: [],
  },
];

function App() {
  return (
    <div className="container">
      <AddNodeForm />
      <Tree renderData={tempData} />
    </div>
  );
}

export default App;
