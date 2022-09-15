import './SearchBar.css'

const SearchBar = () => {
  return(
    <div className="searchBar">
      <input className="searchBarInput" type="text" spellcheck="false" placeholder="Search..."/>
      <button className="searchBarButton">Press me</button>
    </div>
  )
}

export default SearchBar