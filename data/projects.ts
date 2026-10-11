// // // /** Change this to your GitHub username; every "View Code" link updates automatically. */
// // // const GITHUB_USER = "your-username";

// // // export type ProjectCategory = "Web Apps" | "AI Tools";

// // // export type ProjectFilter = "All" | ProjectCategory;

// // // export interface Project {
// // //   id: string;
// // //   title: string;
// // //   /** Optional Arabic display name */
// // //   titleAr?: string;
// // //   category: ProjectCategory;
// // //   description: string;
// // //   stack: string[];
// // //   highlights: string[];
// // //   /** Longer write-up shown in the details modal */
// // //   overview: string;
// // //   architectureNotes: string[];
// // //   liveUrl: string;
// // //   githubUrl: string;
// // //   /** Tailwind gradient classes for the image placeholder */
// // //   gradient: string;
// // // }

// // // export const PROJECT_FILTERS: ProjectFilter[] = ["All", "Web Apps", "AI Tools"];

// // // export const projects: Project[] = [
// // //   {
// // //     id: "tabeebak",
// // //     title: "Tabeebak",
// // //     titleAr: "طبيبك",
// // //     category: "Web Apps",
// // //     description:
// // //       "Integrated medical center management platform for booking appointments and handling patient records.",
// // //     stack: [
// // //       "React",
// // //       "Laravel",
// // //       "Tailwind CSS",
// // //       "Redux Toolkit",
// // //       "Axios",
// // //       "REST API",
// // //     ],
// // //     highlights: [
// // //       "Responsive UI design",
// // //       "Seamless REST API integration",
// // //       "Client-side state management",
// // //     ],
// // //     overview:
// // //       "Tabeebak brings appointment booking and patient records for a medical center into one interface. Patients find a slot and book it, while staff manage schedules and records from the same application, on desktop or phone.",
// // //     architectureNotes: [
// // //       "React front end talks to a Laravel backend through a REST API, with all requests going through a single configured Axios instance.",
// // //       "Redux Toolkit slices hold appointments, patients, and auth state, so lists and forms stay in sync without refetching on every screen.",
// // //       "Layouts are built mobile-first with Tailwind CSS and scale up to dense table views for staff.",
// // //       "Loading, empty, and error states are handled per request, so a failed call never leaves a blank screen.",
// // //     ],
// // //     liveUrl: "https://example.com",
// // //     githubUrl: `https://github.com/${GITHUB_USER}/tabeebak`,
// // //     gradient: "from-cyan-500/40 via-indigo-500/20 to-zinc-900",
// // //   },
// // //   {
// // //     id: "codementor-ai",
// // //     title: "CodeMentor AI",
// // //     category: "AI Tools",
// // //     description:
// // //       "AI-powered interactive educational tool for code analysis and developer assistance.",
// // //     stack: [
// // //       "React",
// // //       "TypeScript",
// // //       "Vite",
// // //       "Monaco Editor",
// // //       "Google Gemini API",
// // //       "Tailwind CSS",
// // //     ],
// // //     highlights: [
// // //       "Embedded Monaco code editor",
// // //       "Real-time AI code analysis",
// // //       "Deployed on Netlify",
// // //     ],
// // //     overview:
// // //       "CodeMentor AI lets learners write or paste code in a full editor and get explanations, bug findings, and improvement suggestions back right beside it. It is built to teach, not only to fix.",
// // //     architectureNotes: [
// // //       "Monaco Editor is embedded as a controlled React component, with the editor content and language kept in typed state.",
// // //       "Code is sent to the Google Gemini API with a structured prompt, and the response is parsed into typed sections (explanation, issues, suggestions).",
// // //       "Requests are debounced and cancelable, so typing never queues stale analyses.",
// // //       "Built with Vite and TypeScript, and deployed on Netlify.",
// // //     ],
// // //     liveUrl: "https://example.com",
// // //     githubUrl: `https://github.com/${GITHUB_USER}/codementor-ai`,
// // //     gradient: "from-violet-500/40 via-indigo-500/20 to-zinc-900",
// // //   },
// // //   {
// // //     id: "masar-syria",
// // //     title: "MASAR SYRIA",
// // //     titleAr: "مسار سوريا",
// // //     category: "Web Apps",
// // //     description:
// // //       "Smart tourism platform providing interactive routes and guide information for travelers.",
// // //     stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel AI SDK"],
// // //     highlights: [
// // //       "Interactive route guides",
// // //       "SSR/SEO optimized with Next.js",
// // //       "Deployed on Vercel",
// // //     ],
// // //     overview:
// // //       "MASAR SYRIA helps travelers plan trips with interactive routes and practical guide information for each destination. It was built as a graduation project and scored 94/100.",
// // //     architectureNotes: [
// // //       "Next.js App Router renders destination and route pages on the server, which keeps them fast and search-friendly.",
// // //       "Per-page metadata and semantic markup support SEO for every destination.",
// // //       "The Vercel AI SDK powers the assistant that answers traveler questions inside the app.",
// // //       "Typed data models for routes and places are shared between server and client components.",
// // //     ],
// // //     liveUrl: "https://example.com",
// // //     githubUrl: `https://github.com/${GITHUB_USER}/masar-syria`,
// // //     gradient: "from-cyan-500/30 via-violet-500/20 to-zinc-900",
// // //   },
// // // ];


