import { useAppSelector } from "@/store";
import AddNodeForm from "@components/AddNodeForm";
import Tree from "@components/Tree";
import { getNodes } from "@store/tree/treeSelectors";

// const tempData = [
//   {
//     id: 1,
//     name: "First",
//     children: [
//       {
//         id: 2,
//         name: "Second",
//         children: [
//           {
//             id: 3,
//             name: "Third",
//             children: [],
//           },
//         ],
//       },
//       {
//         id: 4,
//         name: "Fourth",
//         children: [],
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Fifth",
//     children: [],
//   },
// ];

function App() {
  const data = useAppSelector(getNodes);

  return (
    <div className="container">
      <h1>Tree</h1>
      <AddNodeForm />
      <Tree renderData={data} />
    </div>
  );
}

export default App;
