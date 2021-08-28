import React from 'react';
import './search-box.styles.css';
// ta khog su dung state (props) vi state khong thay doi!!!
export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input
            className='searchBox'
            type="search"
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}


// {e => {    this.setState({ searchField: e.target.value });}}