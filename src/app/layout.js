import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: `Kevin Yang's Profile`,
  description: `Kevin Yang is a full stack developer, he is in the industry for more than 10 years now. And feel free to get in touch with him.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
              integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
              crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>{children}</body>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-BRBWV4F70S" />
      <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BRBWV4F70S');
          `
      }} />
    </html>
  )
}
