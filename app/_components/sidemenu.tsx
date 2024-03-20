import Link from "next/link";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { HomeIcon } from "lucide-react";

const SideMenu = () => {
    return (
        <>
            <SheetHeader className="p-5 ">
                <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-3">
                <Button variant="outline" className="justify-start" asChild>
                    <Link href="/">
                        <HomeIcon className="mr-2" />
                        Inicio
                    </Link>
                </Button>
            </div>
        </>
    );
};

export default SideMenu;
