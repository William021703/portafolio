import { useEffect, useState } from "react";
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import "./index.css";

function App() {
  const [name, setName] = useState("");
  const [sobreMi, setSobreMi] = useState(null);
  const [opacity, setOpacity] = useState(false);
  const [proyectos] = useState([
    {
      nombre: "Prestamos",
      img: "/prestamos.png",
      GitHub: "https://github.com/william021703/prestamos",
      link: "https://luxury-capybara-811db0.netlify.app/",
    },
    {
      nombre: "todolist",
      img: "/todolist.png",
      GitHub: "https://github.com/William021703/ToDOList-REACT",
      link: "https://todolist0203.netlify.app/",
    },
    {
      nombre: "tienda",
      img: "/tienda.png",
      GitHub: "https://github.com/William021703/",
      link: "https://proyecto-tienda-fullstack.netlify.app/",
    },
  ]);

  useEffect(() => {
    const aboutMe = `Web developer with experience building full-stack applications using technologies such as JavaScript, React, Node.js, and MySQL. I specialize in creating dynamic user interfaces, functional backends, and efficient databases. I have a problem-solving mindset, strong teamwork skills, and a commitment to continuous learning. Fluent in English for remote or international work`;
    setTimeout(() => {
      setSobreMi(aboutMe);
      setOpacity(true);
    }, 3000);
  }, []);

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
    <div className="bg-cyan-700 w-full min-h-screen flex flex-col items-center px-4">
      <div
        className="fixed top-2 flex gap-6 bg-cyan-500 w-full max-w-md h-12 rounded-xl z-10 
      items-center justify-around shadow-md text-white transition-colors hover:bg-cyan-600 duration-300"
      >
        <a
          className="hover:scale-110 transition duration-300 cursor-pointer"
          href="#about"
        >
          About me
        </a>
        <a
          className="hover:scale-110 transition duration-300 cursor-pointer"
          href="#Proyects"
        >
          Projects
        </a>
        <a
          className="hover:scale-110 transition duration-300 cursor-pointer"
          href="#contacts"
        >
          Contacts
        </a>
      </div>

      <div className="mt-40 mb-10 text-center">
        <h1 className="text-white text-5xl sm:text-7xl font-bold">{name}</h1>
      </div>

      <div
        id="about"
        className={`transition-all duration-[2000ms] ease-in-out p-8 bg-cyan-800 rounded-xl 
          shadow-xl max-w-3xl text-white mb-12 ${
            opacity ? "opacity-100" : "opacity-0"
          } hover:scale-110`}
      >
        <p className="text-lg leading-relaxed">{sobreMi}</p>
      </div>

      <TbArrowBigDownLinesFilled className=" w-16 h-16 text-slate-200 animate-bounce mb-4" />

      <div className="bg-sky-600 p-6 rounded-xl text-white w-full max-w-lg mb-10 text-lg shadow-md space-y-2 relative">
        <p>
          <strong>Languages:</strong> JavaScript
        </p>
        <p>
          <strong>Frameworks:</strong> React, Node
        </p>
        <p>
          <strong>Databases:</strong> MySQL
        </p>
      </div>

      <div
        id="Proyects"
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl p-4"
      >
        {proyectos.map((proyecto, key) => (
          <div
            key={key}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:scale-110 duration-300 ease-in-out "
          >
            <a href={proyecto.GitHub} target="_blank">
              <img
                src={proyecto.img}
                alt={proyecto.nombre}
                className="w-full h-40 object-cover cursor-pointer"
              />
            </a>
            <div className="p-2 text-center font-semibold transition-all hover:bg-cyan-600 duration-300 ease-initial">
              <a href={proyecto.link} target="_blank">
                <h1 className="cursor-pointer transition-all hover:scale-110 duration-300 ease-initial">
                  {proyecto.nombre}
                </h1>
              </a>
            </div>
          </div>
        ))}
      </div>

      <footer
        id="contacts"
        className="bg-cyan-900 mt-16 p-6 rounded-xl text-white text-center space-y-4 shadow-lg"
      >
        <h2 className="text-2xl font-bold">Contacts</h2>
        <p>morillow052@gmail.com</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/william021703"
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-300 hover:scale-110 transition duration-300 cursor-pointer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/william-morillo-4a483a270"
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-300 hover:scale-110 transition duration-300 cursor-pointer"
          >
            LinkedIn
          </a>
          <a
            href="/PORTAFOLIO/miPortafolio/public/William_cv_updated.pdf"
            download
            className="hover:text-amber-300 hover:scale-110 transition duration-300 cursor-pointer"
          >
            Download CV
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
