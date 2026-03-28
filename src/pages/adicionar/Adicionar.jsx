import React, { useContext, useState } from 'react'
import styles from './Adicionar.module.css';
import { api } from "../../config/api/api";
import { UserContext } from '../../contexts/UserContext';

export function Adicionar() {

  const { user } = useContext(UserContext);

  const [post, setPost] = useState({
    titulo: '',
    categoria: '',
    autor: user.nome,
    data: new Date().toISOString(),
    imagem: '',
    imagemCard: '',
    conteudo: '',
  });

  async function handleSubmit(e) {
    e.preventDefault()
    enviarPost();

    console.log(post);
  }


  async function enviarPost() {
    try {
      await api.post('/postagens', post);
    } catch(err) {
      console.err('ERROR: ', err);
    }
  }

  function criaResumo(conteudo) {
    let resumo = '';

    let i = 0;
    for (i; i < 280; i++) {
      resumo += conteudo[i];
    }

    while (conteudo[i] !== ' ') {
      resumo += conteudo[i];
      console.log(resumo);
      i++;
    }

    return resumo + '...';
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log('handleChange ', name, value)

    if (e.target.name !== 'conteudo') {
      setPost({ ...post, [name]: value });
    }
    else {
      if (value.length >= 280) {
        setPost({ ... post, [name]: value, resumo: criaResumo(value) });
      }
    }
  }

  return (
    <>
      <h1>Adicionar postagem</h1>

      <form action="POST" onSubmit={handleSubmit} className={styles.form_container}>
        <label htmlFor="titulo">
          Título
        </label>
        <input type="text"  name='titulo' onChange={handleChange} className={styles.inputs} required/>

        <label htmlFor="categoria" className={styles.labels}>
          Categoria
        </label>
        <select name="categoria" id="select-categoria" onChange={handleChange} className={styles.selects} required>
          <option value="Notícia">
            Notícia
          </option>
          <option value="Resenha">
            Resenha
          </option>
        </select>

        <label htmlFor="imagem" className={styles.labels}>
          URL da Imagem de Capa
        </label>
        <input type="text" name='imagem' onChange={handleChange} className={styles.inputs} required /><br />

        <label htmlFor="imagemCard" className={styles.labels}>
          URL da Imagem de Sumário
        </label>
        <input type="text" name='imagemCard' onChange={handleChange} className={styles.inputs} required /><br />

        <label htmlFor="conteudo" className={styles.labels}>
          Conteúdo
        </label>
        <textarea name="conteudo" id="textarea-conteudo" minLength="450" onChange={handleChange} className={styles.content_area} required></textarea>

        <button className={styles.buttons}>Postar</button><br />
        <button  type='button' onClick={() => {
          console.log(post);
          criaResumo();
        }}>Ver Post</button>
      </form>
    </>
  )

}
