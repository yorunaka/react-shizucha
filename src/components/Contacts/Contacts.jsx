import React from 'react'

const Contacts = () => {
  return (
    <section className='top-0 w-full h-full bg-yellow-800/30'>
        <div className='text-white text-center text-3xl font-bold py-14'>
            <h1>Kontak Kami</h1>
        </div>
        {/* Contacts Section */}
        <div className='container bg-yellow-800/30 rounded-xl p-6'>
        <div className='grid grid-cols-2 gap-8 w-1/2'>
            {/* deskripsi */}
            <div className='pl-6'>
                <div className='flex gap-3 pt-4 pb-4'>
                  <div>
                    <img width="30" height="30" src="https://img.icons8.com/ios/50/exterior.png" alt="exterior"/>
                  </div>
                  <div>
                    <h3 className='text-nowrap'>Alamat Kami</h3>
                  </div>
                </div>
                <div className='flex gap-3 pt-4 pb-4'>
                  <div className=''>
                    <img width="30" height="30" src="https://img.icons8.com/ios/50/phone.png" alt="phone"/>
                  </div>
                  <div>
                    <h3 className='text-nowrap'>Kontak Kami</h3>
                  </div>
                </div>
                <div className='flex gap-3 pt-4 pb-4'>
                  <div>
                    <img width="30" height="30" src="https://img.icons8.com/ios/50/mail.png" alt="mail"/> 
                  </div>
                  <div>
                    <h3 className='text-nowrap'>Email</h3>
                  </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Contacts