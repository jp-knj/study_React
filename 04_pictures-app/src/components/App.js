import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Componet {
    state = { image: [] };

    onSearchSubmit = async term => {
        const response = await unsplash.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
        });
        this.setState({ images: response.data.result });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
