import React from 'react'

function PostForm() {
  return (
    <div className="row">
        <div className="col-12">
          <form className='border rounded bg-light p-3'>
            <div className='row g-4'>
              <div className="col-12">
                <input 
                  type="text" 
                  placeholder='Autore'
                  className='form-control'
                  value=""
                />
              </div>
              <div className="col-12">
                <input 
                  type="text" 
                  placeholder='Titolo'
                  className='form-control'
                  value=""  
                />
              </div>
              <div className='col-12'>
                <textarea 
                  name="" 
                  id=""
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