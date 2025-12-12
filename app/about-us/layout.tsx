export const metadata = {
    title: 'About Us',
}
export default function Layout({children}: {
    children: React.ReactNode
}){
    return (
        <div>
            {children}
        &copy; Nextjs is the best framework for React
        </div>
    )
}

