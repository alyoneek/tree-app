import AddNodeMainForm from "@/components/Forms/AddNodeMainForm";
import { useAppSelector } from "@/store";
import Tree from "@components/Tree";
import { getNodes } from "@store/tree/treeSelectors";

import "@styles/app.scss";

function App() {
  const data = useAppSelector(getNodes);

  return (
    <div className="container">
      <h1>Tree</h1>
      <AddNodeMainForm />
      <Tree renderData={data} />
    </div>
  );
}

export default App;
