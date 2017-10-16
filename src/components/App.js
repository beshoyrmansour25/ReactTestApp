import React, { Component } from 'react';
import Reactlogo from '../assets/logo.svg';
import youtubelogo from '../assets/youtube-high-resolution-logo-download.png';
import '../style/App.css';
import _ from 'lodash';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_details';

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyATLfEq4n6oFgwDRqrepYWD0fuYmnqyPqA';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }; this.videoSearch(' ')
  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term: term
    },
      (videos) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
        });
      });
  }
  //video={this.state.videos[0]}
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div className="App">
        <header className="App-header">
          <img src={Reactlogo} className="App-logo" alt="logo" />
          <img src={youtubelogo} className="youtube-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Video App</h1>
          <SearchBar onSearchTermChanged={term => this.videoSearch(term)} />

        </header>
        <div className="container">
          <div className="row">
            <VideoDetail video={this.state.selectedVideo} />

            <VideoList
              OnVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos} />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
