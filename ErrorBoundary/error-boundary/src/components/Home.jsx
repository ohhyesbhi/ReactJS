import React from 'react'



function Home() {

    const random = Math.random()
    if(random > 0.5){
        throw "error"
    }
  return (
  
    <div>
      Home Page
    </div>
    
  )
}

export default Home
