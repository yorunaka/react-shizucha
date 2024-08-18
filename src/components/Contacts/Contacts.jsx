import React from 'react'

const Contacts = () => {
  return (
    <section className='top-0 w-full h-full bg-yellow-700/30'>
        <div className='text-white text-center text-3xl font-bold'>
            <h1>Kontak Kami</h1>
        </div>
        {/* Contacts Section */}
        <div className='grid grid-cols-2 p-6 gap-8 w-1/2'>
            {/* deskripsi */}
            <div className='pl-6'>
                <div className='grid grid-cols-2 w-1/2 px-4 py-2'>
                <img width="50" height="50" src="https://img.icons8.com/ios/50/exterior.png" alt="exterior"/>
                <h3>Alamat Kami</h3>
                </div>
                <div className='grid grid-cols-2 w-1/2 px-4 py-2'>
                <img width="50" height="50" src="https://img.icons8.com/ios/50/phone.png" alt="phone"/>
                <h3>Kontak Kami</h3>
                <div className='grid grid-cols-2 w-1/2 px-4 py-2'>
                <img width="100" height="100" src="https://img.icons8.com/ios/50/new-post.png" alt="new-post--v1"/>
                
                <h3>Email</h3>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacts