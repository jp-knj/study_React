import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Componet {
    async onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID Fi9_st6VmbMSu3NruyH97uoYOI7Iz1GN33xOvaOKKDc'
            }
        });
        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;
