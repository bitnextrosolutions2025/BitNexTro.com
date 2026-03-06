import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter, X } from 'lucide-react'
import React from 'react'

export default function Head() {
  return (
    <div className='bg-[#00095c] h-20 flex md:h-14 md:justify-between flex-wrap items-center justify-center'>
      <div className='text-white flex gap-4 ml-3'>
       <a href="mailto:info@bitnextro.com"> <span className='flex items-center gap-1 text-[15px]'><Mail />info@bitnextro.com</span></a>
        <span className='flex items-center gap-1 text-[15px]'><Phone /> +91 9330855877
        </span>

      </div>
      <div className='flex justify-between gap-4 items-center mr-4 text-white cursor-pointer  '>
        <a href=" https://www.linkedin.com/in/bitnextro-solutions-private-limited-a3409a3a5" target='_blank'><Linkedin /></a>
       <a href="https://x.com/bitnextro" target='_blank'> <X /></a>
        <a href="https://www.facebook.com/profile.php?id=61585936040133" target='_blank'><Facebook /></a>
        <a href="https://www.instagram.com/bitnextro/" target='_blank'><Instagram /></a>
      </div>

    </div>
  )
}
