import { NextResponse } from "next/server";

const required=["name","email","for","preserve","location","idea"];
export async function POST(request:Request){
 const form=await request.formData();
 if(String(form.get("website")||"")) return NextResponse.json({ok:true});
 if(required.some(key=>!String(form.get(key)||"").trim())) return NextResponse.json({error:"Missing required fields"},{status:400});
 const email=String(form.get("email")); if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({error:"Invalid email"},{status:400});
 const apiKey=process.env.RESEND_API_KEY, recipient=process.env.INQUIRY_EMAIL_TO, sender=process.env.INQUIRY_EMAIL_FROM;
 if(!apiKey||!recipient||!sender) return NextResponse.json({error:"Inquiry delivery is not configured"},{status:503});
 const lines=["New private Green Road inquiry","",...Array.from(form.entries()).filter(([key])=>key!=="website").map(([key,value])=>`${key}: ${String(value).slice(0,4000)}`)];
 const result=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${apiKey}`,"Content-Type":"application/json"},body:JSON.stringify({from:sender,to:[recipient],reply_to:email,subject:"New Green Road private film inquiry",text:lines.join("\n")})});
 if(!result.ok) return NextResponse.json({error:"Delivery failed"},{status:502}); return NextResponse.json({ok:true});
}
