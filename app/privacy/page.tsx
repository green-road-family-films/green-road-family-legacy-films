import { ConversationCta, PageIntro, PageShell } from "@/components/site-chrome";

export const metadata = { title: "Privacy & Trust" };
const principles=[
 ["01","Controlled review","The review process, permitted revisions, and final approval arrangements are agreed before production begins. The project agreement sets out the responsibilities and expectations for everyone involved."],
 ["02","Public use requires permission","Public sharing, festival submission, and promotional use are separate from creating a private family film. These uses must be discussed in advance and authorized in writing by the appropriate rights holders and participants."],
 ["03","Archival care","Family photographs, letters, home movies, and other personal materials are handled with care. Before production, we discuss which items will be used, any digitization needed, permissions, and arrangements for returning originals."],
 ["04","Clear agreements","Ownership, licenses, participant permissions, review, revisions, delivery, and permitted uses are defined in the commissioning agreement. The agreement—not an informal assumption—sets the terms for each project."],
];
export default function PrivacyPage(){return <PageShell>
 <PageIntro eyebrow="Privacy & trust" title="Private by design." copy="Personal stories deserve thoughtful handling. From the first conversation, we discuss who the film is for, which materials may be included, and how the finished work is intended to be shared." image="/images/legacy/private-story.jpg" imageAlt="Green Road artwork about preserving private family stories" />
 <section className="trust-principles page-pad">{principles.map(([number,title,copy])=><article key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>)}</section>
 <ConversationCta quiet />
</PageShell>}
