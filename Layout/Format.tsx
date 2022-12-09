import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";

const Format = ({children}:any) => {
    return ( 
        <>
         <Head>
                <title>Portfolio</title>
            </Head>

            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
     );
}
 
export default Format;