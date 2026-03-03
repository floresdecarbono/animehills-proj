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
                const response = await api.get(`/post/${id}`);
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
                    <h2 className={styles.title}>Jujutsu Kaisen: 3ª temporada vai adaptar o Jogo do Abate</h2>
                    <div className={styles.container_main_image}>
                        <img src={`https://www.otempo.com.br/adobe/dynamicmedia/deliver/dm-aid--bf640f37-8aa0-497e-beb7-c9cc3e0f74a6/entretenimento-jujutsu-kaisen-3-temporada-vai-adaptar-o-jogo-do-abate-1708739848.jpg?preferwebp=true&quality=90&width=1200`} alt="Imagem do post" className={styles.main_image} />
                    </div>
                    <div className={styles.infos}>
                        <h4 className={styles.categoria}>Notícia</h4>
                        <h2 className={styles.title}>Jujutsu Kaisen: 3ª temporada vai adaptar o Jogo do Abate</h2>
                        <p>Por Peterson William, em 03 de fevereiro de 2026 às 12:05</p>
                    </div>
                    <div className={styles.content}>
                        <p>
                            TÓQUIO, Preparem os corações (e as expansões de domínio). Após o rastro de destruição deixado pelo Incidente em Shibuya, a jornada de Yuji Itadori e dos feiticeiros jujutsu acaba de ganhar um novo e sombrio capítulo. O estúdio MAPPA confirmou oficialmente que a terceira temporada da adaptação do mangá de Gege Akutami focará inteiramente no Arco do Jogo do Abate 'Culling Game'.
                            O Caos Pós-Shibuya
                            O anúncio chega em um momento em que a base de fãs ainda processa as perdas massivas da temporada anterior. Com o Japão mergulhado em um colapso social e sobrenatural, o novo arco introduz uma competição de vida ou morte arquitetada pelo milenar Kenjaku. Diferente das missões tradicionais de exorcismo, o Jogo do Abate transforma o país em um tabuleiro de Battle Royale, onde feiticeiros modernos e do passado são forçados a se enfrentar em colônias isoladas.

                            O Que Esperar da Nova Temporada
                            O Jogo do Abate é conhecido entre os leitores do mangá por sua complexidade tática e violência gráfica. Entre os principais destaques confirmados para a nova fase, estão:

                            A Caça a Itadori: Com a execução de Yuji reestabelecida pelos altos escalões do mundo Jujutsu, o protagonista se torna um alvo tanto de maldições quanto de seus próprios aliados.

                            Novos Jogadores de Peso: A temporada apresentará personagens que se tornaram favoritos instantâneos, como o advogado Hiromi Higuruma e o eletrizante Hajime Kashimo.

                            O Retorno de Rostos Conhecidos: Veremos como personagens que sobreviveram a Shibuya — como Megumi Fushiguro e Maki Zen'in — evoluem em meio ao novo sistema de regras mortais.

                            Produção e Expectativa
                            O Estúdio MAPPA segue à frente da animação, mantendo a promessa de entregar sequências de luta que desafiam os limites da fluidez e do design visual. Embora uma data de estreia específica ainda não tenha sido fixada, a expectativa é que a produção leve o tempo necessário para manter o padrão de excelência estabelecido na "Era Shibuya".

                            Para os fãs, o recado é claro: as regras do mundo mudaram, e ninguém está seguro. O Jogo do Abate não é apenas uma luta por pontos; é uma luta pela própria definição da humanidade e da energia amaldiçoada.
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}