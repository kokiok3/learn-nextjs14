'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    // console.log(path);
    // console.log('hi');
    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li> {path === '/' ? '🎀' : ''}
                <li><Link href="/about-us">About us</Link></li> {path === '/about-us' ? '🎀' : ''}
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}