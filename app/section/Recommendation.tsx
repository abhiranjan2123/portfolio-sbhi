"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, ArrowRight, ArrowLeftIcon as ArrowIcon } from "lucide-react"
import { useRef } from "react"

const testimonials = [
  {
    name: "B R Bhargav",
    role: "middleware and Linux Analyst",
    image: "https://ik.imagekit.io/5lnqg1qxwh/bhargav.jpg?updatedAt=1737626359151",
    content: "one of the strongest working individuals, and is a rapidly adaptive being that makes the best of the given cards at any time.",
  },
  {
    name: "Naganath Kousik M",
    role: "Data Specilist",
    image: "https://ik.imagekit.io/5lnqg1qxwh/kousik.jpg?updatedAt=1737626482375",
    content: "I wholeheartedly endorse Abishek for his exceptional proficiency in React.js, Flutter, Django, Django REST Framework, and Python. Throughout our collaboration, Abishek consistently demonstrated a mastery of these technologies, delivering high-quality solutions that exceed expectations. His expertise in React.js and Flutter is evident in his ability to create intuitive and visually appealing user interfaces, while his proficiency in Django Framework enables him to build robust and scalable systems. Abishek is not only technically skilled but also a collaborative team player, making him an invaluable asset to any project. I highly recommend Abishek for any development endeavor requiring expertise in these technologies.",
  },
  {
    name: "Altamish Chowdhury",
    role: "Solution Engineer",
    image: "https://ik.imagekit.io/5lnqg1qxwh/alt.jpg?updatedAt=1737626700330",
    content: "I haven't had the pleasure of directly working alongside Abhishek, but I've consistently admired the impressive skills he brings to the table and how he adeptly applies them. His dedication, professionalism, and knack for delivering results speak volumes about his capabilities. Without hesitation, I highly recommend Abhishek for any endeavor he undertakes.",
  },
]

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      })
    }
  }

  const trimContent = (content: string, wordLimit: number = 40) => {
    const words = content.split(' ')
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'
    }
    return content
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold"
          >
            What My <span className="text-gray-400">Friends & Colleagues</span> Say
          </motion.h2>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-4 rounded-full border hover:bg-gray-50 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-4 rounded-full bg-maincolor container text-black transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`min-w-[300px] md:min-w-[400px] p-8 rounded-3xl flex flex-col ${
                index === 1 ? "bg-black" : "bg-gray-50"
              }`}
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className={`font-semibold ${index === 1 ? "text-white" : "text-gray-900"}`}>
                    {testimonial.name}
                  </h3>
                  <p className={index === 1 ? "text-white/80" : "text-gray-600"}>{testimonial.role}</p>
                </div>
              </div>

              <p className={`mb-6 ${index === 1 ? "text-white" : "text-gray-600"}`}>
                {trimContent(testimonial.content)}
              </p>

              <div className="mt-auto">
                <button
                  className={`flex items-center gap-2 ${
                    index === 1 ? "text-white" : "text-gray-900"
                  } hover:opacity-80 transition-opacity duration-300`}
                  onClick={() => window.open("https://www.linkedin.com/in/abhishekranjanagouda")}
                >
                  Know more
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Testimonials

