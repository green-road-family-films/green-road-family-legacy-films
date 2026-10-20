import { ConversationCta, PageIntro, PageShell } from "@/components/site-chrome";

export const metadata = { title: "FAQ" };
const questions=[
 ["What is a private legacy film?","A filmmaker-crafted documentary centered on a person, relationship, or family history. Interviews, memories, and meaningful materials are shaped into a cohesive film for an agreed audience."],
 ["Who are these films for?","Individuals, couples, and families who want to preserve a life story, a shared journey, or a meaningful part of their family’s history."],
 ["What if we don’t know the story yet?","That is a natural place to begin. The discovery process helps identify the memories, questions, relationships, and themes that may shape the film."],
 ["Who can take part?","Family members, friends, colleagues, neighbors, former students, or others who have a meaningful perspective may be invited, subject to the project’s needs and their agreement to participate."],
 ["Can we include photographs, home movies, or documents?","Yes. We discuss which materials deepen the story, any necessary permissions or digitization, and how original items will be handled and returned."],
 ["Can the film remain private?","The intended audience and permitted uses are established before production. Public sharing, festival submission, or promotional use requires separate written authorization."],
 ["Can a film honor someone who has died?","Yes. Interviews with family and friends, along with photographs, letters, home movies, and records, can help shape a thoughtful portrait of someone’s life."],
 ["How long does a project take?","Timing depends on the story, participants, locations, archive materials, and agreed scope. A realistic schedule is discussed during project development."],
 ["Will we review the film before final delivery?","The review process and permitted revisions are agreed before production begins and documented in the project agreement."],
 ["Who owns the finished film?","Ownership, licenses, and permitted uses are set out in the commissioning agreement before production begins."],
 ["How is the project investment determined?","Each project is individually scoped. The investment depends on factors such as filming days, locations and travel, participants, archive work, editing, and delivery. Details are discussed after the initial conversation."],
];
export default function FaqPage(){return <PageShell>
 <PageIntro eyebrow="FAQ" title="Questions, answered clearly." copy="A private film is personal by nature. These answers explain the starting point; the details of your project are discussed together." image="/images/legacy/private-story.jpg" imageAlt="A quiet editorial image representing a privately held family story" />
 <section className="faq-page page-pad">{questions.map(([question,answer],index)=><details key={question} open={index===0}><summary><span>{String(index+1).padStart(2,"0")}</span><h2>{question}</h2><i aria-hidden>+</i></summary><p>{answer}</p></details>)}</section>
 <ConversationCta />
</PageShell>}
