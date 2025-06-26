import { useState } from "react";

export default function Quiz() {
  const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: {
        A: "Berlin",
        B: "Madrid",
        C: "Paris",
        D: "Rome",
      },
      answer: "C",
    },
    {
      question: "Which language runs in a web browser?",
      options: {
        A: "Java",
        B: "C",
        C: "Python",
        D: "JavaScript",
      },
      answer: "D",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: {
        A: "Charles Dickens",
        B: "William Shakespeare",
        C: "Leo Tolstoy",
        D: "Jane Austen",
      },
      answer: "B",
    },
    {
      question: "What is the chemical symbol for water?",
      options: {
        A: "O2",
        B: "H2",
        C: "CO2",
        D: "H2O",
      },
      answer: "D",
    },
    {
      question: "What planet is known as the Red Planet?",
      options: {
        A: "Mars",
        B: "Venus",
        C: "Jupiter",
        D: "Saturn",
      },
      answer: "A",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[current];

  const handleSelect = (optionKey) => {
    setSelected(optionKey);
  };

  const handleNext = () => {
    if (selected === question.answer) {
      setScore(score + 1);
    }
    setSelected(null);
    if (current + 1 < quizQuestions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6  rounded-lg ">
      {finished ? (
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">Quiz Completed </h2>
          <p className="text-xl">
            Your Score: {score} / {quizQuestions.length}
          </p>
          <button
            onClick={restart}
            className="mt-4 px-4 py-2 bg-black text-white rounded cursor-pointer"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <h3 className="text-5xl font-semibold mb-19">
            Q{current + 1}. {question.question}
          </h3>
          <div className="space-y-2 mb-4">
            {Object.entries(question.options).map(([key, value]) => (
              <button
                key={key}
                onClick={() => handleSelect(key)}
                className={`w-full text-left px-6 py-4 border rounded cursor-pointer ${
                  selected === key ? "bg-black text-white" : "hover:bg-gray-100"
                }`}
              >
                {key}. {value}
              </button>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={selected === null}
            className="px-4 py-2 bg-black text-white rounded cursor-pointer  hover:disabled:opacity-50"
          >
            {current === quizQuestions.length - 1 ? "Finish" : "Next"}
          </button>
        </>
      )}
    </div>
  );
}
