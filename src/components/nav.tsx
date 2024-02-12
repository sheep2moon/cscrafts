import Link from "next/link";
import React from "react";

const Nav = () => {
    return (
        <nav className="text-primary flex gap-6 justify-center p-2 text-lg">
            <Link href="/">Market Craft Search</Link>
            <Link href="/stickers-placement">Stickers Placement</Link>
        </nav>
    );
};

export default Nav;
