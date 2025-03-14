function AdminDashBordPosts() {
    return (
      <section className='w-full h-full bg-black'>
        <div className='w-full h-full bg-red-400 flex flex-col p-10'>
          
          <div className="w-full flex justify-end mb-4">
            <button className="p-2 hover:text-white font-semibold bg-green-800 rounded-lg hover:bg-green-600 transition duration-300 active:bg-green-800">
              Create Poster
            </button>
          </div>

         <div className="w-full h-1/4 p-1 bg-amber-300 flex flex-row">
            <div className="w-11/12 h-full bg-red-300">

            </div>
            <button className="p-2 hover:text-white font-semibold bg-green-800 rounded-lg hover:bg-green-600 transition duration-300 active:bg-green-800">
              Create Poster
            </button>
         </div>

        </div>
      </section>
    );
  }
  
  export default AdminDashBordPosts;
  