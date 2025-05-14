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

  return (
    <div className="row">
        <div className="col-12">
          <form className='border rounded bg-light p-3'>
            <div className='row g-4'>
              {/* nome autore */}
              <div className="col-12">
                <label htmlFor="" className='control-label'>Nome Autore</label>
                <input 
                  type="text"
                  name='autore'
                  id='autore'
                  placeholder='Inserisci autore...'
                  className='form-control'
                  value={formPost.author}
                />
              </div>
              {/* titolo post */}
              <div className="col-12">
                <label htmlFor="" className='control-label'>Titolo Post</label>
                <input 
                  type="text"
                  name='title'
                  id='title'
                  placeholder='Inserisci il titolo del post...'
                  className='form-control'
                  value={formPost.title}
                />
              </div>
              {/* testo post */}
              <div className='col-12'>
                <label htmlFor="" className='control-label'>Testo Post</label>
                <textarea 
                  name="body" 
                  id="body"
                  placeholder='Inserisci il contenuto del post...'
                  className='form-control'
                  value={formPost.body}
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
                  />
                  <label htmlFor="" className='form-check-label'>
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