const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main className='p-3'>
                <h1>HOME</h1>
                <div>
                    <img src="/images/chia-fruit-drink.jpg" 
                        alt="Chia Fruit Shake"
                        width='500' />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                </div>

                <a href="/places" className='btn btn-primary'>Places page</a>
            </main>
      </Def>
    )
}  

module.exports = home
