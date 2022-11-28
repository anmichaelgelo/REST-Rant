const React = require('react')
const Def = require('../default')

function new_form (data) {
    let message = '';
    if(data.message){
        message = <div class="alert alert-danger" role="alert">{data.message}</div>;
    }

    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            {message}
            
            <form method="POST" action="/places" className='row p-3'>
                <div className='form-group col-sm-6'>
                    <label htmlFor="name">Place Name</label>
                    <input type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className='form-control' />
                </div>

                <div className='form-group col-sm-6'>
                    <label htmlFor="pic">Place Picture</label>
                    <input type="url" 
                        id="pic" 
                        name="pic" 
                        className='form-control' />
                </div>

                <div className='form-group col-sm-6'>
                    <label htmlFor="city">City</label>
                    <input type="text" 
                        id="city" 
                        name="city" 
                        className='form-control' />
                </div>

                <div className='form-group col-sm-6'>
                    <label htmlFor="state">State</label>
                    <input type="text" 
                        id="state" 
                        name="state" 
                        className='form-control' />
                </div>

                <div className='form-group col-sm-6'>
                    <label htmlFor="cuisines">Cuisines</label>
                    <input type="text" 
                        id="cuisines" 
                        name="cuisines" 
                        required 
                        className='form-control' />
                </div>

                <div className="form-group col-sm-6">
                    <label htmlFor="founded">Founded Year</label>
                    <input type="number" 
                        id="founded" 
                        name="founded" 
                        className="form-control"
                        // min="1673"
                        // max={new Date().getFullYear()}
                        value={new Date().getFullYear()}/>
                </div>

                <div className='form-group'>
                    <button type="submit" className='btn btn-primary'>Add Place</button>
                </div>

                
            </form>

          </main>
        </Def>
    )
}

module.exports = new_form