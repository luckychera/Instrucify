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
    ]
  },

  design: {
    title: "Graphics Design",
    lessons: [
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
    ]
  }
};
