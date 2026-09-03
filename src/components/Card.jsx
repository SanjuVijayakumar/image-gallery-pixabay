import React from 'react'

const Card = () => {
return ( 
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Image */}
        <div className="relative overflow-hidden">
            <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="Nature"
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>

            {/* Photo label */}
            <div className="absolute bottom-3 left-4">
            <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-purple-600 shadow">
                Nature
            </span>
            </div>
        </div>

        {/* Card Content */}
        <div className="p-5">

            {/* Title */}
            <h2 className="mb-2 text-xl font-bold text-gray-800">
            Photo by John Doe
            </h2>

            {/* Description */}
            {/* <p className="mb-5 text-sm text-gray-500">
            Beautiful nature photography captured in a peaceful environment.
            </p> */}

            {/* Stats */}
            <ul className="space-y-3">

            <li className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-1">
                <strong className="text-gray-600">Views</strong>
                <span className="font-semibold text-purple-600">4,000</span>
            </li>

            <li className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-1">
                <strong className="text-gray-600">Downloads</strong>
                <span className="font-semibold text-purple-600">300</span>
            </li>

            <li className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-1">
                <strong className="text-gray-600">Likes</strong>
                <span className="font-semibold text-purple-600">400</span>
            </li>

            </ul>

            {/* Hashtags */}
            <div className="mt-5 flex flex-wrap gap-2 border-t pt-4">
            <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
                #nature
            </span>

            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                #photography
            </span>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                #landscape
            </span>

            <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-600">
                #beautiful
            </span>
            </div>

        </div>
    </div>
)
}

export default Card
