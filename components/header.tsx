import Link from "next/link";

const header = () => {
    return ( 
        <div>
             <nav className="bg-gray-700">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        <Link legacyBehavior href="/">
          <a className="text-base md:text-2xl">Movie
            <span className="text-red-600">Time</span>
          </a>
        </Link>
      </div>
    </nav>
        </div>
     );
}
 
export default header;