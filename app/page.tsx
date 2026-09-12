"use client";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

const stories = ["A Life", "A Family", "A Journey", "A Legacy"];
const films = ["The Portrait", "The Legacy", "The Heirloom"];
const experience = ["Discover", "Develop", "Film", "Craft", "Preserve"];
const experienceImages = [
  ["https://images.pexels.com/photos/10948905/pexels-photo-10948905.jpeg?auto=compress&cs=tinysrgb&w=900", "Elderly hands holding a treasured family photograph"],
  ["https://images.pexels.com/photos/34384401/pexels-photo-34384401.jpeg?auto=compress&cs=tinysrgb&w=900", "A hand exploring a collection of vintage family photographs"],
  ["https://images.pexels.com/photos/34623019/pexels-photo-34623019.jpeg?auto=compress&cs=tinysrgb&w=900", "A documentary camera capturing an intimate interview"],
  ["https://images.pexels.com/photos/8102674/pexels-photo-8102674.jpeg?auto=compress&cs=tinysrgb&w=900", "A close view of documentary editing"],
  ["https://images.pexels.com/photos/8307718/pexels-photo-8307718.jpeg?auto=compress&cs=tinysrgb&w=900", "Grandparents sharing their family history with the next generation"],
];
const faq = [
  ["What is a Family Legacy Film?", "A professionally produced documentary that preserves a person's life, family history, journey, business, cultural heritage, or legacy for future generations."],
  ["How is this different from hiring a videographer?", "We develop the story before filming, then combine research, interviews, archives, cinematic observation, sound, color, and documentary editing. The goal is a film—not a recording."],
  ["How much does a project cost?", "Every story has a different scope. After a private discovery conversation, you receive a written proposal covering production, schedule, deliverables, and investment."],
  ["Can our finished film remain completely private?", "Yes. Privacy-first handling and private delivery are central to our model. Nothing is shared publicly without clear, explicit permission."],
  ["Can you work with photographs and home movies?", "Yes. Photographs, films, letters, documents, recordings, and meaningful objects can be digitized, organized, and woven into the story when appropriate."],
  ["What if our family is spread across several cities?", "Multi-location stories are welcome. We shape production around the people and places the story genuinely needs and quote travel transparently."],
  ["What if someone is hesitant on camera?", "That is completely normal. Pre-interviews, a calm set, a small crew, and story-specific questions help conversations feel natural—not performed."],
  ["How long does the process take?", "Timing depends on subjects, locations, archives, production requirements, and review milestones. Your proposal sets a realistic schedule before work begins."],
  ["Do we receive raw footage?", "Raw footage is not automatically included. The final agreement defines what is preserved and delivered so there are no surprises."],
  ["Can you create a tribute after someone has passed?", "Yes. A Legacy Tribute can reconstruct a life through the people who knew them and the photographs, films, letters, recordings, and documents they left behind."],
];
const Arrow = () => <span aria-hidden>↗</span>;

function ArchitectureSection({id,title,dark=false}:{id?:string;title:string;dark?:boolean}) {
  return <section id={id} className={`architecture-section section-pad${dark?" architecture-dark":""}`}><h2>{title}</h2><div className="architecture-rule" aria-hidden="true"/></section>;
}

export default function Home(){
 const [menu,setMenu]=useState(false),[open,setOpen]=useState<number|null>(0),[sent,setSent]=useState(false),[progress,setProgress]=useState(0);
 const [experienceScroll,setExperienceScroll]=useState(0);
 const experienceTrack=useRef<HTMLDivElement>(null);
 useEffect(()=>{const update=()=>setProgress(window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight)*100);update();addEventListener("scroll",update,{passive:true});return()=>removeEventListener("scroll",update)},[]);
 const move=(event:React.MouseEvent<HTMLElement>)=>{event.currentTarget.style.setProperty("--x",event.clientX+"px");event.currentTarget.style.setProperty("--y",event.clientY+"px")};
 const syncExperienceScroll=()=>{const track=experienceTrack.current;if(track)setExperienceScroll(track.scrollLeft/Math.max(1,track.scrollWidth-track.clientWidth)*100)};
 const scrollExperience=(event:ChangeEvent<HTMLInputElement>)=>{const track=experienceTrack.current;if(!track)return;const value=Number(event.target.value);track.scrollLeft=value/100*(track.scrollWidth-track.clientWidth);setExperienceScroll(value)};
 const submit=(event:FormEvent)=>{event.preventDefault();setSent(true)};
 return <main onMouseMove={move}>
  <div className="scroll-progress" style={{width:`${progress}%`}}/>
  <header className="topbar"><a className="brand" href="#top"><span>GREEN ROAD</span><small>FAMILY LEGACY FILMS</small></a><nav className={menu?"nav open":"nav"}><a href="#stories">Stories</a><a href="#films">The Films</a><a href="#experience">The Experience</a><a href="#about">About</a><a href="#faq">FAQ</a></nav><a className="nav-cta" href="#inquire">Inquire <Arrow/></a><button className="menu-button" onClick={()=>setMenu(!menu)} aria-expanded={menu}>{menu?"Close":"Menu"}</button></header>

  <section className="hero" id="top"><div className="hero-art"><img src="https://images.pexels.com/photos/6972627/pexels-photo-6972627.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="A mature couple revisiting their family photographs together"/></div><div className="hero-vignette"/><div className="hero-copy"><h1>Your Story.<br/><em>Their Legacy.</em><br/>A Film for Generations.</h1><div className="hero-actions"><a className="button light" href="#inquire">Tell us your story <Arrow/></a><a className="text-link" href="#films">Explore our films ↓</a></div></div></section>

  <section className="architecture-section section-pad architecture-dark"><h2>INTRODUCTION FILM</h2><div className="architecture-rule" aria-hidden="true"/></section>

  <section className="manifesto section-pad"><div><p className="kicker gold">Some stories deserve more than a video.</p><h2>A voice. A childhood memory. A journey across generations. A life that should <em>never disappear.</em></h2></div></section>

  <ArchitectureSection title="WHAT IS A PRIVATE LEGACY FILM?"/>
  <ArchitectureSection title="WHO IS THIS FOR?" dark/>

  <section id="stories" className="stories section-pad"><div className="section-head"><div><h2>What deserves<br/><em>to be carried forward?</em></h2></div></div><div className="story-territories">{stories.map((story,index)=><article key={story}><span>0{index+1}</span><h3>{story}</h3><button aria-label={`Explore ${story}`}>↗</button></article>)}</div></section>

  <section className="cinema-break"><img src="https://images.pexels.com/photos/7545406/pexels-photo-7545406.jpeg?auto=compress&cs=tinysrgb&w=2000" alt="A collection of old family photographs being carefully reviewed"/><div className="frame-center">YOUR FAMILY ARCHIVE<br/><span>belongs in motion</span></div><div className="frame-note">Photographs become part of a living story</div></section>

  <section className="not-video section-pad"><h2>This is not<br/><span>event videography.</span></h2><blockquote>“The goal is not to create a recording.<br/><em>The goal is to create a documentary.</em>”</blockquote></section>

  <ArchitectureSection title="BEFORE WE FILM"/>

  <section id="experience" className="process section-pad"><div className="section-head"><div><h2>A story-first<br/><em>approach.</em></h2></div></div><div className="process-track" ref={experienceTrack} onScroll={syncExperienceScroll}>{experience.map((stage,index)=><article className="process-step" key={stage}><div className="process-image"><img src={experienceImages[index][0]} alt={experienceImages[index][1]}/><span>{String(index+1).padStart(2,"0")}</span></div><div className="process-copy"><h3>{stage}</h3></div></article>)}</div><input className="process-scrollbar" type="range" min="0" max="100" value={experienceScroll} onChange={scrollExperience} aria-label="Scroll through the five Experience stages"/></section>

  <section id="films" className="films section-pad"><div className="section-head compact"><div><h2>Three forms for<br/><em>three kinds of story.</em></h2></div></div><div className="film-types">{films.map((film,index)=><article key={film}><span>0{index+1}</span><h3>{film}</h3></article>)}</div></section>

  <ArchitectureSection title="A FILM HAS A POINT OF VIEW" dark/>
  <ArchitectureSection title="BEYOND THE FILM"/>
  <ArchitectureSection id="about" title="ABOUT / THE FILMMAKER" dark/>
  <ArchitectureSection title="SELECTED FILM WORK"/>

  <section className="privacy"><div><h2>Your family’s story<br/>remains <em>your family’s.</em></h2></div><div><p>Names, photographs, interviews, excerpts, and sensitive material are never published without explicit permission.</p><div className="privacy-points"><span>Private delivery</span><span>Controlled review</span><span>Archival care</span></div></div></section>

  <section id="faq" className="faq section-pad"><div className="faq-title"><h2>Before we<br/><em>begin.</em></h2></div><div className="faq-list">{faq.map((item,index)=><div className={open===index?"faq-item open":"faq-item"} key={item[0]}><button onClick={()=>setOpen(open===index?null:index)} aria-expanded={open===index}><span>{String(index+1).padStart(2,"0")}</span><b>{item[0]}</b><i>{open===index?"−":"+"}</i></button><div><p>{item[1]}</p></div></div>)}</div></section>

  <section className="final-cta section-pad"><h2>FINAL<br/><em>STATEMENT</em></h2><a className="button light" href="#inquire">BEGIN A PRIVATE CONVERSATION <Arrow/></a></section>

  <section id="inquire" className="contact section-pad"><div className="contact-intro"><p className="kicker gold">Begin a private conversation</p><h2>Every legacy begins<br/>with a <em>conversation.</em></h2><div className="contact-details"><a href="mailto:hello@greenroadfilms.com">hello@greenroadfilms.com</a><a href="tel:+14158161060">+1 415 816 1060</a><span>San Francisco Bay Area, California</span></div></div>{sent?<div className="thanks"><span>✦</span><h3>Thank you for trusting us with the beginning.</h3><p>Your inquiry has been prepared. Connect this form to your email or CRM before launch to receive submissions.</p><button onClick={()=>setSent(false)}>Send another story</button></div>:<form onSubmit={submit}><label>Your name<input required autoComplete="name"/></label><label>Email address<input required type="email" autoComplete="email"/></label><label>Phone <span>optional</span><input type="tel" autoComplete="tel"/></label><label>What would you like to preserve?<select required defaultValue=""><option value="" disabled>Select a story territory</option>{stories.map(story=><option key={story}>{story}</option>)}<option>I’m not sure yet</option></select></label><label className="wide">Tell us a little about the story<textarea required rows={4} placeholder="Who or what is the story about? Why does preserving it matter now?"/></label><label>Where is the story located?<input/></label><label>Do you have family archives?<select defaultValue="Not sure"><option>Yes</option><option>No</option><option>Not sure</option></select></label><button className="submit" type="submit">BEGIN A PRIVATE CONVERSATION <Arrow/></button></form>}</section>

  <footer><div className="footer-brand"><span>GREEN ROAD</span><small>FAMILY LEGACY FILMS</small></div><p>Your Story. Their Legacy.<br/>A Film for Generations.</p><div className="footer-links"><a href="#stories">Stories</a><a href="#films">The Films</a><a href="#experience">The Experience</a><a href="#about">About</a><a href="#faq">FAQ</a><a href="#inquire">Inquire</a></div></footer>
 </main>
}
