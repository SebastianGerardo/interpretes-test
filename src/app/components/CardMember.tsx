import { Member } from "@/types"
import Image from "next/image"

export const CardMember = ({ member }: { member: Member }) => {
  return (
    <div className='bg-white p-4 rounded-md shadow-md w-full'>
        <div className='flex items-center gap-x-2'>
            <div className='min-w-10 min-h-10 rounded-full bg-gray-200 overflow-hidden'>
                <Image src={member.user.avatarUrl} alt={member.user.name} width={40} height={40} />
            </div>
            <div className='flex flex-col'>
                <h3 className='text-lg font-bold line-clamp-1'>{member.user.name}</h3>
                {/* <span className='text-xs font-medium px-3 flex items-center gap-x-1 text-gray-500 bg-orange-100 p-1 rounded-full w-max'>
                    <div className='w-2 h-2 rounded-full bg-orange-500'></div>
                    <p className='text-orange-500'>Ocupado</p>
                </span> */}
                {/* <span className='text-xs font-medium px-3 flex items-center gap-x-1 text-gray-500 bg-green-100 p-1 rounded-full w-max'>
                    <div className='w-2 h-2 rounded-full bg-green-500'></div>
                    <p className='text-green-500'>Disponible</p>
                </span> */}
            </div>
        </div>
    </div>
  )
}
