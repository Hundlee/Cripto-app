import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./sidemenu";
import { Card, CardContent } from "./ui/card";

const Header = () => {
    return (
        <header>
            <Card className="rounded-none border-t-0 border-x-0 bg-secondary">
                <CardContent className="p-5 justify-between flex flex-row items-center">
                    <Image
                        src={"/Bitcoin-icon.png"}
                        alt="logo"
                        width={50}
                        height={50}
                    />

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <MenuIcon />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="p-0">
                            <SideMenu />
                        </SheetContent>
                    </Sheet>
                </CardContent>
            </Card>
        </header>
    );
};

export default Header;
