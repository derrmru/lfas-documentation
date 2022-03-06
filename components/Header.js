import Logo from './Logo'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="w-full text-center p-4 border-b-2 fixed top-0 flex justify-between items-center bg-white">
            <Link href='/' passHref>
                <div className="w-14 cursor-pointer">
                    <Logo />
                </div>
            </Link>

        </header>
    )
}

export default Header