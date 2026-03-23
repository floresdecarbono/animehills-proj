import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Card } from '../../components/Card/Card'
import { api } from '../../config/api/api'

import styles from './Busca.module.css'

export function Busca() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [infosPagination, setInfosPagination] = useState({})
    const [postagens, setPostagens] = useState([])

    const categoria = searchParams.get('categoria') ?? ''
    const searchTerm = searchParams.get('search') ?? ''
    const page = searchParams.get("pagina") ?? 1

    function handleFilter(name ,value) {
        setSearchParams((params) => {
            if (name == 'search') {
                params.set(name, value)
                params.set('pagina', "1")
            } else {
                params.set(name, value)
            }
            return params
        })
    }

    useEffect(() => {
        const fetchPostagens = async () => {
        const response = await api.get(`/postagens?categoria=${categoria}&titulo:contains=${searchTerm}&_page=${page}&_per_page=10`)
        setPostagens(response.data.data)
        setInfosPagination(response.data)
    }
        fetchPostagens()
    }, [categoria, searchTerm, page])

    return (
        <div className={styles.busca_container}>
            <div className={styles.busca_header}>
                <h2>{categoria}</h2>
                <div>
                    <input type="text" name="busca" id="busca" placeholder="Faça uma busca" onInput={(e) => handleFilter("search", e.target.value)}/>
                    <ion-icon name="search-outline"></ion-icon>
                </div>
            </div>
            <div className={styles.busca_content}>
                {postagens.map(postagem => <Card setPostagens={setPostagens} key={postagem.id} postagem={postagem}/>)}
            </div>
            <div className={styles.pagination}>
                <button disabled={!infosPagination.prev} onClick={() => handleFilter("pagina", Number(page) - 1)} className={styles.prev}>Prev</button>
                <p>{Number(page)}</p>
                <button disabled={!infosPagination.next} onClick={() => handleFilter("pagina", Number(page) + 1)} className={styles.next}>Next</button>
            </div>
        </div>
    )
}