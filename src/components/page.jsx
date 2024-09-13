"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Card, CardContent } from "@/components/ui/card";
import logo from "../public/finland.png";

export function Page() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-900 text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-slate-900 shadow-md z-50 border-b">
                <div className="container mx-auto flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                        <Image src={logo} alt="Logo" width={40} height={40} />
                        <span className="text-xl font-bold">RestaurantApp</span>
                    </div>
                    <div className="hidden md:block">
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
                                                            All restaurants in
                                                            one convenient app.
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
                                                            Find restaurants
                                                            near you with ease.
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
                                                            Browse menus from
                                                            various restaurants.
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
                                                    description:
                                                        "For casual diners",
                                                },
                                                {
                                                    title: "Pro Plan",
                                                    description:
                                                        "For food enthusiasts",
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
                                                                {
                                                                    plan.description
                                                                }
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
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
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
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-slate-900 p-4">
                    <div className="flex justify-end">
                        <button
                            className="text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <div className="flex flex-col items-center space-y-8 mt-16">
                        <Link
                            href="/"
                            className="text-2xl"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Product
                        </Link>
                        <Link
                            href="/"
                            className="text-2xl"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link
                            href="/"
                            className="text-2xl"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Documentation
                        </Link>
                        <Link
                            href="/"
                            className="text-2xl"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            href="https://github.com"
                            className="text-white hover:text-gray-300"
                        >
                            <Github size={24} />
                        </Link>
                        <Button variant="secondary" className="w-full">
                            Sign In
                        </Button>
                        <Button className="bg-green-500 hover:bg-green-600 w-full">
                            Try for Free
                        </Button>
                    </div>
                </div>
            )}
            {/* Hero Section */}
            <section className="container mx-auto text-center py-12 md:py-20 px-4 mt-20">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                    All Restaurants in One App
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Discover, order, and enjoy food from any restaurant in your
                    city.
                </p>
                <Button className="bg-green-500 hover:bg-green-600 mt-5 mx-3 font-bold">
                    Start journey
                </Button>
                <Button className="bg-gray-800 hover:bg-gray-500 mt-5 mx-3 font-bold">
                    Documentation
                </Button>
            </section>
            {/* Feature Blocks */}
            <section className="container mx-auto py-12 md:py-20 px-4">
                {[1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center mb-12 md:mb-20"
                    >
                        <div
                            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:order-2" : ""}`}
                        >
                            <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                                {/* Replace with actual video or image */}
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-xl md:text-2xl">
                                        Feature {index} Video/Image
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`w-full md:w-1/2 mt-8 md:mt-0 ${index % 2 === 0 ? "md:order-1 md:pr-12" : "md:pl-12"}`}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Feature {index} Title
                            </h2>
                            <p className="text-base md:text-lg">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nullam in dui mauris. Vivamus
                                hendrerit arcu sed erat molestie vehicula.
                            </p>
                        </div>
                    </div>
                ))}
            </section>
            <section className="container mx-auto py-12 md:py-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                        <CardContent className="p-6">
                            <h3 className="text-2xl font-bold mb-2">
                                Large Feature 1
                            </h3>
                            <p className="text-sm mb-4">
                                Detailed description of the large feature goes
                                here.
                            </p>
                            <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                                <Image
                                    src="/placeholder.svg"
                                    alt="Large Feature 1"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </CardContent>
                    </Card>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <Card className="bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <CardContent className="p-4">
                                <h3 className="text-xl font-bold mb-2">
                                    Small Feature 1
                                </h3>
                                <p className="text-xs mb-2">
                                    Brief description here.
                                </p>
                                <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                                    <Image
                                        src="/placeholder.svg"
                                        alt="Small Feature 1"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <CardContent className="p-4">
                                <h3 className="text-xl font-bold mb-2">
                                    Small Feature 2
                                </h3>
                                <p className="text-xs mb-2">
                                    Brief description here.
                                </p>
                                <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                                    <Image
                                        src="/placeholder.svg"
                                        alt="Small Feature 2"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <CardContent className="p-4">
                                <h3 className="text-xl font-bold mb-2">
                                    Small Feature 3
                                </h3>
                                <p className="text-xs mb-2">
                                    Brief description here.
                                </p>
                                <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                                    <Image
                                        src="/placeholder.svg"
                                        alt="Small Feature 3"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                            <CardContent className="p-4">
                                <h3 className="text-xl font-bold mb-2">
                                    Small Feature 4
                                </h3>
                                <p className="text-xs mb-2">
                                    Brief description here.
                                </p>
                                <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                                    <Image
                                        src="/placeholder.svg"
                                        alt="Small Feature 4"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-12 md:py-20 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <Card
                            key={index}
                            className="bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                        >
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-2">
                                    Feature {index}
                                </h3>
                                <p className="text-sm mb-4">
                                    Description of feature {index} goes here.
                                </p>
                                <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                                    <Image
                                        src="/placeholder.svg"
                                        alt={`Feature ${index}`}
                                        width={400}
                                        height={225}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
            {/* Footer */}
            <footer className="bg-slate-800 py-12 px-4">
                <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
