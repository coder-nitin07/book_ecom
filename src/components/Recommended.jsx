import React from "react";

const Recommended = () => {
  return (
    <div className="mx-4 md:mx-14 my-10 md:my-16">
      <div className="bg-zinc-800 text-white p-4 rounded-xl">
        <h1 className="text-2xl md:text-4xl font-semibold text-center py-4">
          Trending Books 🔥
        </h1>

        {/* CARD CONTAINER */}
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 text-black mx-6 md:mx-20 my-4 md:my-8">
          <div className="bg-white rounded-xl w-full md:w-1/3">
            <div className="m-4">
              <img
                src="https://www.madrasshoppe.com/207337-large_default/harry-potter-7-volume-children-s-paperback-boxed-set-the-complete-collection-set-of-7-volumes-jk-rowling.jpg"
                alt="Harry Potter Books"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-zinc-400 rounded-b-xl">
              <div className="p-4">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Harry Potter
                </h1>
                <p className="font-semibold text-zinc-700">By JK Rowling</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl w-full md:w-1/3">
            <div className="m-4">
              <img
                src="https://www.madrasshoppe.com/207337-large_default/harry-potter-7-volume-children-s-paperback-boxed-set-the-complete-collection-set-of-7-volumes-jk-rowling.jpg"
                alt="Harry Potter Books"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-zinc-400 rounded-b-xl">
              <div className="p-4">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Harry Potter
                </h1>
                <p className="font-semibold text-zinc-700">By JK Rowling</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl w-full md:w-1/3">
            <div className="m-4">
              <img
                src="https://www.madrasshoppe.com/207337-large_default/harry-potter-7-volume-children-s-paperback-boxed-set-the-complete-collection-set-of-7-volumes-jk-rowling.jpg"
                alt="Harry Potter Books"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-zinc-400 rounded-b-xl">
              <div className="p-4">
                <h1 className="text-xl md:text-2xl font-semibold">
                  Harry Potter
                </h1>
                <p className="font-semibold text-zinc-700">By JK Rowling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
