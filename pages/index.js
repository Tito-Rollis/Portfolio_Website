import Navbar from '../components/navbar/navbar';
import DisplayName from '../components/display/name';
import BulletNav from '../components/bulletNav/bulletNav';
import Number from '../components/number/number';
import Potrait from '../components/potrait/potrait';
import Medsos from '../components/medsos/medsos';
import BigName from '../components/bigName/bigName';
import Head from 'next/head';
export default function Home() {
    return (
        <div className="bg-majorColor h-screen overflow-hidden relative grid grid-cols-3 grid-rows-3 mx-auto  py-4 px-5 md:px-16">
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <BigName />
            <Navbar layout=" col-span-3 z-10" />

            <DisplayName layout="self-center ml-14 col-start-1 col-end-2 row-start-2 row-end-3" />
            <BulletNav layout="z-10 self-center justify-self-end col-start-3 col-end-4 row-start-2 row-end-3" />
            <Potrait layout="col-start-1 col-end-4 row-start-2 row-end-4" />
            <Number layout="col-start-3 col-end-4 row-start-3 row-end-4" />
            <Medsos layout="col-start-1 col-end-2 row-start-3 row-end-4" />
        </div>
    );
}
