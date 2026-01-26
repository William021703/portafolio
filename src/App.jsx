import { useEffect, useState } from "react";
import { useRef } from "react";

import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import "./index.css";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaCloud,
  FaDocker,
} from "react-icons/fa";

function App() {
  const [name, setName] = useState("");
  const [sobreMi, setSobreMi] = useState(null);
  const [opacity, setOpacity] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState("en");
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const texts = {
    en: {
      about: "About Me",
      projects: "Projects",
      experience: "My Experience",
      contacts: "Contacts",
      download: "Download CV",
      language: "Language",
      frameworks: "Frameworks",
      databases: "Databases",
      version: "Version Control",
      deploy: "Deployment Platforms",
      container: "Containerization",
      contactTitle: "Contacts",
    },
    es: {
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Mi experiencia",
      contacts: "Contactos",
      download: "Descargar CV",
      language: "Lenguaje",
      frameworks: "Frameworks",
      databases: "Bases de datos",
      version: "Control de versiones",
      deploy: "Plataformas de despliegue",
      container: "Contenedores",
      contactTitle: "Contactos",
    },
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleLanguage = () => {
    setLang(lang === "en" ? "es" : "en");
  };

  const [proyectos] = useState([
    {
      nombre: "Prestamos",
      img: "/prestamos.png",
      GitHub: "https://github.com/william021703/prestamos",
      link: "https://prismatic-salamander-dea14c.netlify.app/",
      description: {
        en: "Loan management web application built with modern technologies.",
        es: "Aplicación web para gestión de préstamos desarrollada con tecnologías modernas.",
      },
    },

    {
      nombre: "Tienda",
      img: "/tienda.png",
      GitHub: "https://github.com/William021703/TiendaFrontend",
      link: "https://proyecto-tienda-fullstack.netlify.app/",
      description: {
        en: "E-commerce platform with full stack architecture and responsive design.",
        es: "Plataforma e-commerce con arquitectura full stack y diseño responsivo.",
      },
    },
  ]);

  useEffect(() => {
    const aboutMeEn = `I am a passionate full-stack developer with experience in 
    building scalable web applications. With a solid foundation in both frontend 
    and backend technologies, I create seamless user experiences supported by a robust 
    server-side architecture. My approach combines clean coding practices with creative problem-solving 
    to deliver high-quality solutions.`;

    const aboutMeEs = `Soy un desarrollador full-stack apasionado con experiencia
     en la construcción de aplicaciones web escalables. Con una base sólida tanto en 
     tecnologías frontend como backend, creo experiencias de usuario fluidas respaldadas 
     por una arquitectura robusta del lado del servidor. Mi enfoque combina prácticas de código 
     limpio con una resolución creativa de problemas para entregar soluciones de alta calidad.

`;

    setSobreMi(lang === "en" ? aboutMeEn : aboutMeEs);
    setOpacity(true);
  }, [lang]);

  useEffect(() => {
    const nombre =
      lang === "en" ? "I'm William Morillo" : "Soy William Morillo";

    let agregarNombre = "";

    for (let i = 0; i < nombre.length; i++) {
      setTimeout(() => {
        agregarNombre += nombre[i];
        setName(agregarNombre);
      }, i * 150);
    }
  }, [lang]); // 👈 importante: depende del idioma

  return (
    <div
      className={`w-full min-h-screen flex flex-col items-center px-4 transition-colors duration-500
  ${darkMode ? "bg-slate-900 text-white" : "bg-slate-100 text-black"}`}
    >
      <nav
        className={`fixed top-0 w-full backdrop-blur-md z-50 transition-colors
${darkMode ? "bg-black/60" : "bg-white/70"}`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          <div className="flex gap-8">
            <a href="#about" className="hover:text-cyan-400 transition">
              {texts[lang].about}
            </a>
            <a href="#Projects" className="hover:text-cyan-400 transition">
              {texts[lang].projects}
            </a>
            <a href="#contacts" className="hover:text-cyan-400 transition">
              {texts[lang].contacts}
            </a>
          </div>

          <div className="flex gap-4 items-center">
            <button
              onClick={toggleLanguage}
              className="border px-3 py-1 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>

            <button
              onClick={toggleTheme}
              className="border px-3 py-1 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

            <a
              href="/portafolio.pdf"
              download
              className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              {texts[lang].download}
            </a>
          </div>
        </div>
      </nav>
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex justify-center items-center px-6 overflow-hidden">
        {/* Background */}
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900"
              : "bg-gradient-to-br from-slate-200 via-cyan-200 to-slate-100"
          }`}
        />

        <div className="relative z-10 max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div className="space-y-6 animate-fadeUp">
            <h1
              className={`text-5xl md:text-7xl font-extrabold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              {name}
            </h1>

            <h2
              className={`text-xl md:text-2xl font-semibold uppercase tracking-widest ${
                darkMode ? "text-cyan-400" : "text-cyan-700"
              }`}
            >
              {lang === "en"
                ? "Full Stack Developer"
                : "Desarrollador Full Stack"}
            </h2>

            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {lang === "en"
                ? "Building modern web and mobile applications with clean code, performance and great user experience."
                : "Construyendo aplicaciones web y móviles modernas con código limpio, alto rendimiento y excelente experiencia de usuario."}
            </p>

            <a
              href="#about"
              className={`inline-block px-8 py-3 rounded-xl font-semibold transition ${
                darkMode
                  ? "bg-cyan-500 text-black hover:bg-cyan-400"
                  : "bg-cyan-600 text-white hover:bg-cyan-500"
              }`}
            >
              {texts[lang].experience}
            </a>
          </div>

          {/* Right (glass card) */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-xl animate-fadeUp">
            <p
              className={`text-lg leading-relaxed ${
                darkMode ? "text-slate-200" : "text-slate-800"
              }`}
            >
              {lang === "en"
                ? "Turning complex challenges into elegant and efficient solutions."
                : "Convirtiendo desafíos complejos en soluciones elegantes y eficientes."}
            </p>
          </div>
        </div>

        {/* Arrow */}
        <div
          className={`absolute bottom-8 animate-bounce ${
            darkMode ? "text-cyan-400" : "text-cyan-700"
          }`}
        >
          <TbArrowBigDownLinesFilled size={40} />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="min-h-screen flex justify-center items-center px-6 py-20"
      >
        <article className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
          {/* About Card */}
          <div
            className={`p-10 rounded-2xl shadow-2xl transition-all duration-1000
        ${
          darkMode
            ? "bg-gradient-to-br from-cyan-700 to-cyan-900 text-white"
            : "bg-gradient-to-br from-cyan-200 to-cyan-400 text-slate-900"
        }
        ${opacity ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
          >
            <header className="mb-6 text-center">
              <h2 className="text-4xl font-bold">{texts[lang].about}</h2>
              <div className="w-24 h-1 bg-cyan-300 mx-auto mt-4 rounded-full" />
            </header>

            <p className="text-lg md:text-xl leading-relaxed text-center mb-6">
              {lang === "en"
                ? "I am a Full Stack Developer passionate about building modern and scalable applications. I focus on writing clean, maintainable code and creating solutions that provide real value to users and organizations. My background in customer service has strengthened my communication skills and my ability to understand user needs, allowing me to deliver software with both technical quality and strong user experience."
                : "Soy un Desarrollador Full Stack apasionado por crear aplicaciones modernas y escalables. Me enfoco en escribir código limpio y mantenible, desarrollando soluciones que aporten valor real tanto a los usuarios como a las organizaciones. Mi experiencia en servicio al cliente ha fortalecido mis habilidades de comunicación y mi capacidad para comprender las necesidades del usuario, lo que me permite entregar software con alta calidad técnica y excelente experiencia de usuario."}
            </p>

            <ul
              className={`space-y-3 text-center ${
                darkMode ? "text-slate-100" : "text-slate-800"
              }`}
            >
              <li>
                ✔{" "}
                {lang === "en"
                  ? "Clean Code & Best Practices"
                  : "Código limpio y buenas prácticas"}
              </li>
              <li>
                ✔{" "}
                {lang === "en"
                  ? "Full Stack Development"
                  : "Desarrollo Full Stack"}
              </li>
              <li>
                ✔{" "}
                {lang === "en"
                  ? "Problem Solving Mindset"
                  : "Mentalidad orientada a la resolución de problemas"}
              </li>
              <li>
                ✔{" "}
                {lang === "en" ? "Continuous Learning" : "Aprendizaje continuo"}
              </li>
            </ul>
          </div>

          {/* Philosophy Card */}
          <aside className="bg-white/10 backdrop-blur-xl rounded-2xl p-10 shadow-xl flex flex-col justify-center text-center space-y-4">
            <h3
              className={`text-2xl font-semibold ${
                darkMode ? "text-cyan-300" : "text-cyan-700"
              }`}
            >
              {lang === "en" ? "My Philosophy" : "Mi filosofía"}
            </h3>

            <p
              className={`text-lg md:text-xl font-medium leading-relaxed ${
                darkMode ? "text-cyan-100" : "text-slate-700"
              }`}
            >
              {lang === "en"
                ? "My philosophy is based on commitment, discipline, and continuous improvement. I strive to contribute positively to every company I work with by delivering high-quality solutions, meeting deadlines, and constantly refining my skills. I believe that real growth comes from effort, responsibility, and the desire to create technology that supports business goals and long-term success."
                : "Mi filosofía se basa en el compromiso, la disciplina y la mejora continua. Me esfuerzo por contribuir de forma positiva a cada empresa con la que colaboro, entregando soluciones de alta calidad, cumpliendo objetivos y fortaleciendo constantemente mis habilidades. Creo que el verdadero crecimiento surge del esfuerzo, la responsabilidad y el deseo de crear tecnología que impulse los objetivos del negocio y su éxito a largo plazo."}
            </p>
          </aside>
        </article>
      </section>

      <TbArrowBigDownLinesFilled className=" w-16 h-16 text-slate-200 animate-bounce mb-4" />

      <section className="min-h-screen flex justify-center items-center px-6 py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-4xl font-bold text-center mb-10 text-cyan-400">
            {lang === "en" ? "Tech Stack" : "Tecnologías"}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Language */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl text-center space-y-3 hover:scale-105 transition">
              <FaJs size={40} className="mx-auto text-yellow-400" />
              <h3 className="font-semibold">{texts[lang].language}</h3>
              <p>JavaScript · TypeScript</p>
            </div>

            {/* Frameworks */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl text-center space-y-3 hover:scale-105 transition">
              <FaReact size={40} className="mx-auto text-cyan-400" />
              <h3 className="font-semibold">{texts[lang].frameworks}</h3>
              <p>React · React Native · Node.js · Playwright</p>
            </div>

            {/* Databases */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl text-center space-y-3 hover:scale-105 transition">
              <FaDatabase size={40} className="mx-auto text-green-400" />
              <h3 className="font-semibold">{texts[lang].databases}</h3>
              <p>MySQL · PostgreSQL · MongoDB</p>
            </div>

            {/* Version Control */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl text-center space-y-3 hover:scale-105 transition">
              <FaGithub size={40} className="mx-auto text-white" />
              <h3 className="font-semibold">{texts[lang].version}</h3>
              <p>Git · GitHub</p>
            </div>

            {/* Deploy */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl text-center space-y-3 hover:scale-105 transition">
              <FaCloud size={40} className="mx-auto text-blue-400" />
              <h3 className="font-semibold">{texts[lang].deploy}</h3>
              <p>Netlify · Railway</p>
            </div>

            {/* Container */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-xl text-center space-y-3 hover:scale-105 transition">
              <FaDocker size={40} className="mx-auto text-sky-400" />
              <h3 className="font-semibold">{texts[lang].container}</h3>
              <p>Docker</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Projects"
        className={`min-h-screen py-20 px-6 transition-colors duration-500 `}
      >
        <div className="max-w-6xl mx-auto space-y-12 relative">
          {/* Title */}
          <header className="text-center">
            <h2
              className={`text-4xl font-bold ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              {lang === "en" ? "Projects" : "Proyectos"}
            </h2>

            <p
              className={`mt-2 text-lg ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {lang === "en"
                ? "Navigate through my projects."
                : "Navega por mis proyectos."}
            </p>
          </header>

          {/* Left Button */}
          {showLeft && (
            <button
              onClick={scrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-xl transition-all duration-500 ease-in-out hover:scale-110 ${
                darkMode
                  ? "bg-slate-800 text-white hover:bg-cyan-600"
                  : "bg-white text-slate-800 hover:bg-cyan-500 hover:text-white"
              }`}
            >
              ◀
            </button>
          )}

          {/* Right Button */}
          {showRight && (
            <button
              onClick={scrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full shadow-xl transition-all duration-500 ease-in-out hover:scale-110 ${
                darkMode
                  ? "bg-slate-800 text-white hover:bg-cyan-600"
                  : "bg-white text-slate-800 hover:bg-cyan-500 hover:text-white"
              }`}
            >
              ▶
            </button>
          )}

          {/* Carousel */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          >
            {proyectos.map((proyecto, key) => (
              <div
                key={key}
                className={`flex-shrink-0 w-[280px] md:w-[320px] rounded-2xl overflow-hidden shadow-xl transition transform hover:-translate-y-2 ${
                  darkMode ? "bg-slate-900" : "bg-white"
                }`}
              >
                {/* Image */}
                <div className="relative group">
                  <img
                    src={proyecto.img}
                    alt={proyecto.nombre}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                    <a
                      href={proyecto.link}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
                    >
                      Demo
                    </a>

                    <a
                      href={proyecto.GitHub}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition"
                    >
                      Code
                    </a>
                  </div>
                </div>

                <div className="p-5 text-center space-y-2">
                  <h3
                    className={`text-xl font-semibold ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {proyecto.nombre}
                  </h3>

                  <p
                    className={`text-sm ${
                      darkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {proyecto.description[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contacts"
        className={`relative min-h-screen flex justify-center items-center px-6 transition-colors duration-500 `}
      >
        <footer
          className={`max-w-3xl w-full rounded-2xl p-12 shadow-2xl text-center space-y-6 ${
            darkMode ? "bg-slate-900/80" : "bg-white"
          }`}
        >
          <h2
            className={`text-4xl font-bold tracking-wide ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {lang === "en" ? "Contact Me" : "Contáctame"}
          </h2>

          <p
            className={`text-lg leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {lang === "en"
              ? "I am open to new opportunities, collaborations, and professional challenges. Feel free to contact me for projects or job opportunities."
              : "Estoy abierto a nuevas oportunidades, colaboraciones y retos profesionales. Puedes contactarme para proyectos o propuestas laborales."}
          </p>

          {/* Email */}
          <p
            className={`text-xl font-semibold ${
              darkMode ? "text-cyan-400" : "text-cyan-700"
            }`}
          >
            📧 morillow052@gmail.com
          </p>

          {/* Phone */}
          <p
            className={`text-xl font-semibold ${
              darkMode ? "text-cyan-400" : "text-cyan-700"
            }`}
          >
            📞 +1 (849) 283-5203
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-10 text-lg font-medium pt-4">
            <a
              href="https://github.com/william021703"
              target="_blank"
              rel="noreferrer"
              className={`transition transform hover:scale-110 ${
                darkMode
                  ? "text-white hover:text-cyan-300"
                  : "text-slate-800 hover:text-cyan-600"
              }`}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/william-morillo-4a483a270/"
              target="_blank"
              rel="noreferrer"
              className={`transition transform hover:scale-110 ${
                darkMode
                  ? "text-white hover:text-cyan-300"
                  : "text-slate-800 hover:text-cyan-600"
              }`}
            >
              LinkedIn
            </a>
          </div>

          <div
            className={`pt-6 border-t ${
              darkMode ? "border-slate-600/40" : "border-slate-300/40"
            }`}
          >
            <p
              className={`text-sm ${
                darkMode ? "text-slate-400" : "text-slate-600"
              }`}
            >
              © {new Date().getFullYear()} William Morillo — Full Stack
              Developer
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
