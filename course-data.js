const courses = {

  /* ===================== MATHEMATICS ===================== */
  mathematics: {
    title: "Mathematics",
    lessons: [
      {
        title: "Numbers and Operations",
        video: "https://www.youtube.com/embed/2ZzuZvz33X0",
        content: "This lesson introduces natural numbers, integers, fractions, decimals, and basic arithmetic operations used in daily life.",
        quiz: {
          question: "Which of the following is NOT an arithmetic operation?",
          options: ["Addition", "Division", "Integration"],
          answer: 2
        }
      },
      {
        title: "Factors and Multiples",
        video: "https://www.youtube.com/embed/9KXg9ZyO7bw",
        content: "Learn about prime numbers, factors, multiples, HCF, and LCM with practical examples.",
        quiz: {
          question: "LCM stands for?",
          options: ["Least Common Multiple", "Largest Common Measure", "Lowest Count Method"],
          answer: 0
        }
      },
      {
        title: "Algebra Basics",
        video: "https://www.youtube.com/embed/NybHckSEQBI",
        content: "Algebra uses letters to represent unknown values and helps solve equations.",
        quiz: {
          question: "What does a variable represent?",
          options: ["A fixed number", "An unknown value", "A shape"],
          answer: 1
        }
      },
      {
        title: "Linear Equations",
        video: "https://www.youtube.com/embed/7tJpY6JYJ8k",
        content: "Learn how to solve linear equations involving one or two variables.",
        quiz: {
          question: "The graph of a linear equation is a?",
          options: ["Circle", "Curve", "Straight line"],
          answer: 2
        }
      },
      {
        title: "Quadratic Equations",
        video: "https://www.youtube.com/embed/IlNAJl36-10",
        content: "Quadratic equations involve variables raised to the power of two.",
        quiz: {
          question: "Degree of a quadratic equation?",
          options: ["1", "2", "3"],
          answer: 1
        }
      },
      {
        title: "Polynomials",
        video: "https://www.youtube.com/embed/F9i4Z4xCjvQ",
        content: "Understand addition, subtraction, and multiplication of polynomials.",
        quiz: {
          question: "A polynomial has?",
          options: ["Variables and constants", "Only numbers", "Only symbols"],
          answer: 0
        }
      },
      {
        title: "Coordinate Geometry",
        video: "https://www.youtube.com/embed/0C7kE6Xx1aA",
        content: "Study points, distance, slope, and equations of straight lines.",
        quiz: {
          question: "Coordinates of origin?",
          options: ["(0,0)", "(1,1)", "(0,1)"],
          answer: 0
        }
      },
      {
        title: "Trigonometry Basics",
        video: "https://www.youtube.com/embed/Jsiy4TxgIME",
        content: "Learn sine, cosine, tangent, and their applications in triangles.",
        quiz: {
          question: "sin²θ + cos²θ = ?",
          options: ["0", "1", "2"],
          answer: 1
        }
      },
      {
        title: "Mensuration",
        video: "https://www.youtube.com/embed/YlE7Ue8VQ1c",
        content: "Calculate area, perimeter, volume, and surface area of shapes.",
        quiz: {
          question: "Volume is measured in?",
          options: ["Square units", "Cubic units", "Linear units"],
          answer: 1
        }
      },
      {
        title: "Statistics",
        video: "https://www.youtube.com/embed/xxpc-HPKN28",
        content: "Learn mean, median, mode, and data interpretation.",
        quiz: {
          question: "Mean is also called?",
          options: ["Average", "Middle", "Most frequent"],
          answer: 0
        }
      },
      {
        title: "Probability",
        video: "https://www.youtube.com/embed/KzfWUEJjG18",
        content: "Probability measures the likelihood of an event.",
        quiz: {
          question: "Probability value range?",
          options: ["0–1", "1–10", "0–100"],
          answer: 0
        }
      },
      {
        title: "Sequences",
        video: "https://www.youtube.com/embed/k0h8cT1AqvA",
        content: "Understand arithmetic and geometric sequences.",
        quiz: {
          question: "Sequence is?",
          options: ["Random numbers", "Ordered numbers", "Unrelated values"],
          answer: 1
        }
      },
      {
        title: "Matrices",
        video: "https://www.youtube.com/embed/yRwQ7ZpJ3NU",
        content: "Learn matrix operations and applications.",
        quiz: {
          question: "Matrix is?",
          options: ["Table of numbers", "Graph", "Equation"],
          answer: 0
        }
      },
      {
        title: "Determinants",
        video: "https://www.youtube.com/embed/L5bJzYJkZ7w",
        content: "Use determinants to solve systems of equations.",
        quiz: {
          question: "Determinant applies to?",
          options: ["Matrices", "Functions", "Graphs"],
          answer: 0
        }
      },
      {
        title: "Limits",
        video: "https://www.youtube.com/embed/riXcZT2ICjA",
        content: "Limits form the foundation of calculus.",
        quiz: {
          question: "Limits are part of?",
          options: ["Algebra", "Calculus", "Statistics"],
          answer: 1
        }
      },
      {
        title: "Derivatives",
        video: "https://www.youtube.com/embed/ANyVpMS3HLQ",
        content: "Derivatives measure rates of change.",
        quiz: {
          question: "Derivative represents?",
          options: ["Area", "Slope", "Volume"],
          answer: 1
        }
      },
      {
        title: "Integrals",
        video: "https://www.youtube.com/embed/7gigNsz4Oe8",
        content: "Integrals calculate areas and accumulation.",
        quiz: {
          question: "Integral finds?",
          options: ["Slope", "Area", "Angle"],
          answer: 1
        }
      },
      {
        title: "Vectors",
        video: "https://www.youtube.com/embed/ml4NSzCQobk",
        content: "Vectors have both magnitude and direction.",
        quiz: {
          question: "Vector has?",
          options: ["Only magnitude", "Magnitude and direction", "Only direction"],
          answer: 1
        }
      },
      {
        title: "Complex Numbers",
        video: "https://www.youtube.com/embed/T647CGsuOVU",
        content: "Complex numbers include real and imaginary parts.",
        quiz: {
          question: "i² equals?",
          options: ["1", "-1", "0"],
          answer: 1
        }
      },
      {
        title: "Applied Mathematics",
        video: "https://www.youtube.com/embed/jfKfPfyJRdk",
        content: "Apply mathematics to real-world problems.",
        quiz: {
          question: "Applied math focuses on?",
          options: ["Theory only", "Practical problems", "Art"],
          answer: 1
        }
      }
    ]
  }

  /* ================= PROGRAMMING ================= */
programming: {
  title: "Programming",
  lessons: [

    {
      title: "Introduction to Programming",
      video: "https://www.youtube.com/embed/zOjov-2OZ0E",
      content: "Programming is the process of giving instructions to a computer to perform tasks. These instructions are written using programming languages.",
      quiz: {
        question: "Programming is mainly used to?",
        options: ["Control computers", "Design buildings", "Write books"],
        answer: 0
      }
    },

    {
      title: "What is a Programming Language?",
      video: "https://www.youtube.com/embed/3A_zR2t9hZs",
      content: "A programming language is a formal language that allows humans to communicate instructions to a computer.",
      quiz: {
        question: "Which is a programming language?",
        options: ["HTML", "Python", "Photoshop"],
        answer: 1
      }
    },

    {
      title: "Algorithms and Flowcharts",
      video: "https://www.youtube.com/embed/6hfOvs8pY1k",
      content: "Algorithms are step-by-step instructions to solve a problem. Flowcharts visually represent algorithms.",
      quiz: {
        question: "An algorithm is?",
        options: ["A programming language", "A step-by-step solution", "A computer"],
        answer: 1
      }
    },

    {
      title: "Variables",
      video: "https://www.youtube.com/embed/9emXNzqCKyg",
      content: "Variables store data values that can change during program execution.",
      quiz: {
        question: "Which keyword declares a variable in JavaScript?",
        options: ["let", "var", "Both"],
        answer: 2
      }
    },

    {
      title: "Data Types",
      video: "https://www.youtube.com/embed/wfR3aSV7uAE",
      content: "Data types define the type of data stored in a variable such as numbers, strings, and booleans.",
      quiz: {
        question: "Which is NOT a data type?",
        options: ["Number", "String", "Loop"],
        answer: 2
      }
    },

    {
      title: "Operators",
      video: "https://www.youtube.com/embed/8mAITcNt710",
      content: "Operators are used to perform operations like addition, comparison, and logical evaluation.",
      quiz: {
        question: "Which operator checks equality?",
        options: ["=", "==", "+"],
        answer: 1
      }
    },

    {
      title: "Conditional Statements",
      video: "https://www.youtube.com/embed/IsG4Xd6LlsM",
      content: "Conditional statements allow programs to make decisions using if, else, and switch statements.",
      quiz: {
        question: "Which keyword is used for conditions?",
        options: ["if", "for", "var"],
        answer: 0
      }
    },

    {
      title: "Loops",
      video: "https://www.youtube.com/embed/s9wW2PpJsmQ",
      content: "Loops execute a block of code repeatedly until a condition is met.",
      quiz: {
        question: "Which loop runs a fixed number of times?",
        options: ["for", "while", "if"],
        answer: 0
      }
    },

    {
      title: "Functions",
      video: "https://www.youtube.com/embed/N8ap4k_1QEQ",
      content: "Functions are reusable blocks of code designed to perform a specific task.",
      quiz: {
        question: "Why use functions?",
        options: ["To repeat code", "To organize code", "To slow programs"],
        answer: 1
      }
    },

    {
      title: "Arrays",
      video: "https://www.youtube.com/embed/oigfaZ5ApsM",
      content: "Arrays store multiple values in a single variable.",
      quiz: {
        question: "Array index starts from?",
        options: ["0", "1", "-1"],
        answer: 0
      }
    },

    {
      title: "Objects",
      video: "https://www.youtube.com/embed/PFmuCDHHpwk",
      content: "Objects store data in key-value pairs and represent real-world entities.",
      quiz: {
        question: "Objects contain?",
        options: ["Only values", "Key-value pairs", "Only keys"],
        answer: 1
      }
    },

    {
      title: "Strings",
      video: "https://www.youtube.com/embed/09BwruU4kiY",
      content: "Strings are sequences of characters used to represent text.",
      quiz: {
        question: "Which represents a string?",
        options: ['"Hello"', "123", "true"],
        answer: 0
      }
    },

    {
      title: "Input and Output",
      video: "https://www.youtube.com/embed/7q8k75cX2lI",
      content: "Programs take input from users and produce output using displays or files.",
      quiz: {
        question: "Output is?",
        options: ["User data", "Program result", "Variable"],
        answer: 1
      }
    },

    {
      title: "Debugging",
      video: "https://www.youtube.com/embed/9GdzJkec4NQ",
      content: "Debugging is the process of finding and fixing errors in programs.",
      quiz: {
        question: "Debugging removes?",
        options: ["Features", "Errors", "Files"],
        answer: 1
      }
    },

    {
      title: "Error Types",
      video: "https://www.youtube.com/embed/ML5Eg1QwY3A",
      content: "Errors include syntax errors, runtime errors, and logical errors.",
      quiz: {
        question: "Syntax errors occur due to?",
        options: ["Wrong logic", "Wrong language rules", "Slow execution"],
        answer: 1
      }
    },

    {
      title: "Introduction to HTML",
      video: "https://www.youtube.com/embed/pQN-pnXPaVg",
      content: "HTML structures web pages using elements and tags.",
      quiz: {
        question: "HTML stands for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Language"],
        answer: 0
      }
    },

    {
      title: "Introduction to CSS",
      video: "https://www.youtube.com/embed/yfoY53QXEnI",
      content: "CSS styles HTML elements to make websites visually appealing.",
      quiz: {
        question: "CSS controls?",
        options: ["Logic", "Style", "Database"],
        answer: 1
      }
    },

    {
      title: "Introduction to JavaScript",
      video: "https://www.youtube.com/embed/W6NZfCO5SIk",
      content: "JavaScript adds interactivity and logic to web pages.",
      quiz: {
        question: "JavaScript is used for?",
        options: ["Styling", "Interactivity", "Database only"],
        answer: 1
      }
    },

    {
      title: "Version Control Basics",
      video: "https://www.youtube.com/embed/8JJ101D3knE",
      content: "Version control systems like Git help track code changes.",
      quiz: {
        question: "Git is used for?",
        options: ["Design", "Version control", "Hosting videos"],
        answer: 1
      }
    },

    {
      title: "Careers in Programming",
      video: "https://www.youtube.com/embed/7nQsQ0rvYqQ",
      content: "Programming careers include web development, mobile apps, data science, and AI.",
      quiz: {
        question: "Which is a programming career?",
        options: ["Web developer", "Doctor", "Architect"],
        answer: 0
      }
    }

  ]
}

