import db from '../../db.json'
import Widget from '../components/Widget'
import QuizContainer from '../components/QuizContainer'
import QuizBackground from '../components/QuizBackground'
import Footer from '../components/Footer'
import GithubCorner from '../components/GithubCorner'



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