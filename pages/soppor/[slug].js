import React from 'react'
import { useRouter } from 'next/router'



const Recipe = () => {
  const router = useRouter()
  console.log(router.query)

  return (
    <div>
      <h2 style={{marginTop: "300px"}}>{router.query.slug}</h2>
    </div>
  )
}




 


export default Recipe