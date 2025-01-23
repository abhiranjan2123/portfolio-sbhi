"use client"
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 rounded-t-xl">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Abhishek RanjanaGouda G</h3>
            <p className="mb-4">Full Stack Developer</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300 transition-colors duration-300">Home</Link></li>
              <li><a href="/assets/resume.pdf" download className="hover:text-gray-300 transition-colors duration-300">Download Resume</a></li>
              </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Me</h4>
            <p className="mb-2 cursor-pointer hover:text-blue-500" 
            > <a  
            href='tel:+919535585524'
            >Phone: +91(953) 558-5524</a>
          </p>
            <p><a className="mb-2 cursor-pointer hover:text-blue-500" href='mailto:abhishekranjanagoudag@gmail.com'>Email: abhishekranjanagoudag@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <a href="https://github.com/abhiranjan2123" target='_blank' >  <p className='text-md mt-3'>Made with <span className='text-red-600'> &hearts;</span> by Abhi Ranjan </p></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

