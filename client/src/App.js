import React from 'react';
import './App.css';
import DropList from './components/DropList'

class App extends React.Component {

  state = { students: [], selectedName: '' };

  componentDidMount() {
    //console.log('App.componentDidMount');

    fetch("http://localhost:8080/all")
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result)
          this.setState({ students: result })//ALWAYS USE setState to modify state
        },
        (error) => {
          console.log("something bad happened")
        }
      )
  }

  handleNameSelect = event => {
    const { value } = event.target
    this.setState({ selectedName: value })
  }

  render() {
    console.log(this.state)
    //selectedName
    return (
      <>
        <div>

          <h1>this is connected</h1>
          
        </div>
        <div>
          {this.state.students.length > 0 ? (
            <DropList students={this.state.students} handleNameSelect={this.handleNameSelect} />

          ) : (<h1>Waiting for API...</h1>)}
        </div>
      </>

    );
  }
}

export default App;