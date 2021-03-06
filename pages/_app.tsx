import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import HttpsRedirect from 'react-https-redirect';

function Juscredit({ Component, pageProps }) {
    return <>
        <HttpsRedirect>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </HttpsRedirect>
    </>

}


// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default Juscredit