import Image from 'next/image'

export default function Footer({children}) {
  return (
    <>   
      <footer className="bg-blue-950 text-white w-full flex justify-center items-center h-40  ">
        <div className="">
          <h2>Desenvolvido por Lucas de Moura</h2>
          <div className='flex justify-center space-x-5 mt-2'>
          <a href="https://linkedin.com/in/lucasdmourasantos/" target="_blank" alt='Link para o meu linkedin' title='Link para o meu Linkedin'>
            <Image 
              src="/linkedin.png" 
              alt="Logo" 
              width= {30} 
              height= {30}
              className="bg-white"
            /></a>
            <a href="https://github.com/LucasdMoura" target="_blank" alt='Link para o meu Github' title='Link para o meu Github'>
            <Image 
              src="/github.png" 
              alt="Logo" 
              width= {30} 
              height= {30}
              className="bg-white rounded-full"
            /></a>
          </div>
        </div>
      </footer>
    </>
  )
}
