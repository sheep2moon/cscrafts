import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <nav className="flex gap-2">
                    <Link href="/">home</Link>
                </nav>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
