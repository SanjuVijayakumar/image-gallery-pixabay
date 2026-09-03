import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300">

        <div className="mx-auto max-w-7xl px-6 py-12">

            <div className="grid gap-10 md:grid-cols-3">

            {/* Brand */}
            <div>
                <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 text-xl">
                    📸
                </div>

                <h2 className="text-xl font-bold text-white">
                    Pixel<span className="text-purple-400">Gallery</span>
                </h2>
                </div>

                <p className="max-w-sm text-sm leading-6 text-gray-400">
                Explore stunning photography and discover beautiful images
                from talented photographers around the world.
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Quick Links
                </h3>

                <ul className="space-y-3 text-sm">
                <li>
                    <a
                    href="#gallery"
                    className="transition hover:text-purple-400"
                    >
                    Gallery
                    </a>
                </li>

                <li>
                    <a
                    href="#popular"
                    className="transition hover:text-purple-400"
                    >
                    Popular Photos
                    </a>
                </li>

                <li>
                    <a
                    href="#about"
                    className="transition hover:text-purple-400"
                    >
                    About Us
                    </a>
                </li>
                </ul>
            </div>

            {/* Social */}
            <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                Follow Us
                </h3>

                <div className="flex gap-3">
                <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-purple-600"
                >
                    f
                </a>

                <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-pink-500"
                >
                    ◎
                </a>

                <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-blue-500"
                >
                    𝕏
                </a>
                </div>
            </div>

            </div>

            {/* Bottom */}
            <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            <p>
                © {new Date().getFullYear()} PixelGallery. All rights reserved.
            </p>

            <p className="mt-2">
                Images powered by Pixabay API
            </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer
