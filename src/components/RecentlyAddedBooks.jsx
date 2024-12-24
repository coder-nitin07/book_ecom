import { Link } from 'react-router-dom'
import logo from '../../public/assets/book-logo.png'
import ViewBookDetails from './ViewBookDetails'

const RecentlyAddedBooks = () => {
    return (
        <>
            <div className="py-12 px-4 bg-[#50C878]">
                <h4 className="text-3xl text-gray-100">Recently Added Books</h4>

                <div className="my-8 grid grid-cols-2 md:grid-cols-4 gap-4 ">
                    <div className="bg-zinc-800 h-[100%] rounded p-4 flex flex-col bg-[#295856]">
                        <div className="bg-zinc-900 rounded flex items-center justify-center">
                            <img src={logo} alt="" />
                        </div>
                        <h2 className='mt-4 text-xs text-zinc-100 font-semibold'>Pyschology of Money</h2>
                        <p className='mt-2 text-zinc-100 font-xs font-semibold'>by Morgan Housel</p>
                        <p className='mt-2 text-zinc-100 font-xs font-semibold'>₹ 500</p>
                    </div>

                    <div className="bg-zinc-800 h-[100%] rounded p-4 flex flex-col bg-[#295856]">
                        <div className="bg-zinc-900 rounded flex items-center justify-center">
                            <img src={logo} alt="" />
                        </div>
                        <h2 className='mt-4 text-xs text-zinc-100 font-semibold'>Pyschology of Money</h2>
                        <p className='mt-2 text-zinc-100 font-xs font-semibold'>by Morgan Housel</p>
                        <p className='mt-2 text-zinc-100 font-xs font-semibold'>₹ 500</p>
                    </div>

                    <div className="bg-zinc-800 h-[100%] rounded p-4 flex flex-col bg-[#295856]">
                        <div className="bg-zinc-900 rounded flex items-center justify-center">
                            <img src={logo} alt="" />
                        </div>
                        <h2 className='mt-4 text-xs text-zinc-100 font-semibold'>Pyschology of Money</h2>
                        <p className='mt-2 text-zinc-100 font-xs font-semibold'>by Morgan Housel</p>
                        <p className='mt-2 text-zinc-100 font-xs font-semibold'>₹ 500</p>
                    </div>

                    <div className="bg-zinc-800 h-[100%] rounded p-4 flex flex-col bg-[#295856]">
                        <div className="bg-zinc-900 rounded flex items-center justify-center">
                            <img src={logo} alt="" />
                        </div>
                        <h2 className='mt-4 text-xs text-zinc-100 font-semibold'>Pyschology of Money</h2>
                        <p className='mt-2 text-zinc-100 font-xs font-semibold'>by Morgan Housel</p>
                        <p className='mt-2 text-zinc-100 font-xs font-semibold'>₹ 500</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentlyAddedBooks