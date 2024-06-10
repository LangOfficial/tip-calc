
interface Props {
  labelText: string;
}

import { useState } from "react";
//ICONS
import Dollar from  "../images/icon-dollar.svg"
import Person from "../images/icon-person.svg"

const Input = ({labelText}: Props) => {
  const icon = labelText === 'Bill' ? Dollar : Person

  return (
    <div>
      <label htmlFor={labelText} className="text-base font-semibold text-secondary_700">{labelText}</label>
      <label className="input input-bordered flex items-center gap-2 px-5 mt-2 bg-secondary_200 border-0 ">
        <img src={icon} alt="" />
        <input id={labelText} type="text" placeholder="0" className={`grow text-right text-2xl font-bold text-secondary_800`}/>
      </label>
    </div>
  );
};

export default Input;
