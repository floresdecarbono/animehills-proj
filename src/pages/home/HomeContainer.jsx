import { useEffect, useState } from 'react'
import { api } from '../../config/api/api'
import { Carrossel } from '../../components/Carrossel/Carrossel'

import styles from './Home.module.css'
import { Card } from '../../components/Card/Card'
import { useSearchParams } from 'react-router-dom'

const Container = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const handlePage = (value) => {
    setSearchParams(params => {
      params.set('pagina', value)
      return params
    })
  }

  const [postagens, setPostagens] = useState([])
  const [postagensCarrossel, setPostagensCarrossel] = useState([])
  const [infosPagination, setInfosPagination] = useState({})

  const page = searchParams.get("pagina") ? Number(searchParams.get("pagina")) : 1

  useEffect(() => {
    api.get(`/postagens?_page=${page}&_per_page=10`)
    .then(response => {
      setPostagens(response.data.data)
      setInfosPagination(response.data)
    })
    .catch(err => console.log(err))

    api.get("/postagens?_page=1&_per_page=5")
    .then(response => {
      setPostagensCarrossel(response.data.data)
    })
    .catch(err => console.log(err))
  }, [page])

  return (
    <div id='home-container'>
      <Carrossel postagens={postagensCarrossel}/>
      <div className={styles.container_content}>
        {postagens.map(postagem => <Card key={postagem.id} postagem={postagem}/>)}
      </div>
      <div className={styles.pagination}>
        <button disabled={!infosPagination.prev} onClick={() => handlePage(page - 1)} className={styles.prev}>Prev</button>
        <p>{Number(page)}</p>
        <button disabled={!infosPagination.next} onClick={() => handlePage(page + 1)} className={styles.next}>Next</button>
      </div>
    </div>
  )
}

export default Container
