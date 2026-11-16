// Edita solo este archivo para actualizar tu CV.
export const profile = {
  name: "David Alcivar",
  role: "Desarrollador de software",
  tagline: "Web, backend, APIs y software a medida. Convierto ideas en sistemas que funcionan.",
  about:
    "Me apasionan la programación y la tecnología. Vengo del soporte técnico, así que entiendo al cliente que no es técnico: escucho primero, explico claro y entrego soluciones confiables. Me inspira Spider-Man: afrontar los retos y no rendirme.",
  location: "Ecuador",
  photo: "/foto.jpeg", // coloca tu foto en /public/foto.jpeg
  cv: "/David_Alcivar_Portafolio.pdf",
  links: {
    Fiverr: "https://www.fiverr.com/jmdavid07",
    GitHub: "", // ej: "https://github.com/tu-usuario"
    LinkedIn: "", // ej: "https://linkedin.com/in/tu-usuario"
    Correo: "", // ej: "mailto:tu@correo.com"
  },
};

export const skills = [
  { group: "Lenguajes", items: ["JavaScript", "TypeScript", "Python"] },
  { group: "Frameworks", items: ["React", "Node.js", "Laravel"] },
  { group: "Datos", items: ["PostgreSQL", "MySQL", "Prisma ORM"] },
  { group: "Herramientas", items: ["Git", "GitHub", "Vercel", "VS Code"] },
];

export const services = [
  ["Desarrollo web", "Sitios y aplicaciones con React, Node.js y Laravel."],
  ["Backend y APIs", "APIs y lógica de negocio con Node.js y Python."],
  ["Bases de datos", "Diseño y gestión en PostgreSQL y MySQL con Prisma."],
  ["Software a medida", "Sistemas de gestión: inventario, préstamos, pedidos."],
];

export const projects = [
  {
    title: "Biblioteca con préstamo de libros",
    text: "Registro de libros y usuarios, control de préstamos y devoluciones sobre una base de datos relacional.",
    tag: "Proyecto académico",
  },
  {
    title: "Sistema de pedidos para tiendas",
    text: "Gestión de productos, clientes y pedidos, con el flujo completo de compra y seguimiento.",
    tag: "Proyecto académico",
  },
];

export const timeline = [
  {
    when: "Actualidad",
    title: "Tecnología en Desarrollo de Software",
    where: "Instituto, segundo ciclo",
    text: "Programación, bases de datos, desarrollo web y backend. Busco proyectos reales para reforzar mis bases.",
  },
  {
    when: "Antes",
    title: "Instalación y soporte técnico",
    where: "Empresa de servicios de internet",
    text: "Instalación del servicio y atención técnica a clientes. Resolución de problemas con comunicación clara.",
  },
];
