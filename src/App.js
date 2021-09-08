import React from 'react'
import { connect } from 'react-redux'

const App = (props) => {

  return (
    <div>
      <h1>ToDo</h1>
      <div>
      <input/>
      <button>Add</button>
      </div>
      <hr />
      <div>
        {props.liste.map(item => (
          <div key={item.id} className={item.tamamlandı ? "yapıldı" : ""}>
            {item.baslık}
          </div>
        ))}
      </div>
      <button>Tamamlananları Temizle</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    liste : state.liste
  }
}


export default connect(mapStateToProps)(App)

