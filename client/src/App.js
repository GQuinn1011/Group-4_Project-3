import React, { Component } from 'react';
import Dropdown from './components/Dropdown';

class App extends Component {
    constructor(){
    super()
    this.state = {
      user: [
        {
          id: 0,
          title: 'Ben',
          selected: false,
          key: 'user'
        },
        {
          id: 1,
          title: 'Gabe',
          selected: false,
          key: 'user'
        },
        {
          id: 2,
          title: 'Michael',
          selected: false,
          key: 'user'
        },
        {
          id: 3,
          title: 'Amir',
          selected: false,
          key: 'user'
        },
        {
          id: 4,
          title: 'Guest',
          selected: false,
          key: 'user'
        }
      ]
    }
  }

  toggleSelected = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp[id].selected = !temp[id].selected
    this.setState({
      [key]: temp
    })
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => item.selected = false);
    temp[id].selected = true;
    this.setState({
      [key]: temp
    })
  }

  render() {
    return (
      <div className="App">
        <p>Select your name from the dropdown box to sign in</p>

        <div className="wrapper">

          <Dropdown
            title="Select User"
            list={this.state.user}
            resetThenSet={this.resetThenSet}
          />
        </div>
      </div>
    );
  }
}

export default App;