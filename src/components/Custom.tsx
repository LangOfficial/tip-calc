
interface Props {
  index: number;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  setVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
  val: string;
}

const Custom = ({selectedIndex, setSelectedIndex, index, setVal, val}: Props) => {
  // const [val, setVal] = useState("");
  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setVal(e.target.value);
  // }
  return (
    <input
      type="string"
      placeholder="Custom"
      value={"" || val }
      onChange={setVal}
      onClick={() => setSelectedIndex(index)}
      className={`bg- rounded-md bg-secondary_200 py-3 text-center font-semibold border-2 border-transparent text-secondary_700 hover:bg-opacity-70 px-3 text-3xl ${val && 'text-right text-secondary_800'} ${selectedIndex === index && ' !border-primary'}`}
    />
  );
};

export default Custom;
