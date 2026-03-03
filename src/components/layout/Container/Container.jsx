import styles from './Container.module.css'

export function Container({children}) {
    return (
        <main className={styles.container}>
            {children}
        </main>
    )
}