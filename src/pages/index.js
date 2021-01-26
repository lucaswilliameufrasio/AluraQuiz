import styled from 'styled-components'
import db from '../../db.json'
import Widget from '../components/Widget'
import QuizBackground from '../components/QuizBackground'
import Footer from '../components/Footer'
import GithubCorner from '../components/GithubCorner'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Quiz CSS da Alura</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Hmm</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/lucaswilliameufrasio/AluraQuiz" />
    </QuizBackground>
  )
}
