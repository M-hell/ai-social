"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/logo";
import { Auth } from "@/components/auth";

export default function Home() {
  const { userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userId) {
      router.push("/dashboard"); //router push is a client side navigation and redirect is a server side navigation
    }
  }, [userId, router]);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 mt-5 lg:px-6 h-14 flex items-center">
        <Logo />
        <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
          <Auth />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-7xl">
                  Ultimate AI Content Generator
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Our platform offers a suite of powerful tools to help you
                  generate social media contents with the power of AI.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
