import "./globals.css";

export const metadata = {
  title: "Jornada Donas do Jogo",
  description:
    "Foi descoberto o padrão oculto do app que você já tem no celular está pagando comissões para aquelas que conseguem ativar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Fonte Inter */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
        />

        {/* vTurb preload */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);",
          }}
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/24352900-ae9d-437d-b892-98c18ed9ca21/players/69fb48a51b6c5fdae7b31bec/v4/player.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://cdn.converteai.net/24352900-ae9d-437d-b892-98c18ed9ca21/69fb48621732c2e5ae651213/main.m3u8"
          as="fetch"
        />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
      </head>
      <body>{children}</body>
    </html>
  );
}
