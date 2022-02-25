import React from 'react';
import './SearchPanel.css';
import SearchBar from './SearchBar'
import './SearchBar.css';

export default function SearchPanel() {
  return (
    <form className='searhpanel'>
        <h1> Zoek jouw vinyl plaat</h1>
        <SearchBar/> 
    </form>
  );
}; 