import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({searchFood}) {

 const [searchValue, setSearch] = useState('');

const handleSearchInput = (e) => {  
    setSearch(e.target.value)
    searchFood(e.target.value);
} 



  return (
    <>

      <label>Search</label>
      <Input value={searchValue} type="text" onChange={handleSearchInput} />
    </>
  );
}

export default Search;