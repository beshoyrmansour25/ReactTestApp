import React, { Component } from 'react';
import '../style/App.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    //onClick={this.onInputClick}
    render() {
        return (
            <div>
                <input className="form-control" onChange={event => this.onInputChange(event.target.value)} />
                <h1 className="App-title"> the Value Is : {this.state.term} </h1>
            </div>
        );
    }
    // () => alert('Clicked')
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChanged(term);
    }
    onInputClick(event) {
        //event.target.value = 'OOOOOOOOOOO';
    }
};

export default SearchBar;
