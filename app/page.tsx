"use client";
import { ChangeEvent, ReactNode, useEffect, useRef, useState } from "react";
import audit from "./content.json";

type AuditSection={id:string;title:string;lines:string[]};
const sections=audit as AuditSection[];
const section=(title:string)=>sections.find(item=>item.title===title)!;
const Arrow=()=> <span aria-hidden>↗</span>;

function paragraphs(lines:string[]):string[]{
 const result:string[]=[]; let current="";
 for(const line of lines){
  current=current?current+" "+line:line;
  if(/[.!?][”"]?$/.test(line)||/:$/.test(line)){result.push(current);current="";}
 }
 if(current)result.push(current);
 return result;
}
function Copy({lines,headings=[]}:{lines:string[];headings?:string[]}){
 const headingSet=new Set(headings); const output:ReactNode[]=[]; let buffer:string[]=[];
 const flush=()=>{paragraphs(buffer).forEach((text,index)=>output.push(<p key={`p-${output.length}-${index}`}>{text}</p>));buffer=[]};
 lines.forEach(line=>{if(headingSet.has(line)){flush();output.push(<h3 key={`h-${output.length}`}>{line}</h3>)}else if(!/^\[ .* \]$/.test(line)){buffer.push(line)}});
 flush(); return <>{output}</>;
}
function splitGroups(lines:string[],titles:string[]){
 const indexes=titles.map(title=>lines.indexOf(title));
 return titles.map((title,index)=>({title,lines:lines.slice(indexes[index]+1,index+1<titles.length?indexes[index+1]:lines.length)}));
}

const who=section("WHO IS THIS FOR?");
const storyTitles=["A LIFE","A FAMILY","A JOURNEY","A LEGACY"];
const storyGroups=splitGroups(who.lines,storyTitles);
const whoIntro=who.lines.slice(0,who.lines.indexOf("WHAT KIND OF STORY?")+1);

const form=section("FOUR FORMS FOR FOUR KINDS OF STORY");
const filmTitles=["THE PORTRAIT","THE LOVE STORY","THE LEGACY","THE HEIRLOOM"];
const filmStart=form.lines.indexOf(filmTitles[0]);
const purposeStart=form.lines.indexOf("FOUR FORMS.");
const filmGroups=filmTitles.map((title,index)=>{
 const start=form.lines.indexOf(title)+1;
 const next=index+1<filmTitles.length?form.lines.indexOf(filmTitles[index+1]):purposeStart;
 return {title,lines:form.lines.slice(start,next)};
});

const faqSection=section("FAQ");
const faqQuestions=faqSection.lines.filter(line=>line.endsWith("?")&&line===line.toUpperCase());
const faq=faqQuestions.map((question,index)=>{
 const start=faqSection.lines.indexOf(question)+1;
 const next=index+1<faqQuestions.length?faqSection.lines.indexOf(faqQuestions[index+1]):faqSection.lines.indexOf("[ BEGIN A PRIVATE CONVERSATION ]");
 return [question,paragraphs(faqSection.lines.slice(start,next)).join(" ")] as const;
});

export default function Home(){
 const [menu,setMenu]=useState(false),[open,setOpen]=useState<number|null>(0),[progress,setProgress]=useState(0),[experienceScroll,setExperienceScroll]=useState(0);
 const experienceTrack=useRef<HTMLDivElement>(null);
 useEffect(()=>{const update=()=>setProgress(window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight)*100);update();addEventListener("scroll",update,{passive:true});return()=>removeEventListener("scroll",update)},[]);
 const move=(event:React.MouseEvent<HTMLElement>)=>{event.currentTarget.style.setProperty("--x",event.clientX+"px");event.currentTarget.style.setProperty("--y",event.clientY+"px")};
 const syncExperienceScroll=()=>{const track=experienceTrack.current;if(track)setExperienceScroll(track.scrollLeft/Math.max(1,track.scrollWidth-track.clientWidth)*100)};
 const scrollExperience=(event:ChangeEvent<HTMLInputElement>)=>{const track=experienceTrack.current;if(!track)return;const value=Number(event.target.value);track.scrollLeft=value/100*(track.scrollWidth-track.clientWidth);setExperienceScroll(value)};
 const stageImages=[
  ["https://images.pexels.com/photos/10948905/pexels-photo-10948905.jpeg?auto=compress&cs=tinysrgb&w=900","Elderly hands holding a treasured family photograph"],
  ["https://images.pexels.com/photos/34384401/pexels-photo-34384401.jpeg?auto=compress&cs=tinysrgb&w=900","A hand exploring a collection of vintage family photographs"],
  ["https://images.pexels.com/photos/34623019/pexels-photo-34623019.jpeg?auto=compress&cs=tinysrgb&w=900","A documentary camera capturing an intimate interview"],
  ["https://images.pexels.com/photos/8102674/pexels-photo-8102674.jpeg?auto=compress&cs=tinysrgb&w=900","A close view of documentary editing"],
  ["https://images.pexels.com/photos/8307718/pexels-photo-8307718.jpeg?auto=compress&cs=tinysrgb&w=900","Grandparents sharing their family history with the next generation"],
 ];
 const stages=["DISCOVER","DEVELOP","FILM","CRAFT","PRESERVE"].map(title=>section(title));
 const intro=section("INTRODUCTION FILM");
 const archive=section("YOUR FAMILY ARCHIVE");
 const distinction=section("THIS IS NOT EVENT VIDEOGRAPHY");
 const before=section("BEFORE WE FILM");
 const final=section("FINAL CTA");
 return <main onMouseMove={move}>
  <div className="scroll-progress" style={{width:`${progress}%`}}/>
  <header className="topbar"><a className="brand" href="#top"><span>GREEN ROAD</span><small>FAMILY LEGACY FILMS</small></a><nav className={menu?"nav open":"nav"}><a href="#stories">Stories</a><a href="#films">The Films</a><a href="#experience">The Experience</a><a href="#about">About</a><a href="#faq">FAQ</a></nav><a className="nav-cta" href="#inquire">Inquire <Arrow/></a><button className="menu-button" onClick={()=>setMenu(!menu)} aria-expanded={menu}>{menu?"Close":"Menu"}</button></header>

  <section className="hero" id="top"><div className="hero-art"><img src="https://images.pexels.com/photos/6972627/pexels-photo-6972627.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="A mature couple revisiting their family photographs together"/></div><div className="hero-vignette"/><div className="hero-copy"><h1>{section("HERO").lines[0]}<br/><em>{section("HERO").lines[1]}</em></h1><p className="hero-sub">{section("HERO").lines[2]}</p><p className="hero-declaration">{section("HERO").lines.slice(3,6).map(line=><span key={line}>{line}<br/></span>)}</p><div className="hero-actions"><a className="button light" href="#inquire">Begin a private conversation <Arrow/></a></div></div></section>

  <section className="content-section section-pad architecture-dark"><div className="editorial-heading"><h2>{intro.lines[0]}<br/><em>{intro.lines[1]}</em></h2></div><div className="editorial-copy"><Copy lines={intro.lines.slice(2)}/></div></section>

  <section className="content-section section-pad"><div className="editorial-heading"><h2>{section("WHAT IS A PRIVATE LEGACY FILM?").title}</h2></div><div className="editorial-copy"><Copy lines={section("WHAT IS A PRIVATE LEGACY FILM?").lines}/></div></section>

  <section className="content-section section-pad architecture-dark"><div className="editorial-heading"><h2>{who.title}</h2></div><div className="editorial-copy"><Copy lines={whoIntro} headings={["THE STORY YOU LEAVE","THE STORY YOU WANT TO KEEP","WHAT KIND OF STORY?"]}/></div></section>
  <section id="stories" className="stories section-pad"><div className="story-territories">{storyGroups.map(story=><article key={story.title}><h3>{story.title}</h3><Copy lines={story.lines}/></article>)}</div></section>

  <section className="cinema-break"><img src="https://images.pexels.com/photos/7545406/pexels-photo-7545406.jpeg?auto=compress&cs=tinysrgb&w=2000" alt="A collection of old family photographs being carefully reviewed"/><div className="frame-center">{archive.title}<br/><span>{archive.lines[0]}</span></div></section>
  <section className="content-section section-pad architecture-dark"><div className="editorial-copy editorial-wide"><Copy lines={archive.lines.slice(1)}/></div></section>

  <section className="not-video section-pad"><h2>{distinction.title.replace("EVENT VIDEOGRAPHY","")}<br/><span>event videography.</span></h2><div className="editorial-copy editorial-wide"><h3>{distinction.lines[0]}</h3><Copy lines={distinction.lines.slice(1)}/></div></section>

  <section className="content-section section-pad"><div className="editorial-heading"><h2>{before.title}</h2><h3>{before.lines[0]}</h3></div><div className="editorial-copy"><Copy lines={before.lines.slice(1)}/></div></section>
  <section id="experience" className="process section-pad"><div className="process-track" ref={experienceTrack} onScroll={syncExperienceScroll}>{stages.map((stage,index)=><article className="process-step" key={stage.title}><div className="process-image"><img src={stageImages[index][0]} alt={stageImages[index][1]}/><span>{String(index+1).padStart(2,"0")}</span></div><div className="process-copy"><h3>{stage.title}</h3><Copy lines={stage.lines}/></div></article>)}</div><input className="process-scrollbar" type="range" min="0" max="100" value={experienceScroll} onChange={scrollExperience} aria-label="Scroll through the five Experience stages"/></section>

  <section id="films" className="films section-pad"><div className="section-head compact"><div><h2>{form.title}</h2></div></div><div className="editorial-copy editorial-wide"><Copy lines={form.lines.slice(0,filmStart)}/></div><div className="film-types">{filmGroups.map(film=><article key={film.title}><h3>{film.title}</h3><Copy lines={film.lines}/></article>)}</div><div className="editorial-copy editorial-wide film-purpose"><Copy lines={form.lines.slice(purposeStart)} headings={["FOUR FORMS.","ONE PURPOSE."]}/></div></section>

  <Editorial sectionTitle="A FILM HAS A POINT OF VIEW" dark headings={["A LIFE IS NOT A TIMELINE.","THE FILMMAKER'S ROLE","NOT EVERYTHING NEEDS TO BE INCLUDED.","YOUR FAMILY'S FILM"]}/>
  <Editorial sectionTitle="BEYOND THE FILM" headings={["WHAT HAPPENS TO A STORY AFTER IT IS TOLD?","MORE THAN AN ARCHIVE","A FILM WITH A FUTURE","THE FAMILY KEEPS CHANGING","MADE TO BE KEPT","SOMEDAY"]}/>
  <Editorial id="about" sectionTitle="ABOUT / THE FILMMAKER" dark headings={["THE FILMMAKER"]}/>

  <section className="privacy"><div><h2>{section("PRIVACY").lines[0]}</h2></div><div className="editorial-copy"><Copy lines={section("PRIVACY").lines.slice(1)} headings={["PRIVATE BY DESIGN","CONTROLLED REVIEW","ARCHIVAL CARE"]}/></div></section>

  <section id="faq" className="faq section-pad"><div className="faq-title"><h2>FAQ</h2></div><div className="faq-list">{faq.map((item,index)=><div className={open===index?"faq-item open":"faq-item"} key={item[0]}><button onClick={()=>setOpen(open===index?null:index)} aria-expanded={open===index}><span>{String(index+1).padStart(2,"0")}</span><b>{item[0]}</b><i>{open===index?"−":"+"}</i></button><div><p>{item[1]}</p></div></div>)}</div><a className="button light faq-cta" href="#inquire">Begin a private conversation <Arrow/></a></section>

  <section className="final-cta section-pad"><div><p className="kicker gold">{final.lines[0]}</p><h2>{final.lines[1]}</h2><div className="editorial-copy editorial-wide"><Copy lines={final.lines.slice(2,final.lines.indexOf("[ BEGIN A PRIVATE CONVERSATION ]"))}/></div></div><a className="button light" href="#inquire">Begin a private conversation <Arrow/></a></section>

  <section id="inquire" className="contact section-pad"><div className="contact-intro"><p className="kicker gold">Begin a private conversation</p><div className="contact-details"><a href="mailto:hello@greenroadfilms.com">hello@greenroadfilms.com</a><a href="tel:+14158161060">+1 415 816 1060</a><span>San Francisco Bay Area, California</span></div></div></section>

  <footer><div className="footer-brand"><span>GREEN ROAD</span><small>FAMILY LEGACY FILMS</small></div><p>Private documentary filmmaking for the stories that deserve to continue.</p><div className="footer-links"><a href="#stories">Stories</a><a href="#films">The Films</a><a href="#experience">The Experience</a><a href="#about">About</a><a href="#faq">FAQ</a><a href="#inquire">Inquire</a></div></footer>
 </main>
}

function Editorial({sectionTitle,headings,dark=false,id}:{sectionTitle:string;headings:string[];dark?:boolean;id?:string}){
 const item=section(sectionTitle);
 return <section id={id} className={`content-section section-pad${dark?" architecture-dark":""}`}><div className="editorial-heading"><h2>{item.title}</h2></div><div className="editorial-copy"><Copy lines={item.lines} headings={headings}/></div></section>
}
