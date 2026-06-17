import Script from "next/script";

export function GoogleAnalytics() {

    if (process.env.NODE_ENV !== "production") {
        return null;
    }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-2F4ECZK47L"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', 'G-2F4ECZK47L');
        `}
      </Script>
    </>
  );
}