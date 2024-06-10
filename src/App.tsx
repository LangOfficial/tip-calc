
import { useState, useEffect } from "react";
import Input from "./components/Input";
import Tip from "./components/Tip";
import Custom from "./components/Custom";
import SummaryDetail from "./components/SummaryDetail";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [bill, setBill] = useState('');
  const [people, setPeople] = useState(0);
  const [billError, setBillError] = useState('');
  const [peopleError, setPeopleError] = useState('');
  const [custom, setCustom] = useState('');
  const [tip, setTip] = useState('');
  const [total, setTotal] = useState('');
  const tipPercentages = [5, 10, 15, 25, 50];

  //handle validation functions and pass them (check card validation for examples and pass the errors to (this is more like validate as they type))
  function handleBillChange(e: React.ChangeEvent<HTMLInputElement>)  {
    const value = e.target.value;
    const moneyRegex = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;
    if (moneyRegex.test(value)) {
      setBillError('');
      setBill(value);
    } else if (value.length === 0) {
      //when user tries to delete all the way
      setBill('');
    }
    if (value.includes('.') && value.split('.')[1].length === 1) {
      //Only error we need to notify the user since regex covers everything else
      setBillError('Two digits behind the decimal!')
    }
  }

  function handlePeopleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    if (Number(value) > 0) {
      setPeople(value);
      setPeopleError('');
    }
    else if (value === 0) {
      setPeopleError("Can't be zero!")
      setPeople(0)
    }
  }

  useEffect(() => {
    const localBill = Number(bill);
    console.log("IOHFEO")
    console.log(localBill);
    console.log(people);
    console.log(selectedIndex)
    console.log("IOHFEO")
    if (localBill && people && selectedIndex <= 4) {
      const localTip = localBill * (tipPercentages[selectedIndex] / 100);
      setTip((Math.floor(localTip / people * 100) / 100).toString());
      setTotal((Math.floor((localBill / people + Number(localTip / people)) * 100) / 100).toString());
    } else if (localBill && people && custom){
      const localTip = (localBill * Number(custom) / 100);
      setTip((Math.floor(localTip / people * 100) / 100).toString());
      setTotal((Math.floor((localBill / people + Number(localTip / people)) * 100) / 100).toString());
    }
  }, [bill, selectedIndex, people, custom])

  function handleCustomChange(e: React.ChangeEvent<HTMLInputElement>)  {
    const value = e.target.value;
    if (Number(value) >= 0 && Number(value) <= 100) {
      setCustom(value.toString());
    }
    else {
      setCustom('');
    }
  }

  function handleReset() {
    setSelectedIndex(-1);
    setBill('');
    setPeople(0);
    setBillError('');
    setPeopleError('');
    setCustom('');
    setTip('');
    setTotal('');
  }
  return (
    <main className="">
      <h1 className="flex flex-col items-center mt-12 mb-10 text-3xl">
        <p className="title mb-3">Spli</p>
        <p className="title">tter</p>
      </h1>
      <section className="halfxl:flex justify-center">
        <section className="bg-secondary_100 rounded-t-[2rem] p-8 halfxl:rounded-b-[2rem] halfxl:grid halfxl:grid-cols-2 halfxl:gap-x-10 halfxl:w-[80%]">
          <article>
            <Input labelText="Bill" val={bill} setVal={handleBillChange} error={billError}/>
            <p className="text-base text-secondary_700 font-bold mt-10 mb-5">Select Tip %</p>
            <div className="mb-10">
              <div className="grid grid-cols-2 gap-5 halfxl:grid-cols-3">
                {tipPercentages.map((value, index) => (
                  <Tip key={index} text={value} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} index={index}/>
                ))}
                <Custom index={5} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex} setVal={handleCustomChange} val={custom} />
              </div>
            </div>
            <Input labelText="Number of People" val={people} setVal={handlePeopleChange} error={peopleError}/>
          </article>
          <article className="bg-secondary_800 px-7 py-8 rounded-2xl mt-10 halfxl:mt-0 flex flex-col justify-between">
            <div>
              <SummaryDetail detailName="Tip Amount" money={tip} />
              <SummaryDetail detailName="Total" money={total} />
            </div>
            <button onClick={handleReset} className="w-full bg-primary font-bold py-3 text-2xl rounded-md mt-2 text-secondary_800 hover:bg-secondary_300 duration-200 ease-in">RESET</button>
          </article>
        </section>
      </section>
    </main>
  )
}

export default App
