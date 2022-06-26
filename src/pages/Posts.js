import React,{useState,useEffect} from 'react';
import {PostList} from '../components/PostList';
import {Link} from 'react-router-dom'

const Posts = ({posts}) => {

  const [inputValue, setInputValue] = useState('')
  const [isResults, setisResults] = useState(true);
  
  const handleChange = ({target}) => {
    let lowerCase = target.value.toLowerCase();
    setInputValue(lowerCase)
  }
    
  const filteredData = posts.filter((el) => {
    if (inputValue === '') {
        return el;
    }
    else {
        return el.title.toLowerCase().includes(inputValue)
    }})

    useEffect(() =>{
      if(filteredData.length == 0){setisResults(false)}
      if(filteredData.length != 0){setisResults(true)}
    },[inputValue])
    return(
    <>
        <div className='search_wrapper'>
            <input placeholder='Find here:' className='search' type='search' value={inputValue} onChange={handleChange}/>
        </div>
        <div className='Stories-Cards_wrapper'>
          {!isResults && <h1 className='Stories-NoResult'>No result</h1>}
          <PostList filteredData={filteredData}/>
        </div>
        <div className='Stories-Cart_wrapper'>

        </div>
    </>
  );
}

export {Posts} ;
