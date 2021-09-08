import React, { useState } from "react";
import { connect } from "react-redux";
import { listeyeEkle } from "./actions";

const App = (props) => {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>ToDo</h1>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => props.listeyeEkle(text)}>Add</button>
      </div>
      <hr />
      <div>
        {props.liste.map((item) => (
          <div key={item.id} className={item.tamamlandı ? "yapıldı" : ""}>
            {item.baslık}
          </div>
        ))}
      </div>
      <button>Tamamlananları Temizle</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    liste: state.liste,
  };
};

export default connect(mapStateToProps, { listeyeEkle })(App);
