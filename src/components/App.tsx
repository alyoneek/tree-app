import Tree from "@components/Tree";

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
    <>
      <Tree renderData={tempData} />
    </>
  );
}

export default App;
