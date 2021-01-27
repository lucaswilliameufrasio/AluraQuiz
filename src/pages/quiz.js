import React, { useEffect, useState } from 'react'

import db from '../../db.json'

import {
  Widget,
  Footer,
  Button,
  QuizLogo,
  GithubCorner,
  QuizContainer,
  QuizBackground
} from '../components'

function LoadingWidget () {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>

      <Widget.Content>[Desafio do Loading]</Widget.Content>
    </Widget>
  )
}

function QuestionWidget ({
  question,
  questionIndex,
  totalOfQuestions,
  selectedAnswerIndex,
  changeSelectedAnswer,
  onSubmit
}) {
  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalOfQuestions}`}</h3>
      </Widget.Header>
      <Widget.Content>
        <img
          src={question.image}
          style={{ width: '100%' }}
          alt={`Imagem da questão ${questionIndex + 1}`}
        />
        <h2>{question.title}</h2>
        <p>{question.description}</p>

          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeKey = `alternative_${alternativeIndex}`
            return (
              <Widget.Topic
                key={alternativeKey}
                as='label'
                htmlFor={alternativeKey}
                selectedAnswer={
                  selectedAnswerIndex &&
                  alternativeIndex === Number(selectedAnswerIndex)
                }
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeKey}
                  name={questionIndex}
                  type='radio'
                  value={alternativeIndex}
                  onClick={(event) => changeSelectedAnswer(event.target.value)}
                />
                {alternative}
              </Widget.Topic>
            )
          })}
          <Button onClick={onSubmit} disabled={!selectedAnswerIndex}>Confirmar</Button>
      </Widget.Content>
    </Widget>
  )
}

function ResultWidget ({ finalScore }) {
  return (
    <Widget>
      <Widget.Header>
        <h3>Resultado</h3>
      </Widget.Header>
      <Widget.Content>Acertou {finalScore} questões</Widget.Content>
    </Widget>
  )
}

export default function Quiz () {
  const [loading, setLoading] = useState(true)
  const [completed, setCompleted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const totalOfQuestions = db.questions.length
  const question = db.questions[currentQuestion]

  useEffect(() => {
    setTimeout(() => setLoading(false), 700)
  }, [])

  function validateAnswer () {
    if (Number(selectedAnswer) === question.answer) {
      setScore((oldScore) => oldScore + 1)
    }
  }

  function getNextQuestion () {
    setCurrentQuestion((currentQuestionIndex) => currentQuestionIndex + 1)
    setSelectedAnswer(null)
  }

  function handleSubmit (event) {
    event.preventDefault()
    if (currentQuestion + 1 === totalOfQuestions) {
      setCompleted(true)
    }
    validateAnswer()
    getNextQuestion()
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {loading
          ? (
          <LoadingWidget />
            )
          : completed
            ? (
          <ResultWidget finalScore={score} />
              )
            : (
          <QuestionWidget
            question={question}
            questionIndex={currentQuestion}
            totalOfQuestions={totalOfQuestions}
            selectedAnswerIndex={selectedAnswer}
            changeSelectedAnswer={setSelectedAnswer}
            onSubmit={handleSubmit}
          />
              )}

        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl='https://github.com/lucaswilliameufrasio/AluraQuiz' />
    </QuizBackground>
  )
}
