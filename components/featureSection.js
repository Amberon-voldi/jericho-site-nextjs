function FeatureSection(){
    return (
        <div className="flex flex-col pr-10 pl-10 pb-10">
          <h2 className="mb-4 text-2xl font-bold">Features</h2>
        
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            <div className="flex items-start rounded-xl bg-black p-4 shadow-lg shadow-red-600">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
        
              <div className="ml-4">
                <h2 className="font-semibold text-white">Ai Chat</h2>
                <p className="mt-1 text-sm text-gray-500">talk all you want</p>
              </div>
            </div>
            <div className="flex items-start rounded-xl bg-black p-4 shadow-lg shadow-red-600">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
        
              <div className="ml-4">
                <h2 className="font-semibold text-white">Game Server</h2>
                <p className="mt-1 text-sm text-gray-500">get the status of your game</p>
              </div>
            </div>
            <div className="flex items-start rounded-xl bg-black p-4 shadow-lg shadow-red-600">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
        
              <div className="ml-4">
                <h2 className="font-semibold text-white">RPG</h2>
                <p className="mt-1 text-sm text-gray-500">dive and enjoy</p>
              </div>
            </div>
          
        
           
          </div>
        </div>);
}

export default FeatureSection;