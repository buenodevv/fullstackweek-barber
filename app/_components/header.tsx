"use client"
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { MenuIcon } from "lucide-react";


const Header = () => {
    const { data } = useSession();
    const handleLoginClick = async () => {
        await signIn();
    }
    return (
        <Card>
            <CardContent className="px-5 py-8 justify-between flex flex-row">
                <Image src="/logo.png" alt="FSW Barber" height={18} width={120} />
                 <Button variant="outline" size="icon" className="h-8 w-8">
                    <MenuIcon size={18}/>
                </Button> 
                
            </CardContent>

        </Card>
    );
}

export default Header;