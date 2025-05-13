import { ChevronDownIcon } from '@heroicons/react/24/outline'


export default function NavButton({buttonText, onClick}) {


    return(
    <div onClick={onClick} className="flex flex-row text-black cursor-pointer items-center">
        <p className='text-sm'>{buttonText}</p>
        <ChevronDownIcon className='text-black size-4 ps-1' />
    </div>
    )
}
