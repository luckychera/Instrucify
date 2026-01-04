const courses = {
  math: {
    title: "Mathematics",
    lessons: [
      {
        title: "Numbers & Operations",
        video: "https://www.youtube.com/embed/2ZzuZvz33X0",
        content: `
          <p>Mathematics starts with numbers.</p>
          <p>Operations include addition, subtraction, multiplication and division.</p>
        `,
        quiz: {
          question: "Which is NOT a basic operation?",
          options: ["Addition", "Division", "Integration"],
          answer: 2
        }
      },
      {
        title: "Algebra Basics",
        video: "https://www.youtube.com/embed/NybHckSEQBI",
        content: `<p>Algebra uses symbols to represent numbers.</p>`,
        quiz: {
          question: "What does x usually represent?",
          options: ["A fixed value", "An unknown number", "A function"],
          answer: 1
        }
      },
      ,
      {  title: "Linear Equations", content: "Solving single and multi-variable equations.", video: "" },
      {  title: "Quadratic Equations", content: "Factoring and quadratic formula.", video: "" },
      {  title: "Polynomials", content: "Operations and applications.", video: "" },
      {  title: "Functions", content: "Domain, range, graphs.", video: "" },
      {  title: "Coordinate Geometry", content: "Slope, distance, midpoint.", video: "" },
      {  title: "Trigonometry Basics", content: "Sine, cosine, tangent.", video: "" },
      {  title: "Trigonometric Identities", content: "Simplifying expressions.", video: "" },
      {  title: "Mensuration", content: "Area and volume.", video: "" },
      {  title: "Statistics", content: "Mean, median, mode.", video: "" },
      {  title: "Probability", content: "Events and outcomes.", video: "" },
      {  title: "Sequences", content: "Arithmetic sequences.", video: "" },
      {  title: "Series", content: "Summation of sequences.", video: "" },
      {  title: "Matrices", content: "Matrix operations.", video: "" },
      {  title: "Determinants", content: "Solving systems.", video: "" },
      {  title: "Limits", content: "Introduction to calculus.", video: "" },
      {  title: "Derivatives", content: "Rate of change.", video: "" },
      {  title: "Integrals", content: "Area under curves.", video: "" }
      
    ]
  },

  programming: {
    title: "Programming",
    lessons: [
      {
        title: "Introduction to Programming?",
        video: "https://www.youtube.com/embed/zOjov-2OZ0E",
        content: `<p>Programming is telling computers what to do.</p>`,
        quiz: {
          question: "Programming is used to?",
          options: ["Cook food", "Control computers", "Paint walls"],
          answer: 1
        }
      },
      {
        title: "Variables",
        video: "https://www.youtube.com/embed/9emXNzqCKyg",
        content: `<code>let age = 20;</code>`,
        quiz: {
          question: "Which keyword declares a variable?",
          options: ["var", "let", "Both"],
          answer: 2
        }
      },
      
      {  title: "Algorithms", content: "Step-by-step solutions.", video: "" },
      {  title: "Flowcharts", content: "Visual logic representation.", video: "" },
      
      { title: "Data Types", content: "Numbers, strings, booleans.", video: "" },
      { title: "Operators", content: "Arithmetic and logical operators.", video: "" },
      { title: "Conditionals", content: "if / else logic.", video: "" },
      { title: "Loops", content: "for, while loops.", video: "" },
      { title: "Functions", content: "Reusable code.", video: "" },
      { title: "Arrays", content: "Collections of data.", video: "" },
      { title: "Objects", content: "Key-value structures.", video: "" },
      { title: "DOM Basics", content: "HTML manipulation.", video: "" },
      { title: "Events", content: "User interactions.", video: "" },
      { title: "Async JavaScript", content: "Promises & async/await.", video: "" },
      { title: "APIs", content: "Fetching external data.", video: "" },
      { title: "Git Basics", content: "Version control.", video: "" },
      { title: "Debugging", content: "Finding errors.", video: "" },
      { title: "OOP Concepts", content: "Classes & objects.", video: "" },
      { title: "Data Structures", content: "Stacks & queues.", video: "" },
      { title: "Final Project", content: "Build a real app.", video: "" }
    ]
  },

  design: {
    title: "Graphics Design",
    lessons: [
      {  title: "Introduction to Design", content: "What design is.", video: "https://www.youtube.com/embed/3n3rT5ZpG0k" },
      
     
      {  title: "Typography", content: "Fonts & readability.", video: "" },
      {  title: "Layout Systems", content: "Grids & alignment.", video: "" },
      {  title: "Branding Basics", content: "Visual identity.", video: "" },
      {  title: "Logo Design", content: "Creating logos.", video: "" },
      {  title: "UI Design", content: "Interface design.", video: "" },
      {  title: "UX Fundamentals", content: "User experience.", video: "" },
      {  title: "Figma Basics", content: "Design tools.", video: "" },
      {  title: "Photoshop Tools", content: "Image editing.", video: "" },
      {  title: "Illustrator Tools", content: "Vector graphics.", video: "" },
      {  title: "Raster Graphics", content: "Pixel-based design.", video: "" },
      {  title: "Vector Graphics", content: "Scalable design.", video: "" },
      {  title: "Poster Design", content: "Print layouts.", video: "" },
      {  title: "Social Media Design", content: "Digital content.", video: "" },
      {  title: "Motion Graphics", content: "Basic animation.", video: "" },
      {  title: "Design Systems", content: "Reusable styles.", video: "" },
      {  title: "Portfolio Design", content: "Showcase work.", video: "" },
      {  title: "Client Workflow", content: "Professional practice.", video: "" },
      {
        title: "Design Principles",
        video: "https://www.youtube.com/embed/3n3rT5ZpG0k",
        content: `<p>Good design follows balance, contrast and alignment.</p>`,
        quiz: {
          question: "Which is a design principle?",
          options: ["Contrast", "Compilation", "Execution"],
          answer: 0
        }
      },
      {
        title: "Color Theory",
        video: "https://www.youtube.com/embed/_2LLXnUdUIc",
        content: `<p>Colors affect emotions and readability.</p>`,
        quiz: {
          question: "Which color feels calm?",
          options: ["Red", "Blue", "Neon Green"],
          answer: 1
        }
      }
      
    ]
  },

  science: {
    title: "Science",
    lessons: [
      {
        title: "What is Science?",
        video: "https://www.youtube.com/embed/0KzL9u6xJXk",
        content: `<p>Science explains natural phenomena.</p>`,
        quiz: {
          question: "Science is based on?",
          options: ["Guessing", "Experiments", "Stories"],
          answer: 1
        }
      },
      {
        title: "Scientific Method",
        video: "https://www.youtube.com/embed/sDMsc5v4p6A",
        content: `<p>Observation → Hypothesis → Experiment.</p>`,
        quiz: {
          question: "First step of scientific method?",
          options: ["Conclusion", "Observation", "Experiment"],
          answer: 1
        }
      },
      {  title: "Physics Basics", video: "", content: "Matter & energy."  },
      {  title: "Motion", video: "", content: "Speed & velocity."  },
      {  title: "Forces", video: "", content: "Newton’s laws."  },
      {  title: "Energy", content: "Forms of energy."  },
      {  title: "Waves", content: "Sound & light." },
      {  title: "Electricity", content: "Current & circuits." },
      {  title: "Magnetism", content: "Magnetic fields." },
      {  title: "Atoms", content: "Atomic structure." },
      {  title: "Elements", content: "Periodic table." },
      {  title: "Chemical Reactions", content: "Types of reactions." },
      {  title: "Acids & Bases", content: "pH scale." },
      {  title: "Biology Basics", content: "Life sciences."},
      {  title: "Cells", content: "Cell structure." },
      {  title: "Genetics", content: "DNA & inheritance." },
      {  title: "Human Body", content: "Body systems."},
      {  title: "Ecology", content: "Ecosystems." },
      {  title: "Earth Science", content: "Earth processes." },
      {  title: "Space Science", content: "Universe basics." }
    ]
  }
};



