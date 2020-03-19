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
               <link href="https://fonts.googleapis.com/css?family=Muli|Overpass&display=swap" rel="stylesheet"/>
                <Head>
                    
                </Head>
            
                <body>  

                <Main />
                    <NextScript />

                    </body>


                <style jsx global> {`
                @font-face {
                    font-family:'Overpass';
                    src: url('/fonts/Overpass-Light.ttf');
                    font-family:'Muli', sans-serif;
                    src: url('/fonts/Muli-Light.ttf');
             
                }

                html {
                    font-family: 'Overpass', 'Muli';
                    font-display: swap;

                }

                body {
                margin: 0;
            }
      `}
      </style>
            
            </html>
        )
    }
}