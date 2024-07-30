import Image from 'next/image'

export default function Header({children}) {
    return (
        <div>
            <header className="bg-blue-950 text-white w-full flex items-center h-24 space-x-10 ">
            <Image 
            src="/logo.png" 
            alt="Logo"
            title='Logo'
            width= {50} 
            height= {50}
            className="ml-40"
            />
            
                <div className="container  flex items-center">
                <link rel="icon" type="image/png" href="logo.png"/>
                <nav>
                <ul className="flex space-x-4  font-bold ">
                    <li><a href="#" className="text-white hover:text-blue-500">Home</a></li>
                    <li><a href="#" className="text-white hover:text-blue-500">Sobre</a></li>
                    <li><a href="#" className="text-white hover:text-blue-500">Contacto</a></li>
                </ul>
                </nav>
                </div>
            </header>
        </div>
    )
}