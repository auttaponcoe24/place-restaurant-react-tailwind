import React from 'react'
import data from '../data/data.json'
import { useState } from 'react'
import {FaCircle, FaRegCalendarAlt} from 'react-icons/fa'
import {IoIosArrowBack ,IoIosArrowForward} from 'react-icons/io'


const Card = ({searchName, selectName}) => {
    
    // console.log(searchName); //props

    // console.log(data)
    const [foods, setFoots] = useState(data);
    var [days] = useState(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

    function CheckAMorPM(time){
        if(time.search(":") > -1){
            return ((parseInt(time.split(":")[0])*60) + parseInt(time.split(":")[1]) <= 720) ?
            `${time} AM` : `${time} PM`;
        }else{
            return time;
        }
    }

    // const selectFilter = (category) => {
    //     setFoots(
    //         data.filter((item) => {
    //             item.map((item, index) (
                    
    //             ))
    //             console.log(item.categories)
    //         })
    //     )
    // }
    console.log(selectName);
    


  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12'>
        {/* Display card */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4'>
            {foods
                .filter((item) => {
                    return searchName.toLowerCase() === ''
                    ? item
                    : item.name.toLowerCase().includes(searchName);
                    
                })
            
                .map((item, index) => (
                <div key={index} className='w-[400px] h-[225px] border shadow-lg rounded-lg hover:scale-y-105 duration-300 flex flex-col'>
                    <div className='flex justify-start items-center m-3 '>
                        <img 
                        className='w-[80px] h-[60px] object-cover rounded-lg mx-2'
                        src={item.profile_image_url} alt={item} />
                        <div className='flex flex-col w-full'>
                            <p className='text-bold text-1xl'>{item.name}</p>
                            <div className='flex justify-between items-center'>
                                <div className='flex justify-center items-center'>
                                    <FaRegCalendarAlt className='mr-2' />
                                    {item.operation_time.map((timeData, indexTime) => (
                                        timeData.day === days[new Date().getDay()] ? timeData.time_open.search(":") > -1 ?
                                        <span className='text-sm' key={`indexTime_${indexTime}`} > {CheckAMorPM(timeData.time_open)} - {CheckAMorPM(timeData.time_close)}</span> :
                                        <span className='text-sm' key={`indexTime_${indexTime}`}>Close</span> : null
                                    ))}
                                </div>
                                
                                <div className='flex justify-center items-center text-sm text-blue-700 text-bold mx-2'>
                                    <FaCircle className='mx-1' size={10} />{item.rating}</div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full mx-auto'>
                        
                        {item.images.map((image, i) => (
                            <div key={i} className='shadow-xl'>
                                <img src={image} alt={i} 
                                className=' w-[120px] h-[120px] object-cover rounded-l-lg rounded-r-lg'/>
                            </div>
                        ))}
 
                    </div>
                </div>
            ))}
            
        </div>
        <div className='flex justify-center items-center mt-7'>
            
            <IoIosArrowBack size={25}
            className='cursor-pointer'
            />
            
            <div className='flex justify-center items-center mx-3 bg-blue-700 w-5 h-5 rounded-full'>
                <p className='text-white text-sm'>1</p>
            </div>

            <IoIosArrowForward size={25} 
            className='cursor-pointer'
            />

            
        </div>
        
    </div>
  )
}

export default Card