import React, { useState } from 'react'

const ImageSearch = ({ searchImages }) => {  
    const [text, setText] = useState("");
    console.log(text, "image text hits");

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (text.trim() === '') return

        searchImages(text) 
        setText('')
    }
    

    return (
    <div>
        <div className="mx-auto mb-10 max-w-2xl px-4">
            <form onSubmit={handleSubmit} className="flex overflow-hidden rounded-full border border-gray-200 bg-white p-2 shadow-lg transition focus-within:ring-2 focus-within:ring-purple-500" >

                <input
                type="text"
                placeholder="Search for images..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 bg-transparent px-5 py-3 text-gray-700 outline-none placeholder"
                />

                <button type="submit"
                    className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3 font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
                >
                    Search
                </button>
            </form>
        </div>
    </div>
  )
}

export default ImageSearch
