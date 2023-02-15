import Link from 'next/link';

const ButtonLink = ({path, title}) => {
    return ( 	<>
        <Link href={path}>
            <button className='px-12 py-4 bg-red-600 text-white text-2xl uppercase rounded-full'>
                {title}
            </button>
        </Link>
    </> );
}
 
export default ButtonLink;