import React from 'react';
import ReactDOM from 'react-dom';
import Parse from './Parse.js';
import PokemonList from './PokemonList.js';
import PokemonListEntry from './PokemonListEntry.js';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allPokemon: [],
      showForm: 0,
      name: '',
      type: '',
      img: ''
    }
    this.handleNewPokemonImg = this.handleNewPokemonImg.bind(this)
    this.handleNewPokemonType = this.handleNewPokemonType.bind(this)
    this.handleNewPokemonName = this.handleNewPokemonName.bind(this)
    this.handleShowForm = this.handleShowForm.bind(this)
    this.handleAddPokemon = this.handleAddPokemon.bind(this)
    this.handleChangeShowAll = this.handleChangeShowAll.bind(this)
    this.handleChangeOptionType = this.handleChangeOptionType.bind(this)
  }

  componentDidMount() {
    Parse.get(res => {
      this.setState({ allPokemon: res })
    })
  }

  handleChangeShowAll() {
    Parse.get(res => {
      this.setState({ allPokemon: res })
    })
  }

  handleChangeOptionType(e) {
    const results = this.state.allPokemon.filter(pokemon => pokemon.type === e.target.value)
    this.setState({ allPokemon: results })
  }

  handleNewPokemonName(e) {
    this.setState({ name: e.target.value })
  }
  handleNewPokemonType(e) {
    this.setState({ type: e.target.value })
  }
  handleNewPokemonImg(e) {
    this.setState({ img: e.target.value })
  }

  handleAddPokemon() {
    console.log(this.state.name, this.state.type, this.state.img)
    Parse.postPokemon(this.state.name)
    Parse.postType(this.state.type)
    Parse.postImage(this.state.img)
    Parse.get((res) => {
      this.setState({ allPokemon: res })
    })
    this.setState({ showForm: 0 })
  }

  handleShowForm() {
    this.setState({ showForm: 1 })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Pokemon!</h1>
          <button onClick={this.handleChangeShowAll}>Show All</button>
          <select id="type" onChange={this.handleChangeOptionType}>
            <option>Sort by Type</option>
            <option>Grass</option>
            <option>Fire</option>
            <option>Water</option>
            <option>Normal</option>
            <option>Poison</option>
            <option>Electric</option>
            <option>Ground</option>
            <option>Fighting</option>
            <option>Psychic</option>
            <option>Rock</option>
            <option>Ghost</option>
            <option>Dragon</option>
          </select>
          <button onClick={this.handleShowForm}>INSERT</button>
          {this.state.showForm === 1 &&
            <div>
              <form>
                <label>Name:
                  <input type="text" value={this.state.name} onChange={this.handleNewPokemonName} />
                </label>
                <label>Type:
                  <input type="text" value={this.state.type} onChange={this.handleNewPokemonType} />
                </label>
                <label>Img URL:
                  <input type="text" value={this.state.img} onChange={this.handleNewPokemonImg} />
                </label>
              </form>
              <button onClick={this.handleAddPokemon}>Add Pokemon</button>
            </div>
          }
          <div>
            <PokemonList allPokemon={this.state.allPokemon} onDelete={this.handleChangeShowAll} />
          </div>
        </div>
      </div>
    )
  }

}

export default App;