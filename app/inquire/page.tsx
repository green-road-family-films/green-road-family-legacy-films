import type { Metadata } from "next"; import { Subpage } from "@/components/subpage"; import { InquiryForm } from "@/components/inquiry-form";
export const metadata:Metadata={title:"Inquire | Green Road",description:"Begin a private conversation about commissioning a Green Road documentary film."};
export default function Page(){return <Subpage eyebrow="PRIVATE COMMISSION" title={<>BEGIN A PRIVATE<br/><em>CONVERSATION.</em></>} intro="Every project begins with a private conversation. Tell us only what feels comfortable."><InquiryForm/></Subpage>}
