"use client";

import { FormEvent, useState } from "react";

export function InquiryForm({compact=false}:{compact?:boolean}){
 const [state,setState]=useState<"idle"|"sending"|"error">("idle");
 async function submit(event:FormEvent<HTMLFormElement>){event.preventDefault();setState("sending");const form=event.currentTarget;const response=await fetch("/api/inquire",{method:"POST",body:new FormData(form)});if(response.ok){window.location.assign("/thank-you")}else{setState("error")}}
 return <form className={compact?"inquiry-form compact":"inquiry-form"} onSubmit={submit}>
  <label>Your Name<input name="name" required autoComplete="name"/></label><label>Email<input name="email" required type="email" autoComplete="email"/></label><label>Phone<input name="phone" type="tel" autoComplete="tel"/></label>
  <label>Who is this film for?<select name="for" required defaultValue=""><option value="" disabled>Choose one</option><option>Myself</option><option>Parent</option><option>Grandparent</option><option>Spouse or partner</option><option>Entire family</option></select></label>
  <label>What would you like to preserve?<input name="preserve" required/></label><label>Where is your family based?<input name="location" required/></label><label>When would you like to begin?<input name="begin"/></label><label className="wide">Tell us a little about your idea.<textarea name="idea" required rows={compact?4:6}/></label>
  <label className="honey" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label><p className="form-note">Tell us only what feels comfortable.</p><button type="submit" disabled={state==="sending"}>{state==="sending"?"SENDING…":"REQUEST A PRIVATE CONSULTATION →"}</button>{state==="error"&&<p className="form-error" role="alert">The private inquiry service is not connected yet. Please try again after contact delivery has been configured.</p>}
 </form>
}
