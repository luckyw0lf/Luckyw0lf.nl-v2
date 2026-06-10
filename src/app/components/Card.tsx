'use client'
  
import Image from 'next/image'

interface Props {
  title: string,
  src: string,
  description: string,
  link?: string,
}

export default function Card({title, src, description, link = ""}: Props){
  return (
    <div className="max-w-sm rounded shadow-lg bg-white min-w-64">
      {link.length > 0 &&
          <a className="p-2" href={link} target="_blank" rel="noopener noreferrer">
            <Image
              src={src}
              className='rounded-2xl p-5 w-full h-48 object-scale-down'
              alt={title}
              width={300}
              height={300}
            />
          </a>
        }
      {link.length == 0 &&
          <Image
            src={src}
            className='rounded-2xl p-5 w-full h-48 object-scale-down'
            alt={title}
            width={300}
            height={300}
          />
        }
      <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
              {description}
            </p>
        </div>
    </div>
  )
}
