import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  // API AREA
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setMonsters(users))
  }, [])


  // SEARCH CONVERT LOWER CASE AREA
  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  // MONSTER NAME CONVERT TO LOWER CASE AREA

  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
    // filitrelenen monster isimlerini küçük harfe çevir ve aratılanlar git ve
    // searcField içerisinde varsa getir
  })

  return (
    <>
      <h1 className="app-title ">Monster Roledex</h1>
    </>
  );
}

export default App;
