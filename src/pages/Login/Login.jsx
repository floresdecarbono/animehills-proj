import { useContext, useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

export function Login() {

    const navigate = useNavigate()

    const { login } = useContext(UserContext)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    async function submit(e) {
        e.preventDefault()
        try {
            await login(credentials.email, credentials.password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.login_container}>
            <h2>Login</h2>
            <form className={styles.login_form} onSubmit={submit}>
                <div className={styles.input_container}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) => setCredentials({...credentials, email: e.target.value})}/>
                </div>
                <div className={styles.input_container}>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" id="senha" onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
                </div>
                <div style={{textAlign: 'center'}}>
                    <button className={styles.btn_login} type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}