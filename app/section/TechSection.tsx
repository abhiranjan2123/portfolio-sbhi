import Image from 'next/image'
import React from 'react'

const TechSection = () => {
  return (
    <section className='bg-white mt-10 p-5 md:p-10'>
        <div className='flex justify-center'>

     
        <div className='grid grid-cols-4 gap-x-10 gap-y-10 md:grid-cols-6 md:gap-x-32 '>
            <Image src="/svg/react.svg" alt="git" width={50} height={50} />
            <Image src="/svg/node.svg" alt="git" width={50} height={50} />
            <Image src="/svg/express.svg" alt="git" width={50} height={50} />
            <Image src="/svg/git.svg" alt="git" width={50} height={50} />
            <Image src="/svg/next.svg" alt="git" width={50} height={50} />
            <Image src="/svg/aws.svg" alt="git" width={50} height={50} />
            <Image src="/svg/docker.svg" alt="git" width={50} height={50} />
            <Image src="/svg/python.svg" alt="git" width={50} height={50} />
            <Image src="/svg/mongodb.svg" alt="git" width={50} height={50} />
            <Image src="/svg/mysql.svg" alt="git" width={50} height={50} />
            <Image src="/svg/tailwind.svg" alt="git" width={50} height={50} />
            <Image src="/svg/flutter.svg" alt="git" width={50} height={50} />

            </div>
        </div>
    </section>
  )
}

export default TechSection