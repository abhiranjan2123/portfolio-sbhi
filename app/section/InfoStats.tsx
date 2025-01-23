'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  {
    value: 1,
    suffix: '.6+',
    description: 'Years of experience in the software development.'
  },
  {
    value: 25,
    suffix: '+',
    description: 'Skills in web development and software engineering.'
  },
  {
    value: 99,
    suffix: '%',
    description: 'Projects completed with 99% satisfaction rate.'
  },
  
]

const Counter = ({ value = 0 , suffix="", duration = 0.5 }) => {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const inView = useInView(nodeRef, { once: true })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value
      const incrementTime = duration * 1000 / end
      const counter = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(counter)
      }, incrementTime)

      return () => clearInterval(counter)
    }
  }, [value, duration, inView])

  return (
    <span ref={nodeRef} className="text-6xl md:text-7xl font-bold text-primary">
      {count}{suffix}
    </span>
  )
}

const Stats = () => {
  return (
    <section className="py-10 mt-10">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-4 text-gray-600 text-lg">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

