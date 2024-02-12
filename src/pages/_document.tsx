import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Nav from "../components/nav";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Nav />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
