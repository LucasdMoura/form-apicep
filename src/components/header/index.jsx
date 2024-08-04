import Image from 'next/image'

export default function Header({children}) {
    return (
        <div>
            <header className="bg-blue-950 text-white w-full flex items-center justify-between p-4 h-auto mb-10 md:h-24">
                <div className="flex items-center space-x-4">
                    <Image 
                        src="/logo.png" 
                        alt="Logo"
                        title='Logo'
                        width={50} 
                        height={50}
                        className="ml-4 md:ml-40"
                    />
                </div>
                <nav className="flex items-center ml-8 justify-start flex-1">
                    <ul className="flex space-x-4 font-bold">
                        <li><a href="#" className="text-white hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="text-white hover:text-blue-500">Sobre</a></li>
                        <li><a href="#" className="text-white hover:text-blue-500">Contacto</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
