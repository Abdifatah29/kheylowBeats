import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl,InputGroup} from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }

    search = () => {
        console.log('clicked');
    }
  render() {
        return (
            <div className="App">
                <div className="App-title">KheylowBeats</div>
                <FormGroup>
                <InputGroup>
                        <FormControl
                        type="text"
                        placeholder="Search for an Artist... ."
                        value={this.state.query}
                        onChange={event => {this.setState({query: event.target.value})}}
                        onKeyPress={event => {
                            if (event.key === 'Enter')
                            this.search()
                        }}

                        />
                    <InputGroup.Append>
                        <FaSearch
                            onClick={this.search}
                        />
                    </InputGroup.Append>
                </InputGroup>
                </FormGroup>
                <div className="profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="gallary">Gallery</div>
            </div>
        );
    }
  }

export default App;
