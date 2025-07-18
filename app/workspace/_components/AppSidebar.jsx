"use client";
import React from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Book, Compass, Icon, LayoutDashboard, PencilRulerIcon, UserCircle2Icon, WalletCards } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AddCourseDialog from "./AddCourseDialog";

const SideBarOptions = [
    {
        title: 'Dashboard',
        icon: LayoutDashboard,
        path: '/workspace'
    },
    {
        title: 'My Learning',
        icon: Book,
        path: '/workspace/my-courses'
    },
    {
        title: 'Explore Courses',
        icon: Compass,
        path: '/workspace/explore'
    },
    {
        title: 'AI Tools',
        icon: PencilRulerIcon,
        path: '/workspace/ai-tools'
    },
    {
        title: 'Billing',
        icon: WalletCards,
        path: '/workspace/billing'
    },
    {
        title: 'Profile',
        icon: UserCircle2Icon,
        path: '/workspace/profile'
    },
]

function AppSidebar() {
    const path = usePathname();
    return (
        <Sidebar>
            <SidebarHeader className={'p-4'}>
                <Image src={'/logo.svg'} alt="logo" width={200} height={200} />
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <AddCourseDialog>
                        <Button>Create New Course</Button>
                    </AddCourseDialog>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {SideBarOptions.map((item, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild className={'p-5'} >
                                        <Link href={item.path} className={`text-[17px] ${path.includes(item.path) && 'text-primary bg-purple-80'}`} >
                                            <item.icon className='h-7 w-7' />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar;