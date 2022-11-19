const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>

            <form method="POST" action={`/places/${data.id}?_method=PUT`} className='row p-3'>
                <div className='form-group col-sm-6'>
                    <label htmlFor="name">Place Name</label>
                    <input type="text" value={data.place.name} id="name" name="name" required className='form-control' />
                </div>

                <div className='form-group col-sm-6'>
                    <label htmlFor="pic">Place Picture</label>
                    <input type="text" value={data.place.pic} id="pic" name="pic" className='form-control' />
                </div>

                <div className='form-group col-sm-6'>
                    <label htmlFor="city">City</label>
                    <input type="text" value={data.place.city} id="city" name="city" className='form-control' />
                </div>

                <div className='form-group col-sm-6'>
                    <label htmlFor="state">State</label>
                    <input type="text" value={data.place.state} id="state" name="state" className='form-control' />
                </div>

                <div className='form-group col-sm-12'>
                    <label htmlFor="cuisines">Cuisines</label>
                    <input type="text" value={data.place.cuisines} id="cuisines" name="cuisines" required className='form-control' />
                </div>

                <div className="col">
                    <br />
                    <button type="submit" className='btn btn-primary'>Update Place</button>
                </div>

                
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form