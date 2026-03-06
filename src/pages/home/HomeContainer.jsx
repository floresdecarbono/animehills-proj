import { useEffect, useState } from 'react'
import { api } from '../../config/api/api'
import { Carrossel } from '../../components/Carrossel/Carrossel'

import styles from './Home.module.css'
import { Card } from '../../components/Card/Card'

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
      <div className={styles.container_content}>
        {postagens.map(postagem => <Card postagem={postagem}/>)}
      </div>
    </div>
  )
}

export default Container
