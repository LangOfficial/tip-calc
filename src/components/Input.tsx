
interface Props {
  labelText: string;
  val: number | string;
  setVal: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

//ICONS
import Dollar from  "../images/icon-dollar.svg"
import Person from "../images/icon-person.svg"

const Input = ({labelText, val, setVal, error }: Props) => {
  const icon = labelText === 'Bill' ? Dollar : Person

  return (
    <div className="">
      <div className="flex justify-between">
        <label htmlFor={labelText} className="text-base font-semibold text-secondary_700">{labelText}</label>
        <span className="text-red-400 text-sm">{error}</span>
      </div>

      <label className={`input flex items-center gap-2 px-5 mt-2 bg-secondary_200 border-2 ${!val ? "" : error ? ' border-red-400' : 'border-primary'}`}>
        <img src={icon} alt="" />
        <input id={labelText} type="text" placeholder="0" value={!val ? '' : val} onChange={setVal} className={`grow text-right text-2xl font-bold text-secondary_800`}/>
      </label>
    </div>
  );
};

export default Input;
