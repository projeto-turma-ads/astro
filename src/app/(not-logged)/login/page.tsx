'use client';
import { Navbar } from "@/components/navbar";
import { SignInForm } from "@/features/login";



export default function Home() {
  return (
    <main >
      <Navbar />
       <SignInForm />
    </main>
  );
}
