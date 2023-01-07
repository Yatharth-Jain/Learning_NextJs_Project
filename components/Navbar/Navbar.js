import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
        <nav class="flex items-center justify-between px-4 py-3 bg-gray-800">
            <Link href="/">
              <div class="flex items-center flex-shrink-0 text-white mr-6">
              
                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
              </div>
            </Link>
                <div class=" flex-grow flex items-center w-auto">
                <div class="text-sm flex-grow">
                    <Link href="/" class="inline-block mt-0 text-gray-500 hover:text-white mr-4" passHref>
                    Home
                    </Link>
                    <Link href="/aboutus" class="inline-block mt-0 text-gray-500 hover:text-white mr-4" passHref>
                    About Us
                    </Link>
                    <Link href="#footer" class="inline-block mt-0 text-gray-500 hover:text-white mr-4" passHref>
                    Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    </div>
  )
}
