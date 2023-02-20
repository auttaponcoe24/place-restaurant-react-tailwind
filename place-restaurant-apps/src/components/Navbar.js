import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {useState} from 'react'
import Card from "./Card";

const Navbar = () => {
    let [search, setSearch] = useState('');
    let [selects, setSelects] = useState('');

    

  return (
    <>
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            
            <div>
                <h1 className='text-bold text-lg lg:text-xl'>Place List</h1>
            </div>
            

            <div className='flex justify-between items-center'>
                {/* List Restaurant */}
                <div className='border border-black  rounded-full flex items-center px-2 w-[200px] sm:w-[200px] lg:w-[200px] '>
                    <select 
                    className='bg-transparent p-2 w-full text-md text-gray-400' name='Restaurant'
                    onChange={(e) => setSelects(e.target.value)}
                    >
                        <option value="restaurant">Restaurent</option>
                        <option value="cafe">Cafe</option>
                        <option value="bakery">Bakery</option>
                    </select>
                </div>
                <span className='mx-2 text-xl text-bold'>|</span>
                {/* Search Input */}
                <div className='border border-black rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                    <input onChange={(e) => setSearch(e.target.value) } 
                    
                    className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search name...' />
                    
                    <AiOutlineSearch size={25} />
                </div>
            </div>
            
        </div>
        <Card searchName={search} selectName={selects}/>
    </>
    
  )
}

export default Navbar