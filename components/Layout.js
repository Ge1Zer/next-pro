import Head from "next/head";
import Link from "next/link";

export default function Layout({children}){
    return(
        <>
            <Head>
                <title>Document</title>
            </Head>
            <nav>
                <Link href={'/i'}><a>I </a></Link>
                <Link href={'/work'}><a>work </a></Link>
                <Link href={'/library/home'}><a>library </a></Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}
