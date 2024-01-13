import { useState } from 'react';
import './searchbar.css';

function SearchBar({ searchMon }) {
  const [searchdata, setSearchData] = useState({ searchterm: '' });

  function update(e) {
    setSearchData({ ...searchdata, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    searchMon(searchdata.searchterm);
  }

  return (
    <div className="searchBar">
      <nav>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchterm"
            onChange={update}
            value={searchdata.searchterm}
            placeholder="Digimon Name"
          />
          <button>🔎</button>
        </form>
      </nav>
    </div>
  );
}

export default SearchBar;
