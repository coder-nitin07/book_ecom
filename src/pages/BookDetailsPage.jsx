import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { books } from '../db/books.db';

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      const bookId = parseInt(id, 10);
      const foundBook = books.find(b => b.id === bookId);
      setBook(foundBook);
    }
  }, [id]);

  if (!book) {
    return <div className="text-center py-16">Loading...</div>;
  }

  return (
    <div className="bg-[#167D7F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row mb-16">
          <div className="w-full lg:w-3/5 p-5 bg-gray-700 flex justify-between mb-8 lg:mb-0 lg:mr-8">
            <img src={book.image} alt={book.title} className='w-[90%] object-cover' />
            <div className='w-[8%] flex flex-col items-center'>
              <CiHeart className='text-4xl bg-black rounded-full p-1 cursor-pointer mb-3' />
              <IoCartOutline className='text-4xl bg-black rounded-full p-1 cursor-pointer' />
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 bg-slate-800 p-5">
            <h1 className='font-semibold text-2xl mb-4'>{book.title}</h1>
            <p className='text-lg mb-4'>{book.author}</p>
            <p className='text-zinc-100 font-semibold mb-4'>₹ {book.discountedPrice.toFixed(2)}</p>
            <div className="flex items-center mb-4">
              <span className="text-[#98D7C2] mr-1">★</span>
              <span className="text-sm">{book.rating}</span>
            </div>
            <button className='bg-[#98D7C2] hover:bg-[#DDFFE7] text-[#167D7F] font-bold py-2 px-4 rounded transition-colors duration-300'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;