// // export type ProjectCategory = "Web Apps" | "AI Tools";

// // export type ProjectFilter = "All" | ProjectCategory;

// // export interface Project {
// //   id: string;
// //   title: string;
// //   /** Optional Arabic display name */
// //   titleAr?: string;
// //   category: ProjectCategory;
// //   description: string;
// //   stack: string[];
// //   highlights: string[];
// //   /** Longer write-up shown in the details modal */
// //   overview: string;
// //   architectureNotes: string[];
// //   /** Buttons are only rendered when a real URL exists. */
// //   liveUrl?: string;
// //   /** Leave undefined for private projects; the card shows "Private repo". */
// //   githubUrl?: string;
// //   /** Tailwind gradient classes for the image placeholder */
// //   gradient: string;
// // }

// // export const PROJECT_FILTERS: ProjectFilter[] = ["All", "Web Apps", "AI Tools"];

// // export const projects: Project[] = [
// //   {
// //     id: "tabeebak",
// //     title: "Tabeebak",
// //     titleAr: "طبيبك",
// //     category: "Web Apps",
// //     description:
// //       "Integrated medical center management platform for booking appointments and handling patient records.",
// //     stack: [
// //       "React",
// //       "Laravel",
// //       "Tailwind CSS",
// //       "Redux Toolkit",
// //       "Axios",
// //       "REST API",
// //     ],
// //     highlights: [
// //       "Responsive UI design",
// //       "Seamless REST API integration",
// //       "Client-side state management",
// //     ],
// //     overview:
// //       "Tabeebak brings appointment booking and patient records for a medical center into one interface, with a React front end working against a Laravel backend.",
// //     architectureNotes: [
// //       "React front end consumes a Laravel REST API through Axios.",
// //       "Redux Toolkit manages client-side state for appointments and records.",
// //       "Responsive layouts are built with Tailwind CSS.",
// //     ],
// //     // Repo "medical-center" returned 404 (private or renamed). Add the URL once it is public:
// //     githubUrl: "https://github.com/ahmadibraheem555/medical-center",
// //     gradient: "from-cyan-500/40 via-indigo-500/20 to-zinc-900",
// //   },
// //   {
// //     id: "codementor-ai",
// //     title: "CodeMentor AI",
// //     category: "AI Tools",
// //     description:
// //       "AI-powered interactive educational tool for code analysis and developer assistance.",
// //     stack: [
// //       "React",
// //       "TypeScript",
// //       "Vite",
// //       "Monaco Editor",
// //       "Google Gemini API",
// //     ],
// //     highlights: [
// //       "Embedded Monaco code editor",
// //       "AI code analysis with the Google GenAI SDK",
// //       "Typed React 19 codebase built with Vite",
// //     ],
// //     overview:
// //       "CodeMentor AI lets learners write or paste code into a full editor and get AI-generated analysis and help alongside it. It is built to teach, not only to fix.",
// //     architectureNotes: [
// //       "The editor is Monaco, embedded in React through @monaco-editor/react.",
// //       "AI features use Google's @google/genai SDK.",
// //       "React 19 with TypeScript, built and served with Vite (type-checked build via tsc -b).",
// //     ],
// //     githubUrl: "https://github.com/ahmadibraheem555/CodeMentor-AI",
// //     gradient: "from-violet-500/40 via-indigo-500/20 to-zinc-900",
// //   },
// //   {
// //     id: "ai-trip-planner",
// //     title: "AI Trip Planner",
// //     category: "AI Tools",
// //     description:
// //       "Trip planning web app built with React 19 and TypeScript on Vite.",
// //     stack: ["React", "TypeScript", "Vite"],
// //     highlights: [
// //       "React 19 with TypeScript",
// //       "Vite build tooling with ESLint",
// //     ],
// //     overview:
// //       "A trip planning web app built with React and TypeScript, designed around planning journeys with AI assistance.",
// //     architectureNotes: [
// //       "React 19 and TypeScript, bundled with Vite.",
// //       "ESLint with the React Hooks rules for code quality.",
// //     ],
// //     githubUrl: "https://github.com/ahmadibraheem555/ai-trip-planner",
// //     gradient: "from-cyan-500/30 via-violet-500/20 to-zinc-900",
// //   },
// //   {
// //     id: "restaurant",
// //     title: "Restaurant Website",
// //     category: "Web Apps",
// //     description:
// //       "Static restaurant website written in plain HTML and CSS, with no framework.",
// //     stack: ["HTML5", "CSS3"],
// //     highlights: [
// //       "Hand-written HTML and CSS",
// //       "Image-driven layout",
// //     ],
// //     overview:
// //       "A restaurant website built from scratch with semantic HTML and a single stylesheet, showing the fundamentals behind the frameworks I use today.",
// //     architectureNotes: [
// //       "A single index.html page with one style.css stylesheet.",
// //       "Images are kept in a dedicated imgs folder.",
// //     ],
// //     githubUrl: "https://github.com/ahmadibraheem555/Restaurant",
// //     gradient: "from-indigo-500/35 via-cyan-500/15 to-zinc-900",
// //   },
// //   // {
// //   //   id: "masar-syria",
// //   //   title: "MASAR SYRIA",
// //   //   titleAr: "مسار سوريا",
// //   //   category: "Web Apps",
// //   //   description:
// //   //     "Smart tourism platform providing interactive routes and guide information for travelers.",
// //   //   stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel AI SDK"],
// //   //   highlights: [
// //   //     "Interactive route guides",
// //   //     "SSR/SEO optimized with Next.js",
// //   //     "Graduation project, scored 94/100",
// //   //   ],
// //   //   overview:
// //   //     "MASAR SYRIA helps travelers plan trips with interactive routes and practical guide information for each destination. It was built as a graduation project.",
// //   //   architectureNotes: [
// //   //     "Next.js with server-side rendering for fast, search-friendly pages.",
// //   //     "TypeScript and Tailwind CSS across the interface.",
// //   //     "The Vercel AI SDK powers the in-app assistant.",
// //   //   ],
// //   //   gradient: "from-cyan-500/30 via-violet-500/20 to-zinc-900",
// //   // },
// // ];

// export type ProjectCategory = "Web Apps" | "AI Tools";

// export type ProjectFilter = "All" | ProjectCategory;

// export interface Project {
//   id: string;
//   title: string;
//   /** Optional Arabic display name */
//   titleAr?: string;
//   category: ProjectCategory;
//   description: string;
//   stack: string[];
//   highlights: string[];
//   /** Longer write-up shown in the details modal */
//   overview: string;
//   architectureNotes: string[];
//   /** Buttons are only rendered when a real URL exists. */
//   liveUrl?: string;
//   /** Leave undefined for private projects; the card shows "Private repo". */
//   githubUrl?: string;
//   /** Screenshot shown on the card and in the modal (file lives in public/). */
//   image?: { src: string; alt: string; width: number; height: number };
//   /** Tailwind gradient classes used behind the image, or as the cover when there is none */
//   gradient: string;
// }

// export const PROJECT_FILTERS: ProjectFilter[] = ["All", "Web Apps", "AI Tools"];

// export const projects: Project[] = [
//   {
//     id: "tabeebak",
//     title: "Tabeebak",
//     titleAr: "طبيبك",
//     category: "Web Apps",
//     description:
//       "Integrated medical center management platform for booking appointments and handling patient records.",
//     stack: [
//       "React",
//       "Laravel",
//       "Tailwind CSS",
//       "Redux Toolkit",
//       "Axios",
//       "REST API",
//     ],
//     highlights: [
//       "Responsive UI design",
//       "Seamless REST API integration",
//       "Client-side state management",
//     ],
//     overview:
//       "Tabeebak brings appointment booking and patient records for a medical center into one interface, with a React front end working against a Laravel backend.",
//     architectureNotes: [
//       "React front end consumes a Laravel REST API through Axios.",
//       "Redux Toolkit manages client-side state for appointments and records.",
//       "Responsive layouts are built with Tailwind CSS.",
//     ],
//     image: {
//       src: "/tabeebak.jpg",
//       alt: "Tabeebak medical center website home page",
//       width: 1200,
//       height: 564,
//     },
//     // Repo "medical-center" returned 404 (private or renamed). Add the URL once it is public:
//     githubUrl: "https://github.com/ahmadibraheem555/medical-center",
//     gradient: "from-cyan-500/40 via-indigo-500/20 to-zinc-900",
//   },
//   {
//     id: "codementor-ai",
//     title: "CodeMentor AI",
//     category: "AI Tools",
//     description:
//       "AI-powered interactive educational tool for code analysis and developer assistance.",
//     stack: [
//       "React",
//       "TypeScript",
//       "Vite",
//       "Monaco Editor",
//       "Google Gemini API",
//     ],
//     highlights: [
//       "Embedded Monaco code editor",
//       "AI code analysis with the Google GenAI SDK",
//       "Typed React 19 codebase built with Vite",
//       "Deployed on Netlify",
//     ],
//     overview:
//       "CodeMentor AI lets learners write or paste code into a full editor and get AI-generated analysis and help alongside it. It is built to teach, not only to fix.",
//     architectureNotes: [
//       "The editor is Monaco, embedded in React through @monaco-editor/react.",
//       "AI features use Google's @google/genai SDK.",
//       "React 19 with TypeScript, built and served with Vite (type-checked build via tsc -b).",
//     ],
//     // Tip: rename the Netlify site (Site configuration > Change site name) for a cleaner URL.
//     liveUrl: "https://darling-platypus-70394d.netlify.app/",
//     githubUrl: "https://github.com/ahmadibraheem555/CodeMentor-AI",
//     image: {
//       src: "/codementor-ai.jpg",
//       alt: "CodeMentor AI interface with a Monaco code editor and an AI analysis panel",
//       width: 1200,
//       height: 500,
//     },
//     gradient: "from-violet-500/40 via-indigo-500/20 to-zinc-900",
//   },
//   {
//     id: "ai-trip-planner",
//     title: "AI Trip Planner",
//     category: "AI Tools",
//     description:
//       "Trip planning web app built with React 19 and TypeScript on Vite.",
//     stack: ["React", "TypeScript", "Vite"],
//     highlights: [
//       "React 19 with TypeScript",
//       "Vite build tooling with ESLint",
//     ],
//     overview:
//       "A trip planning web app built with React and TypeScript, designed around planning journeys with AI assistance.",
//     architectureNotes: [
//       "React 19 and TypeScript, bundled with Vite.",
//       "ESLint with the React Hooks rules for code quality.",
//     ],
//     githubUrl: "https://github.com/ahmadibraheem555/ai-trip-planner",
//     gradient: "from-cyan-500/30 via-violet-500/20 to-zinc-900",
//   },
//   {
//     id: "restaurant",
//     title: "Restaurant Website",
//     category: "Web Apps",
//     description:
//       "Static restaurant website written in plain HTML and CSS, with no framework.",
//     stack: ["HTML5", "CSS3"],
//     highlights: [
//       "Hand-written HTML and CSS",
//       "Image-driven layout",
//     ],
//     overview:
//       "A restaurant website built from scratch with semantic HTML and a single stylesheet, showing the fundamentals behind the frameworks I use today.",
//     architectureNotes: [
//       "A single index.html page with one style.css stylesheet.",
//       "Images are kept in a dedicated imgs folder.",
//     ],
//     githubUrl: "https://github.com/ahmadibraheem555/Restaurant",
//     gradient: "from-indigo-500/35 via-cyan-500/15 to-zinc-900",
//     image: {
//       src: "/restaurant.png",
//       alt: "Restaurant website with a modern design and responsive layout",
//       width: 1200,
//       height: 500,
//     },
//   },
//   // {
//   //   id: "masar-syria",
//   //   title: "MASAR SYRIA",
//   //   titleAr: "مسار سوريا",
//   //   category: "Web Apps",
//   //   description:
//   //     "Smart tourism platform providing interactive routes and guide information for travelers.",
//   //   stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel AI SDK"],
//   //   highlights: [
//   //     "Interactive route guides",
//   //     "SSR/SEO optimized with Next.js",
//   //     "Graduation project, scored 94/100",
//   //   ],
//   //   overview:
//   //     "MASAR SYRIA helps travelers plan trips with interactive routes and practical guide information for each destination. It was built as a graduation project.",
//   //   architectureNotes: [
//   //     "Next.js with server-side rendering for fast, search-friendly pages.",
//   //     "TypeScript and Tailwind CSS across the interface.",
//   //     "The Vercel AI SDK powers the in-app assistant.",
//   //   ],
//   //   gradient: "from-cyan-500/30 via-violet-500/20 to-zinc-900",
//   // },
// ];








