import { url } from "inspector"
import { Facebook, GithubIcon, Instagram, Logo } from "./icons"

const links = [
    {
        href: '/#nav',
        title: 'Inicio'
    },
    {
        href: '/#nav',
        title: 'Sobre'
    },
    {
        href: '/#nav',
        title: 'Quiz'
    }
]

export const Footer = ()=>{
    return (
        <div style={{
            backgroundImage: "url('https://wallpapercave.com/wp/wp2567196.jpg')",
            objectFit: 'contain',
            overflow: 'hidden',
            backgroundSize: '100%'
        }} className=" flex justify-between gap-4 flex-1 py-[80px] border-t-gray-800 border-t-small !text-white ">
       <div className="flex flex-col w-full gap-3 container">
       <div className="flex items-center font-bold">
       <Logo size={24} />
       <h1>ASTRO</h1>
       </div>
            <div className="flex gap-2">
        <Facebook className="flex object-contain" />
        <Instagram />
        <GithubIcon/>            
        </div>
       </div>
       <div className="flex flex-col  gap-2 w-full  ">
                <p className=" font-bold text-medium mb-2">Link uteis</p>
                {links.map(item=><a className=" hover:text-white/40" href={item.href}>{item.title}</a>)}
               
            </div>
            <div className="flex flex-col gap-2  w-full">
                <p className=" font-bold text-medium mb-2">Termos Legais</p>
                <a className=" hover:text-white/40" >Inicio</a>
                <a className=" hover:text-white/40">Sobre nos</a>
            </div>
        </div>
    )
}