import React, { useState } from 'react'
import { useRouter } from 'next/router'
import db from '../../db.json'

import {
  Widget,
  Footer,
  Input,
  Button,
  QuizLogo,
  Link,
  GithubCorner,
  QuizContainer,
  QuizBackground
} from '../components'

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
              <Input
                placeholder='Digita aqui seu nome'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Button type='submit' disabled={name === ''}>
                JOGAR
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz da Galera</h1>

            <ul>
              {db.external.map((link, index) => {
                const [projectName, githubUser] = link
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.')

                return (
                  <li key={index}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}?name=temporarilyHardCodedName`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl='https://github.com/lucaswilliameufrasio/AluraQuiz' />
    </QuizBackground>
  )
}
