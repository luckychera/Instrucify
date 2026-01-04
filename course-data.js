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
      }
      
      { id: 1, title: "Numbers & Operations", content: "Understanding whole numbers, fractions, decimals.", video: "" },
      { id: 2, title: "Factors & Multiples", content: "Prime numbers, LCM, HCF.", video: "" },
      { id: 3, title: "Algebra Basics", content: "Variables, expressions, equations.", video: "" },
      { id: 4, title: "Linear Equations", content: "Solving single and multi-variable equations.", video: "" },
      { id: 5, title: "Quadratic Equations", content: "Factoring and quadratic formula.", video: "" },
      { id: 6, title: "Polynomials", content: "Operations and applications.", video: "" },
      { id: 7, title: "Functions", content: "Domain, range, graphs.", video: "" },
      { id: 8, title: "Coordinate Geometry", content: "Slope, distance, midpoint.", video: "" },
      { id: 9, title: "Trigonometry Basics", content: "Sine, cosine, tangent.", video: "" },
      { id: 10, title: "Trigonometric Identities", content: "Simplifying expressions.", video: "" },
      { id: 11, title: "Mensuration", content: "Area and volume.", video: "" },
      { id: 12, title: "Statistics", content: "Mean, median, mode.", video: "" },
      { id: 13, title: "Probability", content: "Events and outcomes.", video: "" },
      { id: 14, title: "Sequences", content: "Arithmetic sequences.", video: "" },
      { id: 15, title: "Series", content: "Summation of sequences.", video: "" },
      { id: 16, title: "Matrices", content: "Matrix operations.", video: "" },
      { id: 17, title: "Determinants", content: "Solving systems.", video: "" },
      { id: 18, title: "Limits", content: "Introduction to calculus.", video: "" },
      { id: 19, title: "Derivatives", content: "Rate of change.", video: "" },
      { id: 20, title: "Integrals", content: "Area under curves.", video: "" }
    ]
  },

  programming: {
    title: "Programming",
    lessons: [
      {
        title: "What is Programming?",
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
      }
      { id: 1, title: "Introduction to Programming", content: "What programming is.", video: "" },
      { id: 2, title: "Algorithms", content: "Step-by-step solutions.", video: "" },
      { id: 3, title: "Flowcharts", content: "Visual logic representation.", video: "" },
      { id: 4, title: "Variables", content: "Storing data.", video: "" },
      { id: 5, title: "Data Types", content: "Numbers, strings, booleans.", video: "" },
      { id: 6, title: "Operators", content: "Arithmetic and logical operators.", video: "" },
      { id: 7, title: "Conditionals", content: "if / else logic.", video: "" },
      { id: 8, title: "Loops", content: "for, while loops.", video: "" },
      { id: 9, title: "Functions", content: "Reusable code.", video: "" },
      { id: 10, title: "Arrays", content: "Collections of data.", video: "" },
      { id: 11, title: "Objects", content: "Key-value structures.", video: "" },
      { id: 12, title: "DOM Basics", content: "HTML manipulation.", video: "" },
      { id: 13, title: "Events", content: "User interactions.", video: "" },
      { id: 14, title: "Async JavaScript", content: "Promises & async/await.", video: "" },
      { id: 15, title: "APIs", content: "Fetching external data.", video: "" },
      { id: 16, title: "Git Basics", content: "Version control.", video: "" },
      { id: 17, title: "Debugging", content: "Finding errors.", video: "" },
      { id: 18, title: "OOP Concepts", content: "Classes & objects.", video: "" },
      { id: 19, title: "Data Structures", content: "Stacks & queues.", video: "" },
      { id: 20, title: "Final Project", content: "Build a real app.", video: "" }
    ]
  },

  design: {
    title: "Graphics Design",
    lessons: [
      { id: 1, title: "Introduction to Design", content: "What design is.", video: "https://www.youtube.com/embed/3n3rT5ZpG0k" },
      { id: 2, title: "Design Principles", content: "Balance, contrast.", video: "" },
      { id: 3, title: "Color Theory", content: "Color psychology.", video: "" },
      { id: 4, title: "Typography", content: "Fonts & readability.", video: "" },
      { id: 5, title: "Layout Systems", content: "Grids & alignment.", video: "" },
      { id: 6, title: "Branding Basics", content: "Visual identity.", video: "" },
      { id: 7, title: "Logo Design", content: "Creating logos.", video: "" },
      { id: 8, title: "UI Design", content: "Interface design.", video: "" },
      { id: 9, title: "UX Fundamentals", content: "User experience.", video: "" },
      { id: 10, title: "Figma Basics", content: "Design tools.", video: "" },
      { id: 11, title: "Photoshop Tools", content: "Image editing.", video: "" },
      { id: 12, title: "Illustrator Tools", content: "Vector graphics.", video: "" },
      { id: 13, title: "Raster Graphics", content: "Pixel-based design.", video: "" },
      { id: 14, title: "Vector Graphics", content: "Scalable design.", video: "" },
      { id: 15, title: "Poster Design", content: "Print layouts.", video: "" },
      { id: 16, title: "Social Media Design", content: "Digital content.", video: "" },
      { id: 17, title: "Motion Graphics", content: "Basic animation.", video: "" },
      { id: 18, title: "Design Systems", content: "Reusable styles.", video: "" },
      { id: 19, title: "Portfolio Design", content: "Showcase work.", video: "" },
      { id: 20, title: "Client Workflow", content: "Professional practice.", video: "" }
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
      }
      { id: 1, title: "What is Science?", content: "Nature of science.", video: "" },
      { id: 2, title: "Scientific Method", content: "Steps of investigation.", video: "" },
      { id: 3, title: "Physics Basics", content: "Matter & energy.", video: "" },
      { id: 4, title: "Motion", content: "Speed & velocity.", video: "" },
      { id: 5, title: "Forces", content: "Newton’s laws.", video: "" },
      { id: 6, title: "Energy", content: "Forms of energy.", video: "" },
      { id: 7, title: "Waves", content: "Sound & light.", video: "" },
      { id: 8, title: "Electricity", content: "Current & circuits.", video: "" },
      { id: 9, title: "Magnetism", content: "Magnetic fields.", video: "" },
      { id: 10, title: "Atoms", content: "Atomic structure.", video: "" },
      { id: 11, title: "Elements", content: "Periodic table.", video: "" },
      { id: 12, title: "Chemical Reactions", content: "Types of reactions.", video: "" },
      { id: 13, title: "Acids & Bases", content: "pH scale.", video: "" },
      { id: 14, title: "Biology Basics", content: "Life sciences.", video: "" },
      { id: 15, title: "Cells", content: "Cell structure.", video: "" },
      { id: 16, title: "Genetics", content: "DNA & inheritance.", video: "" },
      { id: 17, title: "Human Body", content: "Body systems.", video: "" },
      { id: 18, title: "Ecology", content: "Ecosystems.", video: "" },
      { id: 19, title: "Earth Science", content: "Earth processes.", video: "" },
      { id: 20, title: "Space Science", content: "Universe basics.", video: "" }
    ]
  }
};

