"use client";
import { FormEvent } from "react";
import { PageShell } from "@/components/site-chrome";

export default function InquirePage(){
 const submit=(event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  const data=new FormData(event.currentTarget);
  const subject=encodeURIComponent(`Legacy film inquiry from ${data.get("name")}`);
  const body=encodeURIComponent([`Name: ${data.get("name")}`,`Email: ${data.get("email")}`,`Phone: ${data.get("phone")||"Not provided"}`,`Who is the film for?: ${data.get("for")}`,`Story to preserve: ${data.get("story")}`,`Anything else: ${data.get("more")||"Not provided"}`].join("\n\n"));
  window.location.href=`mailto:hello@greenroadlegacy.com?subject=${subject}&body=${body}`;
 };
 return <PageShell>
  <section className="inquire-intro page-pad"><div><p className="eyebrow">Inquire</p><h1>Begin a private<br/><em>conversation.</em></h1></div><div><p>Tell me about the person, family, or experience you would like to preserve. You can begin with a simple idea, a question, or a memory.</p><p>We can explore the story together and discuss an approach that fits.</p></div></section>
  <section className="inquiry-layout page-pad">
   <form className="inquiry-form" onSubmit={submit}>
    <label><span>Your name</span><input name="name" required autoComplete="name" /></label>
    <label><span>Email address</span><input name="email" type="email" required autoComplete="email" /></label>
    <label><span>Phone <small>Optional</small></span><input name="phone" type="tel" autoComplete="tel" /></label>
    <label><span>Who is the film for?</span><input name="for" required /></label>
    <label className="wide"><span>What story would you like to preserve?</span><textarea name="story" rows={5} required /></label>
    <label className="wide"><span>Anything else you would like to share?</span><textarea name="more" rows={3} /></label>
    <button className="button wide" type="submit">Send your inquiry <span aria-hidden>↗</span></button>
   </form>
   <aside className="inquiry-aside"><p className="eyebrow">Direct contact</p><a href="mailto:hello@greenroadlegacy.com">hello@greenroadlegacy.com</a><a href="tel:+14158161060">+1 415 816 1060</a><span>Sacramento. California. USA</span><p>Private. Personal. Without obligation.</p></aside>
  </section>
 </PageShell>;
}
