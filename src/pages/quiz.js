import React from 'react'
import { useRouter } from 'next/router'

export default function Quiz () {
  const router = useRouter()
  const { name } = router.query
  return <h1 style={{ color: 'black' }}>Quiz {name}</h1>
}
