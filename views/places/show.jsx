const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No Comments yet!
        </h3>
    );

    let rating = (
        <h3 className="inactive">
            Not yet rated!
        </h3>
    );

    if(data.place.comments.length > 0){
        let sumRatings = data.place.comments.reduce((tot,c) => {
            return tot + c.stars;
        }, 0);

        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = '';
        for(let i = 0; i < averageRating; i++){
            stars += '⭐';
        }

        rating = (
            <h3>
                {stars} stars
            </h3>
        );

        comments = data.place.comments.map(c => {
            return (
                <div className="border p-2 col-sm-4" key={c.id}>
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>

                    <form action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`} method="post">
                        <button type="submit" className='btn btn-danger'>Delete Comment</button>
                    </form>
                </div>
            )
        })
    }

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
                        {rating}

                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4>Serving {data.place.cuisines}</h4>

                        <div className='d-flex justify-content-center'>
                            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">Edit</a>
                            
                            <div className="mx-1"></div>
                            
                            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                                <button type="submit" className="btn btn-danger">Delete</button>
                            </form> 
                        </div>  

                    </div>
                </div>

                <hr />

                {/* Comments */}
                <div className='row p-3'>
                    <h2>Comments</h2>
                    <div className="row">
                    {comments}
                    </div>
                </div>

                <div className="row p-3">
                    <h1>Got your own Rant or Rave?</h1>
                    <form method="POST" action={`${data.place._id}/comment`} className='row p-3'>
                        <div className='form-group col-12'>
                            <label htmlFor="content">Content</label>
                            <textarea id="content" 
                                name="content" 
                                className='form-control'></textarea>
                        </div>

                        <div className='form-group col-sm-4'>
                            <label htmlFor="author">Author</label>
                            <input type="text" 
                                id="author" 
                                name="author" 
                                className='form-control' />
                        </div>

                        <div className='form-group col-sm-4'>
                            <label htmlFor="stars" className="form-label">Star Rating</label>
                            <input type="range" 
                                className="form-range" 
                                step="0.5"
                                id="stars" 
                                min="1"
                                value="1"
                                max="5"
                                name="stars"
                                required />
                        </div>

                        <div className="form-group col-sm-4">
                            <div className="form-check d-flex flex-column-reverse align-items-center">
                                <input className="form-check-input" type="checkbox" name="rant" id="rant" />
                                <label className="form-check-label" htmlFor="rant">Rant?</label>
                            </div>
                        </div>

                        <div className='form-group'>
                            <button type="submit" className='btn btn-primary'>Add Comment</button>
                        </div>
                    </form>
                </div>
                {/* Ends here */}
            </main>
        </Def>
    )
}

module.exports = show