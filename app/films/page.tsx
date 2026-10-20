import { ConversationCta, PageIntro, PageShell } from "@/components/site-chrome";

export const metadata = { title: "The Films" };

const films=[
 ["01","The Portrait","One life","A documentary portrait shaped by the experiences, relationships, choices, and lessons that define a person. It looks beyond a list of achievements to reveal the person behind them.","/images/legacy/portrait.jpg"],
 ["02","The Love Story","Two lives","A film about a relationship and the life built together: how two people met, what sustained them, how they changed, and what their shared years mean to those around them.","/images/legacy/love-story.jpg"],
 ["03","The Legacy","What one life sets in motion","A story of continuing influence—a family business, a craft, a body of work, a tradition of service, or knowledge passed from one person to another.","/images/legacy/legacy-road.jpg"],
 ["04","The Heirloom","What we carry forward","A film centered on an element of family culture: a recipe, language, song, ritual, object, phrase, or lesson, and the people who give it meaning across time.","/images/legacy/heirloom.jpg"],
];

export default function FilmsPage(){return <PageShell>
 <PageIntro eyebrow="The films" title="Four forms. One purpose." copy="Every life leaves its mark in a different way. The form follows the story you want to preserve." image="/images/legacy/green-road-cinema.jpg" imageAlt="Green Road cinematic artwork" />
 <section className="film-list page-pad">{films.map(([number,title,kicker,copy,image],index)=><article key={title} className={index%2?"reverse":""}><div className="film-list-art"><img src={image} alt={`${title} editorial artwork`} /></div><div className="film-list-copy"><span>{number}</span><p className="eyebrow">{kicker}</p><h2>{title}</h2><p>{copy}</p></div></article>)}</section>
 <section className="editorial-split page-pad dark-panel"><div><p className="eyebrow">The people. The places. The archive.</p><h2>A film has a point of view.</h2></div><div className="prose"><p>Interviews can be enriched by photographs, home movies, letters, documents, objects, and meaningful locations.</p><p>A documentary becomes more than a collection of recollections when its details are shaped into a story. The edit brings together revealing moments, different perspectives, images, and the connections that give a life its particular character.</p><p>Scope, format, schedule, and delivery are discussed and agreed before production begins.</p></div></section>
 <ConversationCta />
</PageShell>}
