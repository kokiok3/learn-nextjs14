import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Not Found',
    // description: 'Not Found',
    keywords: ['not found', '404'],
}
export default function NotFound() {
    return <div>NotFound</div>;
}