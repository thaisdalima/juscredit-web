import Document, { Head, Main, NextScript } from 'next/document'
import './styles.scss'
export default class extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <html lang="en">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet" />
                    <script async defer
                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDF7nyLwL3gM8cNJAxeeaSIMO189krrERE">
                    </script>
                </Head>
                <body>

                    <Main />
                    <NextScript />
                </body>

                <style jsx global>{`
                @font-face {
                    font-family: 'Kastelov';
                    src: url('/fonts/kastelov-intelo-bold.ttf');
                    src: url('/fonts/kastelov-intelo-extra-bold.ttf');
                    src: url('/fonts/Kastelov-Intelo-Medium.ttf');
                    src: url('/fonts/Kastelov-Intelo-Regular.ttf');
                    src: url('/fonts/Kastelov-Intelo-Thin.ttf');
                }
                html {
                    font-family: 'Kastelov';
                    font-display: swap;
                }

                body {
                margin: 0;
            }
      `}</style>
            </html>
        )
    }
}