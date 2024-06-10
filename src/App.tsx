
import Input from "./components/Input";
import Tip from "./components/Tip";

function App() {
  return (
    <main className="text-3xl ">
      <h1 className="flex flex-col items-center mt-14">
        <p className="title mb-3">Spli</p>
        <p className="title">tter</p>
      </h1>
      <section className="bg-secondary_100 rounded-t-[2rem] p-8">
        <Input labelText="Bill"/>
      </section>
    </main>
  )
}

export default App
