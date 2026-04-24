'use client';
import {createAuthClient} from "better-auth/client";
import {Link, Button} from "@heroui/react";
import { useSession, signOut } from "@/lib/auth-client";

const Navbar = () => {

    const {data, isPending} = useSession();

    if(isPending){
        return <div>Loading...</div>
    }

    console.log("Session data in Navbar:", data);

    const user = data?.user;
    console.log("user data, name:", data);

    return (
        <div>
            {/* Basic */}
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <p className="font-bold">ACME</p>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><Link href="/about">About</Link></li>
                    </ul>
                    <div>
                        {user ? <>
                        <p>Welcome, {user.name}!</p>
                        <button onClick={() => signOut()}>Log Out</button>
                        </> : <Link href="/auth/signin">Sign In</Link>}
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;