export type ProjectCategory = "Web Apps" | "AI Tools";

export type ProjectFilter = "All" | ProjectCategory;

export interface Project {
  id: string;
  title: string;
  /** Optional Arabic display name */
  titleAr?: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
  highlights: string[];
  /** Longer write-up shown in the details modal */
  overview: string;
  architectureNotes: string[];
  /** Buttons are only rendered when a real URL exists. */
  liveUrl?: string;
  /** Leave undefined for private projects; the card shows "Private repo". */
  githubUrl?: string;
  /** Screenshot shown on the card and in the modal (file lives in public/). */
  image?: { src: string; alt: string; width: number; height: number };
  /** Tailwind gradient classes used behind the image, or as the cover when there is none */
  gradient: string;
}

export const PROJECT_FILTERS: ProjectFilter[] = ["All", "Web Apps", "AI Tools"];

export const projects: Project[] = [
  {
    id: "tabeebak",
    title: "Tabeebak",
    titleAr: "طبيبك",
    category: "Web Apps",
    description:
      "Integrated medical center management platform for booking appointments and handling patient records.",
    stack: [
      "React",
      "Laravel",
      "Tailwind CSS",
      "Redux Toolkit",
      "Axios",
      "REST API",
    ],
    highlights: [
      "Responsive UI design",
      "Seamless REST API integration",
      "Client-side state management",
    ],
    overview:
      "Tabeebak brings appointment booking and patient records for a medical center into one interface, with a React front end working against a Laravel backend.",
    architectureNotes: [
      "React front end consumes a Laravel REST API through Axios.",
      "Redux Toolkit manages client-side state for appointments and records.",
      "Responsive layouts are built with Tailwind CSS.",
    ],
    image: {
      src: "/tabeebak.jpg",
      alt: "Tabeebak medical center website home page",
      width: 1200,
      height: 564,
    },
    // Repo "medical-center" returned 404 (private or renamed). Add the URL once it is public:
    githubUrl: "https://github.com/ahmadibraheem555/medical-center",
    gradient: "from-cyan-500/40 via-indigo-500/20 to-zinc-900",
  },
  {
    id: "codementor-ai",
    title: "CodeMentor AI",
    category: "AI Tools",
    description:
      "AI-powered interactive educational tool for code analysis and developer assistance.",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Monaco Editor",
      "Google Gemini API",
    ],
    highlights: [
      "Embedded Monaco code editor",
      "AI code analysis with the Google GenAI SDK",
      "Typed React 19 codebase built with Vite",
      "Deployed on Netlify",
    ],
    overview:
      "CodeMentor AI lets learners write or paste code into a full editor and get AI-generated analysis and help alongside it. It is built to teach, not only to fix.",
    architectureNotes: [
      "The editor is Monaco, embedded in React through @monaco-editor/react.",
      "AI features use Google's @google/genai SDK.",
      "React 19 with TypeScript, built and served with Vite (type-checked build via tsc -b).",
    ],
    // Tip: rename the Netlify site (Site configuration > Change site name) for a cleaner URL.
    liveUrl: "https://darling-platypus-70394d.netlify.app",
    githubUrl: "https://github.com/ahmadibraheem555/CodeMentor-AI",
    image: {
      src: "/codementor-ai.jpg",
      alt: "CodeMentor AI interface with a Monaco code editor and an AI analysis panel",
      width: 1200,
      height: 500,
    },
    gradient: "from-violet-500/40 via-indigo-500/20 to-zinc-900",
  },
  {
    id: "ai-trip-planner",
    title: "AI Trip Planner",
    category: "AI Tools",
    description:
      "Trip planning web app built with React 19 and TypeScript on Vite.",
    stack: ["React", "TypeScript", "Vite"],
    highlights: [
      "React 19 with TypeScript",
      "Vite build tooling with ESLint",
    ],
    overview:
      "A trip planning web app built with React and TypeScript, designed around planning journeys with AI assistance.",
    architectureNotes: [
      "React 19 and TypeScript, bundled with Vite.",
      "ESLint with the React Hooks rules for code quality.",
    ],
    githubUrl: "https://github.com/ahmadibraheem555/ai-trip-planner",
    gradient: "from-cyan-500/30 via-violet-500/20 to-zinc-900",
  },
  {
    id: "restaurant",
    title: "Restaurant Website",
    category: "Web Apps",
    description:
      "Responsive restaurant landing page with a working menu filter and booking form, adapted from a free template.",
    stack: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    highlights: [
      "Responsive, mobile-first layout",
      "Menu filter and validated booking form in vanilla JavaScript",
      "Live on GitHub Pages",
    ],
    overview:
      "A restaurant landing page adapted from a free ThemeWagon template and rebuilt with clean semantic HTML, custom CSS, and vanilla JavaScript. It covers the full page flow: hero, menu, reservation form, team, reviews, and footer.",
    architectureNotes: [
      "Bootstrap 5 grid and components, with a custom stylesheet driven by CSS variables.",
      "Vanilla JavaScript for the menu filter, form validation, and mobile navigation.",
      "Accessibility basics: labels, focus states, skip link, and reduced-motion support.",
      "Hosted on GitHub Pages.",
    ],
    liveUrl: "https://ahmadibraheem555.github.io/Restaurant/",
    githubUrl: "https://github.com/ahmadibraheem555/Restaurant",
    gradient: "from-indigo-500/35 via-cyan-500/15 to-zinc-900",
     image: {
      src: "/restaurant.png",
      alt: "Restaurant website with a modern design and responsive layout",
      width: 1200,
      height: 500,
    },
  },
 
];
