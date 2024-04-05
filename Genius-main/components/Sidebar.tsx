"use client";

import  Link from "next/link"
import Image from "next/image";

import { Montserrat } from "next/font/google";
import { LayoutDashboard, Weight ,Music,Code,MessageSquare,ImageIcon,VideoIcon,Settings} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({weight: "600", subsets: ["latin"]});

const routes = [
    {
    label:"Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
}, 
{
    label:"Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
}, 
{
    label:"Image Genertor",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
}, 
{
    label:"Video Generator",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
}, 
{
    label:"Music Generation",
    icon: Music,
    href: "/music",
    color: "text-orange-500",
}, 
{
    label:"Code Generation",
    icon: Code,
    href: "/code",
    color: "text-orange-500",
}, 
{
    label:"Settings",
    icon: Settings,
    href: "/settings",
    color: "text-orange-500",
}, 
];
const Sidebar = () => {

    //used to take the path
    const pathname = usePathname();
    return (
        //create a menu icon for phone size 
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-16 h-16 mr-4">
                    <Image fill 
                     alt ="Logo"
                    src="/logo.png"/>
                    </div>
                    <h1 className={cn ("text-2xl font-bold",montserrat.className)}>Genius</h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route)=>(
                        <Link
                        href={route.href}
                        key={route.href}
                        className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounder-lg transition ",
                        //if pathname matches routename then the route will highlited
                        pathname=== route.href ? "text-white bg-shite/10":"text-zinc-400")}
                        >
                        <div className="flex items-center flex-1">
                            <route.icon className= {cn("h-5 w-5 mr-3",route.color)}/>
                            {route.label}
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;