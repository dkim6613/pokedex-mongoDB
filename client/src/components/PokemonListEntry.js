import App from './App.jsx';
import React from 'react';
import Parse from './Parse.js';

// var PokemonListEntry = (props) => (
//   <div>
//     <h3>
//       {`${props.pokemon.name}`}
//     </h3>
//     <h4>{`${props.pokemon.type}`}</h4>
//     <img src={`${props.pokemon.img}`}/>
//   </div>
// )


class PokemonListEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.pokemon.name,
      showForm: 0,
      id: this.props.pokemon.id
    }


    this.handleDelete = this.handleDelete.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFormChange() {
    this.setState({ showForm: 1 })
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value })

  }
  handleSubmit() {
    //make that put request
    console.log('new name:', this.state.name)
    Parse.put(this.state.id, this.state.name)
    this.setState({ showForm: 0 })
  }
  handleDelete() {
    Parse.delete(this.state.id)
    this.props.onDelete()
    this.setState({ showForm: 0 })
  }

  render() {
    return (
      <>
        {this.state.showForm === 0 &&
          <div>
            <h3 onClick={this.handleFormChange}>{this.state.name}</h3>
            <h4>{`${this.props.pokemon.type}`}</h4>
            <img src={`${this.props.pokemon.img}`} />
          </div>
        }
        {this.state.showForm === 1 &&
          <div>
            <form>
              <input type="text" value={this.state.name} onChange={this.handleChangeName} />
            </form>
            <button onClick={this.handleSubmit}>Submit</button>
            <button onClick={this.handleDelete}>Delete</button>
            <h4>{`${this.props.pokemon.type}`}</h4>
            <img src={`${this.props.pokemon.img}`} />
          </div>
        }
      </>
    )
  }
}

export default PokemonListEntry