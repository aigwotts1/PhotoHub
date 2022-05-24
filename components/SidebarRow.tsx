import React from 'react'
interface Props{
    Icon:(props: React.ComponentProps<"svg">) => JSX.Element
        title:string
        onClick?:()=>{

        }
}
function SidebarRow({Icon,title,onClick}:Props) {
  return (
    <div onClick={()=>onClick?.()} className='flex items-center max-w-fit space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 transition-all duration-200 group cursor-pointer'>
        <Icon className='h-6 w-6'/>
        <p className='group-hover:text-green-600 hidden md:inline-flex text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow