"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";


export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    
    const signIn = async() => {
        await gitHubSignIn();
    }

    const signOut = async() => {
        await firebaseSignOut();
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200 text-black text-center">
            <h1 className="text-4xl font-bold">Week 9</h1>
            <p className="text-xl">{user ? "Hi there!" : "Please sign in"}</p>
            {user && <p className="text-lg">You are signed in as {user.displayName}</p>}
            <div>
                {user ? (
                    <div>
                        <p>Welcome, {user.displayName}</p>
                        <Link href="week-9/shopping-list">Go To Shopping List!</Link> <br />
                        <button onClick={signOut}>Sign Out</button>
                    </div>
                ) : (
                    <button onClick={signIn}>Sign In with GitHub</button>
                )}
            </div>
        </div>
    );
}