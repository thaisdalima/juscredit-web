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
               <link href="https://fonts.googleapis.com/css?family=Muli|Overpass&display=swap" rel="stylesheet"/>
                <Head>
                    
                </Head>
            
                <body>  

                <Main />
                    <NextScript />

                    </body>


                <style jsx global> {`
                @font-face {
                    font-family:'Overpass', 'Muli', 'Regular';
                    src: url('/fonts/Overpass-Regular.ttf');
                    src: url('/fonts/Muli-Regular.ttf');
                    src: url('/fonts/Muli-Light.ttf');
                    src: url('/fonts/Overpass-Light.ttf');
                    src: url('/fonts/Regular2.ttf');
                }
                html {
                    font-family: 'Overpass', 'Muli', 'Regular';
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