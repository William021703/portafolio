import { useEffect, useState } from "react";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";

import "./index.css";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    const nombre = `I'm WiLliam MoRiLlO`;
    let agregarNombre = "";
    for (let i = 0; i < nombre.length; i++) {
      setTimeout(() => {
        agregarNombre = agregarNombre + nombre[i];
        setName(agregarNombre);
      }, i * 500);
    }
  }, []);
  console.log(name);
  return (
    <>
      <div className="bg-stone-900 w-full h-screen flex flex-col items-center relative">
        <div className="fixed flex flex-row justify-between bg-slate-100 w-60 h-16 my-1 ">
          <nav>About me</nav>
          <nav>My Proyects</nav>
          <nav>Contacts</nav>
        </div>
        <div className="min-w-40 min-h-40 my-12 flex flex-col">
          <h1 className="text-stone-100 text-8xl ">{name}</h1>
        </div>
        <div>
          <h2 className="text-stone-100 text-2xl ">
            Web developer with experience building full- stack applications
            using technologies such as JavaScript, React, Node.js, and MySQL. I
            specialize in creating dynamic user interfaces, functional backends,
            and efficient databases. I have a problem-solving mindset, strong
            teamwork skills, and a commitment to continuous learning. Fluent in
            English for remote or international work
          </h2>
        </div>
        <div>
          <span>
            <TbArrowBigDownLinesFilled className="bg-amber-50 w-60 h-60 animate-bounce text-slate-400" />
          </span>
        </div>
        <div>
          <h1>ProYectS</h1>
          <div>
            <img src="/prestamos.png" alt="prestamos" />
            <img src="/tienda.png" alt="tienda" />
            <img src="/todolist.png" alt="todolist" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
