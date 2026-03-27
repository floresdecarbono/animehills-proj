import styles from './Alert.module.css'
import { bus } from '../../utils/event'
import { useEffect, useState } from 'react'

export function Alert() {

    const [tipo, setTipo] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [visivel, setVisivel] = useState(false)

    useEffect(() => {
        const handleMessage = (data) => {
            setMensagem(data.mensagem)
            setTipo(data.tipo)
            setVisivel(true)

            setTimeout(() => setVisivel(false), 5000)
        }

        bus.on('message', handleMessage)

        return () => {
            bus.off('message', handleMessage)
        }
    }, [])

    if (!visivel) return null

    return (
        <div className={`${styles.alert} ${styles[tipo]}`}>
            {tipo === 'success' ? <ion-icon name="checkmark-circle-outline"></ion-icon> : <ion-icon name="close-circle-outline"></ion-icon> }
            <p>{mensagem}</p>
        </div>
    )
}