'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const quizQuestions = [
  {
    question: "What is the name of our Mars rover?",
    options: ["AROHN", "Curiosity", "Perseverance", "Opportunity"],
    correctAnswer: 0
  },
  {
    question: "Which competition did Inferno win in 2024?",
    options: ["NASA Space Apps Challenge", "European Rover Challenge", "University Rover Challenge", "Indian Rover Challenge"],
    correctAnswer: 2
  },
  {
    question: "What is the primary power source for our rover?",
    options: ["Nuclear", "Battery", "Solar", "Fuel Cells"],
    correctAnswer: 2
  },
  {
    question: "How many wheels does our rover have?",
    options: ["4", "6", "8", "10"],
    correctAnswer: 1
  },
  {
    question: "What is the main programming language used for our rover's software?",
    options: ["Python", "C++", "Java", "Rust"],
    correctAnswer: 1
  }
]

export default function TeamQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerClick = (selectedAnswer: number) => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Team Quiz
        </h1>
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-8">
          {showScore ? (
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">You scored {score} out of {quizQuestions.length}</h2>
              <button 
                onClick={resetQuiz}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
              >
                Retry Quiz
              </button>
            </motion.div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1}/{quizQuestions.length}</h2>
              <p className="text-lg mb-6">{quizQuestions[currentQuestion].question}</p>
              <div className="space-y-4">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    className="w-full text-left bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors"
                    onClick={() => handleAnswerClick(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

