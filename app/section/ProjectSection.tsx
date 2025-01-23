"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Android Based Smart Vehicle Parking System",
    description: "Smart parking system with real-time monitoring.",
    image: "https://ik.imagekit.io/5lnqg1qxwh/parking_TJoSP9REkP?updatedAt=1737624490365",
    link: "#",
  },
  {
    title: "Movie Collection Web App",
    description: "App to manage and organize your movie collection with advanced filters and search.",
    image: "https://ik.imagekit.io/5lnqg1qxwh/movie_kt5VD_BKb?updatedAt=1737624708781",
    link: "#",
  },
  {
    title: "Paying Guest website",
    description: "Website for PG owners to list their properties and for students to find PGs.",
    image: "https://ik.imagekit.io/5lnqg1qxwh/pg_d3KovRNQ0?updatedAt=1737624757677",
    link: "#",
  },
  {
    title: "PotHole Detection System",
    description: "System to detect potholes on roads using IoT and alert the authorities.",
    image: "https://ik.imagekit.io/5lnqg1qxwh/pothole.jpg?updatedAt=1737626102770",
    link: "#",
  },
]

const Projects = () => {
  return (
    <section className="py-5  bg-white">
      <div className=" mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 md:mb-0"
          >
            Projects I have <span className="text-gray-400">Completed</span>
          </motion.h2>

          <div className="flex gap-4">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="px-6 py-3 rounded-full bg-slate-400 container text-black font-semibold hover:bg-black hover:text-white transition-colors duration-300"
              onClick={()=>{
                window.open("https://github.com/abhiranjan2123")
              }}
            >
              View All Work
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-gray-100"
            >
    
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay with description */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                        <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                      </div>
                      <p className="text-white/90 text-sm">{project.description}</p>
                    </div>
                  </div>

                  {/* Hover Arrow Button */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center transform -translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-black" />
                  </div>
                </div>
            
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

