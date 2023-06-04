import Input from "@ui/Input";

const AddNodeForm = () => {
  return (
    <form>
      <Input placeholder="Add a node" />
      <button type="submit">Добавить</button>
      <button type="reset">Очистить</button>
    </form>
  );
};

export default AddNodeForm;
