"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { HomeIcon, LogInIcon, LogOutIcon, UserIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import ThemeToggle from "./themeToggle";

const SideMenu = () => {
    const { data, status } = useSession();

    const handleLogoutClick = async () => {
        await signOut();
    };
    const handleLoginClick = async () => {
        await signIn("google");
    };

    return (
        <>
            <SheetHeader className="p-5 border-b border-solid border-secondary ">
                <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {data?.user ? (
                <div className="flex justify-between px-5 py-6 items-center">
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage
                                src={data?.user?.image as string}
                            ></AvatarImage>
                        </Avatar>

                        <h2>{data?.user?.name}</h2>
                    </div>
                    <ThemeToggle />
                </div>
            ) : (
                <div className="flex flex-col gap-3 px-5 py-6">
                    <div className="flex items-center gap-2">
                        <UserIcon size={32} />
                        <h2 className="font-bold">Olá, faça seu login!</h2>
                    </div>
                </div>
            )}

            <div className="flex flex-col gap-3">
                <Button variant="outline" className="justify-start" asChild>
                    <Link href="/">
                        <HomeIcon className="mr-2" />
                        Inicio
                    </Link>
                </Button>
                <Button variant="secondary" onClick={handleLoginClick}>
                    <LogOutIcon className="mr-2" size={18} />
                    Sair
                </Button>
            </div>
        </>
    );
};

export default SideMenu;
