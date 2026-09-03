import React from 'react'

const Header = () => {
return ( 
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md"> 
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

            {/* Logo */}
            <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 text-2xl shadow-lg">
                📸
            </div>

            <div>
                <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
                Pixel<span className="text-purple-600">Gallery</span>
                </h1>
                <p className="text-xs text-gray-500">
                Discover beautiful images
                </p>
            </div>
            </div>

            {/* Navigation */}
            <nav className="hidden items-center gap-8 md:flex">
            <a
                href="#gallery"
                className="font-medium text-gray-600 transition hover:text-purple-600"
            >
                Gallery
            </a>

            <a
                href="#popular"
                className="font-medium text-gray-600 transition hover:text-purple-600"
            >
                Popular
            </a>

            <a
                href="#about"
                className="font-medium text-gray-600 transition hover:text-purple-600"
            >
                About
            </a>
            </nav>

            {/* CTA */}
            <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg">
            Explore Photos
            </button>

        </div>
    </header>

)}

export default Header