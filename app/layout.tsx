import "../styles/global.css"
import { Metadata } from "next"
import Navigation from "../component/navigation"

export const metadata: Metadata = {
    title: {
        template: '%s | kkokkiok3.com',
        default: 'loading...'
    },
    description: 'Next.js is the best framework for React',
}

export default function Layout({children}: {
    children: React.ReactNode
}){
    return (
        <html>
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    )
}