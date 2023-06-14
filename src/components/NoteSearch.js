import React from "react";

// class NoteSearch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onKeywordChangeEventHandler = this.onKeywordChangeEventHandler.bind(this);
//   }

//   onKeywordChangeEventHandler(event) {
//     this.props.onSearch(event.target.value);
//   }

//   render() {
//     return (
//       <div className="note-search">
//         <input type="text" placeholder="Cari catatan..." onChange={this.onKeywordChangeEventHandler} />
//       </div>
//     );
//   }
// }

function NoteSearch(props) {
  const onChange = (event) => {
    props.onSearch(event.target.value);
  };

  return (
    <div className="note-search">
      <input type="text" placeholder="Cari catatan..." onChange={onChange} />
    </div>
  );
}

export default NoteSearch;
