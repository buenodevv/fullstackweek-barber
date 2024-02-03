"use client"
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import {MenuIcon} from "lucide-react";
import SideMenu from "./side-menu";


const Header = () => {
    
    return (
        <Card>
            <CardContent className="px-5 py-8 justify-between flex flex-row">
                <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                            <MenuIcon size={18} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>

                </Sheet>


            </CardContent>

        </Card>
    );
}

export default Header;