graphics: {
  title: "Graphics Design",
  lessons: [

    {
      title: "Introduction to Graphics Design",
      video: "https://www.youtube.com/embed/3n3rT5ZpG0k",
      content: "Graphics design is the art of visual communication using images, typography, and layout to convey messages effectively.",
      quiz: {
        question: "Graphics design is mainly about?",
        options: ["Visual communication", "Programming logic", "Data analysis"],
        answer: 0
      }
    },

    {
      title: "Elements of Design",
      video: "https://www.youtube.com/embed/QQq_jY4bTzY",
      content: "The basic elements of design include line, shape, color, texture, space, and form.",
      quiz: {
        question: "Which is a design element?",
        options: ["Color", "Algorithm", "Variable"],
        answer: 0
      }
    },

    {
      title: "Principles of Design",
      video: "https://www.youtube.com/embed/3C3v7kz4NFs",
      content: "Design principles guide how elements are arranged: balance, contrast, alignment, repetition, and proximity.",
      quiz: {
        question: "Balance in design refers to?",
        options: ["Weight distribution", "Font size", "File size"],
        answer: 0
      }
    },

    {
      title: "Color Theory",
      video: "https://www.youtube.com/embed/_2LLXnUdUIc",
      content: "Color theory explains how colors interact and affect mood, emotion, and readability.",
      quiz: {
        question: "Which color usually represents calmness?",
        options: ["Red", "Blue", "Yellow"],
        answer: 1
      }
    },

    {
      title: "Typography Basics",
      video: "https://www.youtube.com/embed/9z4aYpD9Q8E",
      content: "Typography focuses on font selection, spacing, and readability in design.",
      quiz: {
        question: "Serif fonts contain?",
        options: ["Decorative strokes", "No endings", "Only icons"],
        answer: 0
      }
    },

    {
      title: "Font Pairing",
      video: "https://www.youtube.com/embed/q3o2N7Tz0pU",
      content: "Font pairing combines fonts that complement each other for hierarchy and clarity.",
      quiz: {
        question: "Good font pairing improves?",
        options: ["Readability", "File size", "Export speed"],
        answer: 0
      }
    },

    {
      title: "Layout and Composition",
      video: "https://www.youtube.com/embed/QqJ5dG3r5Ck",
      content: "Layout determines how elements are placed on a page using grids and alignment.",
      quiz: {
        question: "Grid systems help with?",
        options: ["Alignment", "Color selection", "Animation"],
        answer: 0
      }
    },

    {
      title: "Visual Hierarchy",
      video: "https://www.youtube.com/embed/8RzT0Z5oP0E",
      content: "Visual hierarchy directs viewers' attention using size, contrast, and spacing.",
      quiz: {
        question: "Which attracts attention first?",
        options: ["Large bold text", "Small gray text", "Background texture"],
        answer: 0
      }
    },

    {
      title: "Branding Basics",
      video: "https://www.youtube.com/embed/yd8P6rCw2S8",
      content: "Branding creates a consistent identity through logos, colors, and messaging.",
      quiz: {
        question: "Branding helps build?",
        options: ["Recognition", "Confusion", "Randomness"],
        answer: 0
      }
    },

    {
      title: "Logo Design",
      video: "https://www.youtube.com/embed/4l5yM5QF8kE",
      content: "Logo design focuses on simplicity, memorability, and relevance.",
      quiz: {
        question: "A good logo should be?",
        options: ["Simple", "Complex", "Crowded"],
        answer: 0
      }
    },

    {
      title: "Image Resolution",
      video: "https://www.youtube.com/embed/1kzW7LqC3Z4",
      content: "Resolution determines image clarity. Higher resolution means better quality.",
      quiz: {
        question: "High resolution means?",
        options: ["Clear image", "Small file", "Low quality"],
        answer: 0
      }
    },

    {
      title: "Raster vs Vector Graphics",
      video: "https://www.youtube.com/embed/1p0N3xQx7B8",
      content: "Raster images are pixel-based, while vector images scale without losing quality.",
      quiz: {
        question: "Which scales without losing quality?",
        options: ["Raster", "Vector", "JPEG"],
        answer: 1
      }
    },

    {
      title: "Adobe Photoshop Basics",
      video: "https://www.youtube.com/embed/7ZVyNjKSr0M",
      content: "Photoshop is used for photo editing, retouching, and raster graphics.",
      quiz: {
        question: "Photoshop mainly works with?",
        options: ["Raster images", "Vector icons", "Code"],
        answer: 0
      }
    },

    {
      title: "Adobe Illustrator Basics",
      video: "https://www.youtube.com/embed/Ib8UBwu3yGA",
      content: "Illustrator is used for creating logos, icons, and vector illustrations.",
      quiz: {
        question: "Illustrator is best for?",
        options: ["Logos", "Photo retouching", "Video editing"],
        answer: 0
      }
    },

    {
      title: "UI Design Fundamentals",
      video: "https://www.youtube.com/embed/9B6wJc7pD38",
      content: "UI design focuses on creating intuitive and visually pleasing interfaces.",
      quiz: {
        question: "UI stands for?",
        options: ["User Interface", "Universal Image", "User Interaction"],
        answer: 0
      }
    },

    {
      title: "UX Design Basics",
      video: "https://www.youtube.com/embed/Ovj4hFxko7c",
      content: "UX design improves user satisfaction by enhancing usability and accessibility.",
      quiz: {
        question: "UX focuses on?",
        options: ["User experience", "Visual effects", "Animation speed"],
        answer: 0
      }
    },

    {
      title: "Design for Web",
      video: "https://www.youtube.com/embed/3Y1Yd0cHk0Y",
      content: "Web design balances aesthetics with performance and responsiveness.",
      quiz: {
        question: "Responsive design adapts to?",
        options: ["Screen sizes", "Internet speed", "CPU power"],
        answer: 0
      }
    },

    {
      title: "Design for Print",
      video: "https://www.youtube.com/embed/qB6O0Z7E8m4",
      content: "Print design considers bleed, margins, and CMYK color mode.",
      quiz: {
        question: "Print uses which color mode?",
        options: ["RGB", "CMYK", "HEX"],
        answer: 1
      }
    },

    {
      title: "Design Ethics",
      video: "https://www.youtube.com/embed/Vh7JXQ3N2xA",
      content: "Design ethics ensure honesty, accessibility, and inclusivity in visual communication.",
      quiz: {
        question: "Ethical design avoids?",
        options: ["Misleading users", "Clarity", "Accessibility"],
        answer: 0
      }
    },

    {
      title: "Careers in Graphics Design",
      video: "https://www.youtube.com/embed/0J5ZcFjG9Gk",
      content: "Careers include graphic designer, UI/UX designer, brand strategist, and illustrator.",
      quiz: {
        question: "Which is a design career?",
        options: ["Graphic designer", "Database admin", "Network engineer"],
        answer: 0
      }
    }

  ]
}

