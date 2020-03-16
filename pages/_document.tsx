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
                    
                </Head>
            
                <body>

                <Main />
                    <NextScript />

                    </body>


                <style jsx global>{`
                font-family {
                    font-family: 'Regular', 'Overpass'; 
                }

                html {
                    font-family: 'Muli';
                    font-family: 'Regular';
                    font-family: 'Overpass';

                    font-display: auto;
                }

                body {
                margin: 0;
            }
      `}</style>
           
            </html>
        )
    }
}