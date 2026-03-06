import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export function Card({ postagem }) {
    return (
        <div className={styles.card}>
            <div className={styles.card_content}>
                <div>
                <p className={styles.data_postagem}>Por {postagem.autor}, em {new Date(postagem.data).toLocaleDateString('pt-BR', {day: '2-digit', month: 'long', year: 'numeric'})} às {new Date(postagem.data).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit'})}</p>
                    <h4>{postagem.titulo}</h4>
                    <p>{postagem.resumo}</p>
                </div>
                <Link to={`/artigo/${postagem.id}`}>
                    <button className={styles.ver_detalhes}>Ver detalhes</button>
                </Link>
            </div>
            <div className={styles.card_image}>
                <img src={postagem.imagemCard} alt="" />
            </div>
        </div>
    )
}