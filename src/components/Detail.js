import React from 'react'
import data from '../data/data.json'
import {useState} from 'react'

const Detail = () => {
    const [foods, setFoots] = useState(data);
  return (
    <>
        <div className='max-w-[1640px] mx-auto p-4 py-12'>
            <div className='my-3'>
                <button>BACK</button>
            </div>
            <div className='bg-blue-200 shadow-xl w-full h-screen py-3 px-3 rounded-md flex justify-between'>
                <div className=''>
                    <div className=' '>
                        <img className='w-[479px] h-[319px] object-cover rounded-md'
                        src="https://images.unsplash.com/photo-1587174147003-eb7dc051122b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwyfHxzaG9wJTIwcmVzdGF1cmFudCUyMGJyZWFkfGVufDB8fHx8MTY0NjM2Nzg3Mg&ixlib=rb-1.2.1&q=80&w=1080" alt="" />
                    </div>
                    <div className='w-[479px] bg-white p-3'>
                        <div className='flex justify-between'>
                            <h1 className='pb-2 font-bold'>
                                Bistro Bazaar
                            </h1>
                            <span className='text-blue-600 font-bold'>
                                4.1
                            </span>
                        </div>
                        <div className='w-full pb-2'>
                            <p className='flex'>Address: 
                                <span className='ml-20 leading-6 tracking-wide left-[170px] break-words'>180 Soi Sensuk Phrachasongkro Din Daeng Din Daeng, Bangkok</span>
                            </p>
                        </div>
                        <div className='w-full pb-2'>
                             <p className=''>Opening Hour: 
                                <span className='ml-10'>Monday: 10:00 AM - 6:00 PM</span>
                                <span className='ml-[142px] whitespace-pre'> Tuesday: 10:00 AM - 6:00 PM</span>
                                <span className='ml-[146px] '> Wednesday: 10:00 AM - 6:00 PM</span>
                                <span className='ml-[146px] '> Thursday: 10:00 AM - 6:00 PM</span>
                                <span className='ml-[147px] '> Friday: 10:00 AM - 6:00 PM</span>
                                <span className='ml-[146px] '> Saturday: Closed</span>
                                <span className='ml-[142px] whitespace-pre'> Sunday: Closed</span>
                            </p>  
                        </div>
                    </div>
                </div>

                <div className='w-[500px] bg-white ml-2 rounded-md flex flex-col items-center p-3'>
                    <p className='fond-bold '>
                        Images
                    </p>
                    <div>
                        <img className='w-[200px] h-[200px] object-cover'
                        src="https://images.unsplash.com/photo-1588280991458-d759882787cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY29mZmVlfGVufDB8fHx8MTY0NjM2Nzg3NQ&ixlib=rb-1.2.1&q=80&w=1080" alt="" />
                        <img className='w-[200px] h-[200px] object-cover' 
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwY29mZmVlfGVufDB8fHx8MTY0NjM2Nzg3NQ&ixlib=rb-1.2.1&q=80&w=1080" alt="" />
                        <img className='w-[200px] h-[200px] object-cover' 
                        src="https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDcxMTl8MHwxfHNlYXJjaHwzfHxyZXN0YXVyYW50JTIwY29mZmVlfGVufDB8fHx8MTY0NjM2Nzg3NQ&ixlib=rb-1.2.1&q=80&w=1080" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Detail