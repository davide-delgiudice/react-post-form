import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function PostForm() {

  // variabile di stato che è un oggetto per gestire la form
  const [formPost, setFormPost] = useState({
    author: "",
    title: "",
    body: "",
    public: false,
  });

  // funzione per gestire il cambiamento dei campi input
  const handleChange = (e) => {
    // destrutturazione del target per recuperare specifiche proprietà
    // const { name, value, type, checked } = e.target;

    // imposto la variabile di stato richiamando setFormData
    setFormPost({
      ...formPost,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formPost).then((resp) => {
      console.log(resp.data);
    });
  };

  return (
    <div className="row">
        <div className="col-12">
          <form onSubmit={handleSubmit} className='border rounded bg-light p-3'>
            <div className='row g-4'>
              {/* nome autore */}
              <div className="col-12">
                <label htmlFor="author" className='control-label'>Nome Autore</label>
                <input 
                  type="text"
                  name='author'
                  id='author'
                  placeholder='Inserisci autore...'
                  className='form-control'
                  value={formPost.author}
                  onChange={handleChange}
                />
              </div>
              {/* titolo post */}
              <div className="col-12">
                <label htmlFor="title" className='control-label'>Titolo Post</label>
                <input 
                  type="text"
                  name='title'
                  id='title'
                  placeholder='Inserisci il titolo del post...'
                  className='form-control'
                  value={formPost.title}
                  onChange={handleChange}
                />
              </div>
              {/* testo post */}
              <div className='col-12'>
                <label htmlFor="body" className='control-label'>Testo Post</label>
                <textarea 
                  name="body" 
                  id="body"
                  placeholder='Inserisci il contenuto del post...'
                  className='form-control'
                  value={formPost.body}
                  onChange={handleChange}
                >
                </textarea>
              </div>
              {/* checkbox */}
              <div className="col-12">
                <div className="form-check">
                  <input 
                    type="checkbox"
                    name="public"
                    id="public"
                    checked={formPost.public}
                    className='form-check-input'
                    onChange={handleChange}
                  />
                  <label htmlFor="public" className='form-check-label'>
                    Spunta la casella se vuoi che il post sia reso pubblico!
                  </label>
                </div>
              </div>
              {/* button */}
              <div className='col-12'>
                <button type="submit" className='btn btn-primary'>
                  Invia Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}

export default PostForm