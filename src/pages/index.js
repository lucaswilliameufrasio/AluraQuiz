import React, { useState } from 'react'
import { useRouter } from 'next/router'
import db from '../../db.json'
import Widget from '../components/Widget'
import Footer from '../components/Footer'
import QuizLogo from '../components/QuizLogo'
import GithubCorner from '../components/GithubCorner'
import QuizContainer from '../components/QuizContainer'
import QuizBackground from '../components/QuizBackground'

export default function Home () {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name === '') return null
    router.push(`/quiz?name=${name}`)
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz CSS da Alura</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={handleSubmit}>
              <input
                placeholder='Digita aqui seu nome'
                type='text'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <button type='submit' disabled={name === ''}>
                Jogar
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl='https://github.com/lucaswilliameufrasio/AluraQuiz' />
    </QuizBackground>
  )
}
