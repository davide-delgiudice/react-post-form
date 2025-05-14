import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function PostForm() {

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
              <div className="col-12">
                <label htmlFor="" className='control-label'>Nome Autore</label>
                <input 
                  type="text" 
                  placeholder='Inserisci autore...'
                  className='form-control'
                  value=""
                />
              </div>
              <div className="col-12">
                <label htmlFor="" className='control-label'>Titolo Post</label>
                <input 
                  type="text" 
                  placeholder='Inserisci il titolo del post...'
                  className='form-control'
                  value=""  
                />
              </div>
              <div className='col-12'>
                <label htmlFor="" className='control-label'>Testo Post</label>
                <textarea 
                  name="" 
                  id=""
                  placeholder='Inserisci il contenuto del post...'
                  className='form-control'
                  value=""
                >
                </textarea>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input 
                    type="checkbox"
                    name="updates"
                    id="updates"
                    checked=""
                    className='form-check-input'
                  />
                </div>
              </div>
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