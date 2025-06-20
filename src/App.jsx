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
          <div className="min-h-52 bg-sky-500 min-w-72">
            <h1>
              <span>"Languages"</span>: <span>["JavaScript"]</span>
              <br />
            </h1>
            <h1>
              <span>"Frameworks"</span>: <span>["React", "Node"]</span>
              <br />
            </h1>
            <h1>
              <span>"Databases"</span>: <span>["MySQL"]</span>
              <br />
            </h1>
          </div>

          <div>
            <div>
              <img src="/prestamos.png" alt="prestamos" />
              <img src="/tienda.png" alt="tienda" />
              <img src="/todolist.png" alt="todolist" />
            </div>
          </div>
          <div>
            <div>
              <h1>Contacts</h1>
            </div>
            <div>
              <h1>morillow052@gmail.com</h1>
            </div>
            <div>
              <div>
                <h1>
                  <a
                    href="https://www.github.com/william021703/"
                    target="_blank"
                  >
                    <span>Github</span>
                  </a>
                </h1>
              </div>
              <div>
                <h1>
                  <a
                    href="https://www.linkedin.com/in/william-morillo-4a483a270"
                    target="_blank"
                  >
                    <span>linkedin</span>
                  </a>
                </h1>
              </div>
              <div>
                <h1>
                  <a
                    href="/PORTAFOLIO/miPortafolio/public/William_cv_updated.pdf"
                    download
                  >
                    <span> download CV</span>
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
