import { CiHeart } from 'react-icons/ci'
import img from '../../public/assets/book-logo.png'
import { IoCartOutline } from 'react-icons/io5'

const ViewBookDetails = () => {
  return (
    <>
      <div className="py-12 px-4 bg-[#50C878] flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 p-5 px-3 bg-gray-700 text-white flex justify-between">
            <img src={ img } alt="" className='w-[90%]' />

            <div className='w-[8%] flex flex-col items-center'>
              <CiHeart className='text-4xl bg-black rounded-full p-1 cursor-pointer' />
              <IoCartOutline className='text-4xl mt-3 bg-black rounded-full p-1 cursor-pointer' />
            </div>
          </div>
          
          <div className="w-full bg-slate-800 text-white p-5">
            <h1 className='font-semibold text-2xl'>Pyschology of Money</h1>
            <p className='py-4 text-lg'>
                "The Psychology of Money" by Morgan Housel is a thought-provoking book that delves into the behavioral psychology of money management, revealing how our emotions and biases significantly impact our financial decisions. Through a series of 19 short stories, Housel masterfully illustrates the importance of financial independence, long-term thinking, and the ability to manage risk. He argues that understanding money's psychological aspects is more crucial than mastering financial models or investment strategies. By exploring the complex relationships between money, behavior, and life outcomes, Housel offers valuable insights and practical wisdom on achieving financial peace of mind and independence. His engaging narrative makes the book an enjoyable and enlightening read.
            </p>
            <p className='mt-2 text-zinc-100 font-xs font-semibold'>₹ 500</p>
            <button className='bg-gray-700 p-4 mt-4 rounded hover:bg-black transition duration-300 ease-in-out'>Add to Cart</button>
          </div>
      </div>
    </>
  )
}

export default ViewBookDetails