import { VTURB } from "./_config/site";

export default function V2Layout({ children }) {
  return (
    <>
      <link rel="preload" href={VTURB.scriptSrc} as="script" />
      <link rel="preload" href={VTURB.m3u8} as="fetch" />
      {children}
    </>
  );
}
