import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext' 
import { api } from '../../config/api/api'

export function Card({ postagem, setPostagens }) {

    async function removerPostagem(id) {
        try {
            await api.delete(`/postagens/${id}`)
            setPostagens(prev => prev.filter(post => post.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const { user } = useContext(UserContext)

    return (
        <div className={styles.card}>
            <div className={styles.card_content}>
                {user && 
                    <div>
                        <button className={styles.delete_button} onClick={() => removerPostagem(postagem.id)}>
                            <ion-icon name="trash-bin-outline"></ion-icon>
                        </button>
                    </div>
                }
                
                <div>
                <   p className={styles.data_postagem}>Por {postagem.autor}, em {new Date(postagem.data).toLocaleDateString('pt-BR', {day: '2-digit', month: 'long', year: 'numeric'})} às {new Date(postagem.data).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit'})}</p>
                    <h4>{postagem.titulo}</h4>
                    <p>{postagem.resumo}</p>
                </div>
                <div>
                    <Link to={`/artigo/${postagem.id}`}>
                        <button className={styles.ver_detalhes}>Ver detalhes</button>
                    </Link>
                </div>
            </div>
            <div className={styles.card_image}>
                <img src={postagem.imagemCard} alt="" />
            </div>
        </div>
    )
}