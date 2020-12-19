import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyCWS4dsK2LSasr_NzzWDhiu3Bs_4AZE6F0';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit =  async term  => {
    const response =  await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    console.log('From the App!', video);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideSelect={this.onVideoSelect} videos={ this.state.videos}/>
      </div>
    );
  }
}

export default App;
