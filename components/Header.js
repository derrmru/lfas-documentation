import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="w-full text-center p-4 border-b-2 fixed top-0 flex justify-between items-center bg-white">
            <Link href='/' passHref>
                <Image
                    src="/images/LFAS_logo.svg"
                    alt="Picture of the author"
                    width={70}
                    height={70}
                    className='cursor-pointer'
                />
            </Link>

        </header>
    )
}

export default Header