import Document, { Head, Main, NextScript } from 'next/document'
import './styles.scss'
import { setCustomText } from 'react-native-global-props';

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


                <style> {`
                font-family {
                    font-family: 'Regular', 'Overpass'; 
                }

                html {
                    font-family: 'Muli';
                    font-family: 'Regular';
                    font-family: 'Overpass';

                }

                body {
                margin: 0;
            }
      `}</style>
           
            </html>
        )
    }
}