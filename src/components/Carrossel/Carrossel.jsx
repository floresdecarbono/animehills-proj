import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import styles from './Carrossel.module.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

export function Carrossel({ postagens }) {

    const navigate = useNavigate()

    const redirectArtigo = (id) => {
        navigate(`/artigo/${id}`)
    }

    return (
        <div className={styles.container_carrossel}>
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.5}
            navigation
            centeredSlides={true}
            pagination
            autoplay={{delay: 10000}}
            loop={true}
            >
                {(postagens && postagens.length > 0) && postagens.map(postagem => (
                    <SwiperSlide>
                        <div className={styles.card} onClick={() => redirectArtigo(postagem.id)}>
                            <img src={postagem.imagem} alt="Imagem da capa" />
                            <div className={styles.content}>
                                <h2>{postagem.resumo}</h2>
                                <p>Por {postagem.autor}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
} 