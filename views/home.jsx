const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
                <h1>HOME</h1>
                <a href="/places" className='btn btn-primary'>Places page</a>
          </main>
      </Def>
    )
}  

module.exports = home
