import React from 'react';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {authClient} from '@/lib/auth-client';
import {redirect} from 'next/navigation';

const DashboardPage = async() => {

    const session = await auth.api.getSession({
        headers: await headers() 
    });

    console.log("Session data in DashboardPage:", session);

    const user = session?.user;
    if(!user){
        return (
            redirect('/auth/signin') // Server-side redirect
            // <div>Sign in to access the dashboard.</div>
        )
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user.name}!</p>
        </div>
    );
};

export default DashboardPage;