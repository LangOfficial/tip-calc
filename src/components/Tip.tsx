interface Props {
  text: number;
  index: number;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;

}

const Tip = ({ text, index, selectedIndex, setSelectedIndex}: Props) => {
  return (
    <button
      onClick={() => setSelectedIndex(index)}
      className={`rounded-md bg-secondary_800 py-3 text-3xl font-semibold text-secondary_100 hover:bg-primary hover:bg-opacity-70 ${selectedIndex === index && "!bg-primary text-secondary_800"}`}
    >
      {text + '%'}
    </button>
  );
};

export default Tip;
``;
