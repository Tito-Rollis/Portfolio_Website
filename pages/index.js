import Navbar from '../components/navbar/navbar';
import Head from 'next/head';
export default function Home() {
    return (
        <div className="bg-majorColor h-screen">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="//db.onlinewebfonts.com/c/561f38b1f4570de0fb8a39d691ab058c?family=Tungsten+Bold"
                    rel="stylesheet"
                    type="text/css"
                />
            </Head>
            <Navbar />
        </div>
    );
}
