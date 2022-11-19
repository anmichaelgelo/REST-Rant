const React = require('react');
const Def = require('../default');

function index (data) {
  let placesFormatted = data.places.map((place, index) => {
    return (
      <div className="col-sm-6" key={index}>
        <h2>
          <a href={`places/${index}`}>{place.name}</a>
        </h2>
        <p>{place.cuisines}</p>
        <img src={place.pic} 
          alt={place.name} 
          width="500"
          height="400"
         />
        <p>Located in {place.city}, {place.state}</p>
      </div>
    )
  })

  return (
    <Def>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            <div className="row">
              {placesFormatted}
            </div>
        </main>
    </Def>
  )
}
  
module.exports = index;