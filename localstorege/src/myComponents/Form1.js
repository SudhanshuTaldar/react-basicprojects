import { useLocalStorage } from "./useLocalStorage";

const Form1 = () => {
  const [name, setName] = useLocalStorage("name2", "");
  const [checked, setChecked] = useLocalStorage("checked", false);

  return (
    <form>
      {/* ... */}
    </form>
  );
};

export default Form1;