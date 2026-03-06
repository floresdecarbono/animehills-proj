import { useEffect, useState } from 'react'
import { api } from '../../config/api/api'
import { Carrossel } from '../../components/Carrossel/Carrossel'

const Container = () => {

  const [postagens, setPostagens] = useState([])

  useEffect(() => {
    api.get(`/postagens`)
    .then(response => setPostagens(response.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div id='home-container'>
      <Carrossel postagens={postagens}/>
    </div>
  )
}

export default Container
