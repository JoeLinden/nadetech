import Image from 'next/image';
import Search from '/components/Search'
import ColorSchemeButton from '/components/ColorSchemeButton'
import SteamLoginButton from '/components/SteamLoginButton'

export default function Nav() {
  return (
    <header className='nav-container'>
        {/* Logo and home link */}
        <Image 
            src='/nadetech.png'
            alt='Nade Tech Logo'
            href='/app/page.jsx'
            width={268}
            height={24}
            className='nav-logo'
        />
        {/* Search bar */}
        <Search />
        {/* Nav */}
        <nav className='main-nav' aria-label='Main Menu'>
            <ColorSchemeButton />
            <SteamLoginButton />
        </nav>
    </header>
  )
}