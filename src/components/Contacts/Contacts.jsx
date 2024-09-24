import React from 'react'
import exterior from '../../assets/exterior.png'
import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'

const Contacts = () => {
  return (
    <section className='top-0 w-full h-full bg-yellow-800/40' id='contacts'>
        <div className='text-white text-center text-3xl font-bold py-14 mb-4'>
            <h1>Kontak Kami</h1>
        </div>
        {/* Contacts Section */}
        <div className='container bg-yellow-800/20 p-16 max-w-full'>
        <div className='lg:grid lg:grid-cols-2 lg:justify-center lg:gap-4'>
        <div className='lg:self-center'>
            {/* deskripsi */}
            <div className='pl-16 lg:w-auto'>
                <figure className='flex gap-3 pt-4 pb-4'>
                  <img className='w-auto h-10 my-auto' width="50" height="50" src={exterior} alt="exterior"/>
                  <div>
                    <blockquote>
                      <h3 className='text-nowrap font-semibold'>Alamat Kami</h3>
                    </blockquote>
                    <figcaption>
                      <p>
                        Jl. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quo, et aliquid.
                      </p>
                    </figcaption>
                  </div>
                </figure>
                <figure className='flex gap-3 pt-4 pb-4'>
                  <img className='w-auto h-10 my-auto' width="50" height="50" src={phone} alt="phone"/>
                  <div>
                    <blockquote>
                      <h3 className='text-nowrap font-semibold'>Kontak Kami</h3>
                    </blockquote>
                    <figcaption>
                      <p>
                        +628 1234567890
                      </p>
                    </figcaption>
                  </div>
                </figure>
                <figure className='flex gap-3 pt-4 pb-4'>
                    <img className='w-auto h-10 my-auto' width="50" height="50" src={mail} alt="mail"/>
                  <div>                  
                    <blockquote>
                      <h3 className='text-nowrap font-semibold'>Email</h3>
                    </blockquote>
                    <figcaption>
                      <p>shizucha@business.com</p>
                    </figcaption>
                  </div>
                </figure>
            </div>
            {/* form */}
            </div>
            <div className='lg:mr-7 lg:w-full'>
                <form className='flex flex-col gap-4'>
                    <input type="text" placeholder='Nama Lengkap' className='rounded-lg p-2'/>
                    <input type="email" placeholder='Email' className='rounded-lg p-2'/>
                    <input type="text" placeholder='Subjek' className='rounded-lg p-2'/>
                    <textarea rows='5' placeholder='Pesan' className='rounded-lg p-2'></textarea>
                    <button className='bg-yellow-700/60 rounded-lg p-2 text-white hover:bg-yellow-700/70 hover:text-slate-200'>Kirim</button>
                </form>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Contacts