science: {
  title: "Science",
  lessons: [

    {
      title: "Introduction to Science",
      video: "https://www.youtube.com/embed/0KzL9u6xJXk",
      content: "Science is the systematic study of the natural world through observation, experimentation, and analysis.",
      quiz: {
        question: "Science is based on?",
        options: ["Experiments and evidence", "Guessing", "Opinions"],
        answer: 0
      }
    },

    {
      title: "Branches of Science",
      video: "https://www.youtube.com/embed/k0j1fXH8kD4",
      content: "The main branches of science are physics, chemistry, biology, and earth science.",
      quiz: {
        question: "Which is NOT a branch of science?",
        options: ["Physics", "Biology", "Philosophy"],
        answer: 2
      }
    },

    {
      title: "Scientific Method",
      video: "https://www.youtube.com/embed/sDMsc5v4p6A",
      content: "The scientific method includes observation, hypothesis, experimentation, analysis, and conclusion.",
      quiz: {
        question: "What comes after observation?",
        options: ["Hypothesis", "Conclusion", "Law"],
        answer: 0
      }
    },

    {
      title: "Measurement in Science",
      video: "https://www.youtube.com/embed/7Wm3FZB0PqA",
      content: "Measurement uses standard units to quantify observations accurately.",
      quiz: {
        question: "SI unit of length?",
        options: ["Meter", "Kilogram", "Second"],
        answer: 0
      }
    },

    {
      title: "Matter and Its States",
      video: "https://www.youtube.com/embed/Dw4UO6wRZQY",
      content: "Matter exists in solid, liquid, gas, and plasma states.",
      quiz: {
        question: "Which is NOT a state of matter?",
        options: ["Solid", "Liquid", "Energy"],
        answer: 2
      }
    },

    {
      title: "Physical and Chemical Changes",
      video: "https://www.youtube.com/embed/j7sYpP2Hc6c",
      content: "Physical changes do not form new substances, while chemical changes do.",
      quiz: {
        question: "Rusting is a?",
        options: ["Physical change", "Chemical change", "Nuclear change"],
        answer: 1
      }
    },

    {
      title: "Atoms and Molecules",
      video: "https://www.youtube.com/embed/FqkJzK0KjzI",
      content: "Atoms are the smallest units of matter, and molecules are combinations of atoms.",
      quiz: {
        question: "Atoms combine to form?",
        options: ["Elements", "Molecules", "Cells"],
        answer: 1
      }
    },

    {
      title: "Elements and Compounds",
      video: "https://www.youtube.com/embed/0XlY9pKpQ3E",
      content: "Elements contain one type of atom, while compounds contain two or more elements chemically bonded.",
      quiz: {
        question: "Water is a?",
        options: ["Element", "Compound", "Mixture"],
        answer: 1
      }
    },

    {
      title: "Force and Motion",
      video: "https://www.youtube.com/embed/7q1RZ3p6S2k",
      content: "Force causes changes in motion, speed, and direction.",
      quiz: {
        question: "Force can change?",
        options: ["Shape", "Speed", "Both"],
        answer: 2
      }
    },

    {
      title: "Work, Energy, and Power",
      video: "https://www.youtube.com/embed/mr9k3NTo3t4",
      content: "Energy enables work to be done and exists in various forms.",
      quiz: {
        question: "SI unit of energy?",
        options: ["Joule", "Watt", "Newton"],
        answer: 0
      }
    },

    {
      title: "Heat and Temperature",
      video: "https://www.youtube.com/embed/6YtqJ8J0NHo",
      content: "Heat is energy transfer, while temperature measures hotness.",
      quiz: {
        question: "Temperature is measured using?",
        options: ["Thermometer", "Barometer", "Hygrometer"],
        answer: 0
      }
    },

    {
      title: "Sound",
      video: "https://www.youtube.com/embed/XF6j2YkZPpM",
      content: "Sound is produced by vibrations and travels through a medium.",
      quiz: {
        question: "Sound cannot travel in?",
        options: ["Solid", "Liquid", "Vacuum"],
        answer: 2
      }
    },

    {
      title: "Light",
      video: "https://www.youtube.com/embed/3j7t4pNwRkE",
      content: "Light enables vision and travels in straight lines.",
      quiz: {
        question: "Speed of light is fastest in?",
        options: ["Vacuum", "Water", "Glass"],
        answer: 0
      }
    },

    {
      title: "Electricity",
      video: "https://www.youtube.com/embed/FdF0nT0mCQU",
      content: "Electricity is the flow of electric charge used to power devices.",
      quiz: {
        question: "Unit of electric current?",
        options: ["Ampere", "Volt", "Ohm"],
        answer: 0
      }
    },

    {
      title: "Magnetism",
      video: "https://www.youtube.com/embed/2lE1wYkVQ8g",
      content: "Magnetism is a force of attraction or repulsion between magnetic materials.",
      quiz: {
        question: "Like poles?",
        options: ["Attract", "Repel", "Disappear"],
        answer: 1
      }
    },

    {
      title: "Cell Structure",
      video: "https://www.youtube.com/embed/URUJD5NEXC8",
      content: "Cells are the basic structural and functional units of life.",
      quiz: {
        question: "Powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome"],
        answer: 1
      }
    },

    {
      title: "Human Body Systems",
      video: "https://www.youtube.com/embed/LrZ7Nq7tZz0",
      content: "The human body consists of systems like digestive, circulatory, and respiratory.",
      quiz: {
        question: "Which system pumps blood?",
        options: ["Respiratory", "Digestive", "Circulatory"],
        answer: 2
      }
    },

    {
      title: "Ecosystem",
      video: "https://www.youtube.com/embed/5cW3wE2z1Jk",
      content: "An ecosystem includes living organisms and their physical environment.",
      quiz: {
        question: "Plants are?",
        options: ["Producers", "Consumers", "Decomposers"],
        answer: 0
      }
    },

    {
      title: "Environmental Pollution",
      video: "https://www.youtube.com/embed/Y7hF5Yw6c3k",
      content: "Pollution harms air, water, soil, and living organisms.",
      quiz: {
        question: "Which causes air pollution?",
        options: ["Factory smoke", "Photosynthesis", "Rain"],
        answer: 0
      }
    },

    {
      title: "Science and Technology",
      video: "https://www.youtube.com/embed/Z1Yd7p6C9J0",
      content: "Science and technology work together to improve human life.",
      quiz: {
        question: "Technology applies?",
        options: ["Scientific knowledge", "Guesswork", "Myths"],
        answer: 0
      }
    }

  ]
}


};





