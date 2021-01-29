import React from 'react'
import { ThemeProvider } from 'styled-components'

import { QuizPage } from '../../components'

export default function CommunityQuiz ({ communityDatabase }) {
  return (
    <ThemeProvider theme={communityDatabase.theme}>
      <QuizPage database={communityDatabase}/>
    </ThemeProvider>
  )
}

export async function getServerSideProps (context) {
  const [projectName, githubUser] = context.query.id.split('___')

  try {
    // eslint-disable-next-line no-undef
    const communityDatabase = await fetch(
      `https://${projectName}.${githubUser}.vercel.app/api/db`
    ).then((response) => {
      if (response.ok) {
        return response.json()
      }
    })

    return {
      props: {
        communityDatabase
      }
    }
  } catch (error) {
    throw new Error(error)
  }
}
