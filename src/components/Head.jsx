import { Facebook, Linkedin, Mail, Phone, Twitter, X } from 'lucide-react'
import React from 'react'

export default function Head() {
  return (
    <div className='bg-[#00095c] h-20 flex md:h-14 md:justify-between flex-wrap items-center justify-center'>
      <div className='text-white flex gap-4 ml-3'>
        <span className='flex items-center gap-1 text-[15px]'><Mail />bitnextrosolutions@gmail.com</span>
        <span className='flex items-center gap-1 text-[15px]'><Phone /> +91 9330855877
        </span>

      </div>
      <div className='flex justify-between gap-4 items-center mr-4 text-white cursor-pointer  '>
        <Linkedin />
        <X />
        <Facebook />
      </div>

    </div>
  )
}
