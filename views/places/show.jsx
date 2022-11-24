const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <div className="row p-3">
                    <div className="col">
                        <img src={`${data.place.pic}`} 
                            alt={data.place.name} 
                            className="img-fluid" />
                        <h3>Located in {data.place.city + ', ' + data.place.state}</h3>
                    </div>

                    <div className="col">
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        <p>Not rated</p>
                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4>Serving {data.place.cuisines}</h4>

                        <div className='d-flex justify-content-center'>
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning">Edit</a>
                            
                            <div className="mx-1"></div>
                            
                            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                                <button type="submit" className="btn btn-danger">Delete</button>
                            </form> 
                        </div>  

                    </div>
                </div>

                <hr />

                <div className='row p-3'>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = show