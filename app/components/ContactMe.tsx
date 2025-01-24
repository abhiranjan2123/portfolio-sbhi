"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function CustomContactDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialogElement = dialogRef.current
    if (dialogElement) {
      if (isOpen) {
        dialogElement.showModal()
      } else {
        dialogElement.close()
      }
    }
  }, [isOpen])

  const handleClose = () => setIsOpen(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-5 rounded-3xl bg-black mt-4 w-44  text-white"
      >
         <div className="flex gap-2 justify-center items-center">
          <p className="font-semibold">Hire Me</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </div>
      </button>
      <dialog
        ref={dialogRef}
        className="p-10 max-w-sm rounded-lg shadow-lg backdrop:bg-black backdrop:bg-opacity-50"
        onClick={(e) => {
          if (e.target === dialogRef.current) handleClose()
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
          <p className="text-center mb-6">How would you like to contact me?</p>
          <div className="flex justify-center space-x-8">
          <a
              href="tel:+7760199690"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/call.svg" alt="LinkedIn" width={44} height={44} />
            </a>
            <a href="mailto:abhishekranjanagoudag@gmail.com" className="hover:opacity-80 transition-opacity">
              <Image src="/svg/gmail.svg" alt="Email" width={44} height={44} />
            </a>
            <a
              href="https://wa.me/+919535585524"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={44} height={44} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhishekranjanagouda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image src="/svg/linkedin.svg" alt="LinkedIn" width={44} height={44} />
            </a>
          </div>
        </div>
        <button
          onClick={handleClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 focus:outline-none font-extrabold"
        >
          ✕
        </button>
      </dialog>
    </>
  )
}

