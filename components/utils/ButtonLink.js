import Link from 'next/link';

const ButtonLink = ({path, title}) => {
    return ( 	<>
        <Link href={path}>
            <button className='px-12 py-4 bg-red text-white text-2xl uppercase rounded-full shadow-lg border-2 border-red hover:scale-95 hover:bg-red/70 transition duration-700 font-tinos'>
                {title}
            </button>
        </Link>
    </> );
}
 
export default ButtonLink;