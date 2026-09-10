import type { Metadata } from "next"; import Link from "next/link";
export const metadata:Metadata={title:"Thank You | Green Road",description:"Your Green Road conversation has begun."};
export default function Page(){return <main className="thank-you"><div><p className="eyebrow">GREEN ROAD / PRIVATE LEGACY FILMS</p><h1>THANK YOU.</h1><p>Your story has begun with a conversation.<br/>We’ll be in touch personally.</p><Link className="button ivory" href="/">RETURN HOME →</Link></div></main>}
