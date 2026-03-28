import { useContext, useState } from 'react'
import styles from './Adicionar.module.css';
import { api } from "../../config/api/api";
import { UserContext } from '../../contexts/UserContext';
import { handleAlertMessage } from '../../utils/handleAlertMessage'

export function Adicionar() {

  const { user } = useContext(UserContext);

  const [post, setPost] = useState({
    titulo: '',
    categoria: 'Notícia',
    autor: user?.nome ?? 'Sem autor',
    imagem: '',
    resumo: '',
    imagemCard: '',
    conteudo: '',
  });

  async function handleSubmit(e) {
    e.preventDefault()
    enviarPost()
  }


  async function enviarPost() {
    try {
      await api.post('/postagens', {
        ...post,
        data: new Date().toISOString()
      });
      handleAlertMessage("Post criado com sucesso!", 'success')
      setPost({
        titulo: '',
        categoria: 'Notícia',
        autor: user?.nome ?? 'Sem autor',
        imagem: '',
        resumo: '',
        imagemCard: '',
        conteudo: '',
      })
    } catch(err) {
      console.err('ERROR: ', err);
      handleAlertMessage("Falha ao enviar o post", 'error')
    }
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setPost({ ...post, [name]: value });
  }

  return (
    <div className={styles.container}>
      <h1>Adicionar postagem</h1>

      <form action="POST" onSubmit={handleSubmit} className={styles.form_container}>

        <div className={styles.container_inputs}>
          <label htmlFor="titulo" className={styles.labels}>Título</label>
          <input type="text"  name='titulo' onChange={handleChange} className={styles.inputs} value={post.titulo}/>
        </div>

        <div className={styles.container_inputs}>
          <label htmlFor="categoria" className={styles.labels}>Categoria</label>
          <select name="categoria" id="select-categoria" onChange={handleChange} className={styles.selects} value={post.categoria}>
            <option value="Notícia">
              Notícia
            </option>
            <option value="Resenha">
              Resenha
            </option>
          </select>
        </div>
        
        <div className={styles.container_inputs}>
          <label htmlFor="imagem" className={styles.labels}>URL da Imagem de Capa</label>
          <input type="text" name='imagem' onChange={handleChange} className={styles.inputs} value={post.imagem}/><br />
        </div>
        
        <div className={styles.container_inputs}>
          <label htmlFor="imagemCard" className={styles.labels}>URL da Imagem de Sumário</label>
          <input type="text" name='imagemCard' onChange={handleChange} className={styles.inputs} value={post.imagemCard}/><br />
        </div>

        <div className={styles.container_inputs}>
          <label htmlFor="conteudo" className={styles.labels}>Resumo da notícia</label>
          <textarea name="resumo" id="textarea-conteudo" onChange={handleChange} className={styles.content_area_resumo} value={post.resumo}></textarea>
        </div>

        <div className={styles.container_inputs}>
          <label htmlFor="conteudo" className={styles.labels}>Conteúdo</label>
          <textarea name="conteudo" id="textarea-conteudo" onChange={handleChange} className={styles.content_area} value={post.conteudo}></textarea>
        </div>

        <button className={styles.buttons} type='submit'>Postar</button><br />
      </form>
    </div>
  )

}
