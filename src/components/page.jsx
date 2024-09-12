"use client";

import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Page() {
    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Navigation */}
            <nav className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    <Image
                        src="/restaurant.png"
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <span className="text-3xl font-bold">EatBook</span>
                </div>
                <NavigationMenu>
                    <NavigationMenuList className="flex justify-evenly align-middle">
                        <NavigationMenuItem className="m-0 p-3.5">
                            <NavigationMenuTrigger className="text-xl">
                                Product
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    RestaurantApp
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    All restaurants in one
                                                    convenient app.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/">
                                                <div className="text-sm font-medium leading-none">
                                                    Restaurant Search
                                                </div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Find restaurants near you
                                                    with ease.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/">
                                                <div className="text-sm font-medium leading-none">
                                                    Menu Browsing
                                                </div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Browse menus from various
                                                    restaurants.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <a href="/">
                                                <div className="text-sm font-medium leading-none">
                                                    Order Tracking
                                                </div>
                                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                    Track your orders in
                                                    real-time.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="m-0 p-3.5">
                            <NavigationMenuTrigger className="text-xl">
                                Pricing
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {[
                                        {
                                            title: "Basic Plan",
                                            description: "For casual diners",
                                        },
                                        {
                                            title: "Pro Plan",
                                            description: "For food enthusiasts",
                                        },
                                        {
                                            title: "Business Plan",
                                            description:
                                                "For restaurant owners",
                                        },
                                        {
                                            title: "Enterprise",
                                            description:
                                                "Custom solutions for large chains",
                                        },
                                    ].map((plan) => (
                                        <li key={plan.title}>
                                            <NavigationMenuLink asChild>
                                                <a href="/">
                                                    <div className="text-sm font-medium leading-none">
                                                        {plan.title}
                                                    </div>
                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                        {plan.description}
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="m-0 p-3.5">
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className="text-xl">
                                    Documentation
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="m-0 p-3.5">
                            <Link href="/" legacyBehavior passHref>
                                <NavigationMenuLink className="text-xl">
                                    Blog
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center space-x-4">
                    <Link
                        href="https://github.com"
                        className="text-white hover:text-gray-300"
                    >
                        <Github size={24} />
                    </Link>
                    <Button variant="secondary">Sign In</Button>
                    <Button className="bg-green-500 hover:bg-green-600">
                        Try for Free
                    </Button>
                </div>
            </nav>
            {/* Hero Section */}
            <section className="container mx-auto text-center py-20">
                <h1 className="text-5xl font-bold mb-6">
                    All Restaurants in One App
                </h1>
                <p className="text-xl mb-8">
                    Discover, order, and enjoy food from any restaurant in your
                    city.
                </p>
            </section>
            {/* Feature Blocks */}
            <section className="container mx-auto py-20">
                {[1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center mb-20"
                    >
                        <div
                            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:order-2" : ""}`}
                        >
                            <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                                {/* Replace with actual video or image */}
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-2xl">
                                        Feature {index} Video/Image
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`w-full md:w-1/2 mt-8 md:mt-0 ${index % 2 === 0 ? "md:order-1 md:pr-12" : "md:pl-12"}`}
                        >
                            <h2 className="text-3xl font-bold mb-4">
                                Feature {index} Title
                            </h2>
                            <p className="text-lg">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam in dui mauris. Vivamus
                                hendrerit arcu sed erat molestie vehicula.
                            </p>
                        </div>
                    </div>
                ))}
            </section>
            {/* Footer */}
            <footer className="bg-slate-800 py-12">
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/">Features</Link>
                            </li>
                            <li>
                                <Link href="/">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/">About</Link>
                            </li>
                            <li>
                                <Link href="/">Blog</Link>
                            </li>
                            <li>
                                <Link href="/">Careers</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/">Documentation</Link>
                            </li>
                            <li>
                                <Link href="/">Support</Link>
                            </li>
                            <li>
                                <Link href="/">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/">Twitter</Link>
                            </li>
                            <li>
                                <Link href="/">Facebook</Link>
                            </li>
                            <li>
                                <Link href="/">LinkedIn</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
