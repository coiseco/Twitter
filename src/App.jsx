import { useState } from 'react'
import Banner from './Banner.jsx'
import LastMessages from './LastMessages.jsx'

function App() {
  const [login, setLogin] = useState(false)
  const [registered, setRegistered] = useState(false)
  
  

  return (
    <>
      <Banner logo='true' text='Оставайся на связи с друзьями, даже когда их нет рядом'/>
      <LastMessages />
      <Banner logo='false' text='Зарегистрируйтесь и узнайте обо всём первым'/>
    </>
  )
}

export default App
