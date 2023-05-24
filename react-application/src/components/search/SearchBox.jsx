import './SearchStyle.css'

const SearchBox = ({ onSearchChange }) => {
    return (
        <div>
            <input type="search"
                className='search-box monster-search-box height-5 '
                placeholder="Search Monsters"
                onChange={onSearchChange}
            />
        </div>
    )
}

export default SearchBox
