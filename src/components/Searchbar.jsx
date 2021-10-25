import React from 'react'

function SearchBar(props) {
    return (
        <div className="search-bar-container">
            <input
                className="search-bar"
                key="1"
                value={props.input}
                placeholder={"Search character"}
                onChange={(e) => props.update(e.target.value) }
            />
        </div>
    );
}

export default SearchBar;
