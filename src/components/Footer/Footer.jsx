import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <footer className="bg-gray-100">
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex justify-center text-teal-600">
      <Logo width="100px" />
      </div>
  
      <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
       Unlock a world of knowledge and inspiration with our dynamic blog website, where every click opens doors to new ideas and perspectives.
      </p>
  
      <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
          <Link to="/"> About </Link>  
        </li>
  
        <li>
            <Link to="/"> Careers </Link>
        </li>
  
        <li>
            <Link to="/"> History </Link>
        </li>
  
        <li>
            <Link to="/"> Services </Link>
        </li>
  
        <li>
            <Link to="/"> Projects </Link> 
        </li>
  
        <li>
            <Link to="/"> Blog </Link>  
        </li>
      </ul>
  
      <ul className="mt-12 flex justify-center gap-6 md:gap-8">
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:text-gray-700/75"
          >
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              
            </svg>
          </a>
        </li>
  
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:text-gray-700/75"
          >
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              
            </svg>
          </a>
        </li>
  
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:text-gray-700/75"
          >
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              
            </svg>
          </a>
        </li>
  
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:text-gray-700/75"
          >
            <span className="sr-only">GitHub</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              
            </svg>
          </a>
        </li>
  
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:text-gray-700/75"
          >
            <span className="sr-only">Dribbble</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer


