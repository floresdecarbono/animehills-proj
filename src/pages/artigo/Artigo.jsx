import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../config/api/api";

import styles from './Artigo.module.css'

export function Artigo() {
    const { id } = useParams();

    const [artigo, setArtigo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtigo = async () => {
            try {
                setLoading(true)
                const response = await api.get(`/noticias/${id}`);
                setArtigo(response.data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchArtigo();
    }, [id])

    return (
        <>
            {loading ? (
                <div className="container_loading">
                    <h3>Loading...</h3>
                </div>
            ) : (
                <div className={styles.artigo}>
                    <div className={styles.container_main_image}>
                        <img src={artigo.imagem} alt="Imagem do post" className={styles.main_image} />
                    </div>
                    <div className={styles.infos}>
                        <h4 className={styles.categoria}>Notícia</h4>
                        <h2 className={styles.title}>{artigo.titulo}</h2>
                        <p>Por {artigo.autor}, em {artigo.data} às {artigo.hora}</p><br />
                    </div>
                    <div className={styles.content}>
                        <p>{artigo.conteudo}</p>
                    </div>
                </div>
            )}
        </>
    )
}