import React from 'react'

import { QuizPage } from '../components'

export default function Quiz ({ database }) {
  return (
      <QuizPage database={database} />
  )
}

export async function getServerSideProps (context) {
  const projectUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://aluraquiz.lucaswilliameufrasio.vercel.app'

  try {
    // eslint-disable-next-line no-undef
    const database = await fetch(
      `${projectUrl}/api/db`
    ).then((response) => {
      if (response.ok) {
        return response.json()
      }
    })

    return {
      props: {
        database
      }
    }
  } catch (error) {
    throw new Error(error)
  }
}
