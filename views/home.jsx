const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
        <head>
        <link rel="stylesheet" href="/css/style.css"/>
        </head>
          <main>
              <h1>HOME</h1>
              <a href="/places">
                     <button className="btn-primary">Places Page</button>
              </a>

          </main>
      </Def>
    )
  }
  

module.exports = home
