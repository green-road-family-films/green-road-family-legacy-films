"use client";
import { ReactNode, useEffect, useState } from "react";
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
function readingGroups(lines:string[],size:number){
 const items=paragraphs(lines),groups:string[][]=[];
 for(let index=0;index<items.length;index+=size)groups.push(items.slice(index,index+size));
 return groups;
}
function ReadingDeck({lines,size=7,className=""}:{lines:string[];size?:number;className?:string}){
 return <div className={`reading-deck ${className}`}>{readingGroups(lines,size).map((group,index)=><article className="reading-card" key={index}>{group.map((text,item)=><p key={item}>{text}</p>)}</article>)}</div>;
}

const who=section("WHO IS THIS FOR?");
const storyTitles=["A LIFE","A FAMILY","A JOURNEY","A LEGACY"];
const storyGroups=splitGroups(who.lines,storyTitles);
const whoIntro=who.lines.slice(0,who.lines.indexOf("WHAT KIND OF STORY?")+1);
const whoLeave=whoIntro.indexOf("THE STORY YOU LEAVE");
const whoKeep=whoIntro.indexOf("THE STORY YOU WANT TO KEEP");
const whoKind=whoIntro.indexOf("WHAT KIND OF STORY?");

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
 const [menu,setMenu]=useState(false),[open,setOpen]=useState<number|null>(0),[progress,setProgress]=useState(0),[activeStage,setActiveStage]=useState(0),[activeFilm,setActiveFilm]=useState(0);
 useEffect(()=>{const update=()=>setProgress(window.scrollY/Math.max(1,document.documentElement.scrollHeight-window.innerHeight)*100);update();addEventListener("scroll",update,{passive:true});return()=>removeEventListener("scroll",update)},[]);
 const move=(event:React.MouseEvent<HTMLElement>)=>{event.currentTarget.style.setProperty("--x",event.clientX+"px");event.currentTarget.style.setProperty("--y",event.clientY+"px")};
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
 const privacyContent=section("PRIVACY");
 const privacyHeadings=["PRIVATE BY DESIGN","CONTROLLED REVIEW","ARCHIVAL CARE"];
 const privacyClosing=privacyContent.lines.indexOf("Because some stories are meant to be seen by everyone.");
 const privacyGroups=privacyHeadings.map((title,index)=>{
  const start=privacyContent.lines.indexOf(title)+1;
  const next=index+1<privacyHeadings.length?privacyContent.lines.indexOf(privacyHeadings[index+1]):privacyClosing;
  return {title,lines:privacyContent.lines.slice(start,next)};
 });
 return <main onMouseMove={move}>
  <div className="scroll-progress" style={{width:`${progress}%`}}/>
  <header className="topbar"><a className="brand" href="#top"><span>GREEN ROAD</span><small>FAMILY LEGACY FILMS</small></a><nav className={menu?"nav open":"nav"}><a href="#stories">Stories</a><a href="#films">The Films</a><a href="#experience">The Experience</a><a href="#about">About</a><a href="#faq">FAQ</a></nav><a className="nav-cta" href="#inquire">Inquire <Arrow/></a><button className="menu-button" onClick={()=>setMenu(!menu)} aria-expanded={menu}>{menu?"Close":"Menu"}</button></header>

  <section className="hero" id="top"><div className="hero-art"><img src="https://images.pexels.com/photos/6972627/pexels-photo-6972627.jpeg?auto=compress&cs=tinysrgb&w=2200" alt="A mature couple revisiting their family photographs together"/></div><div className="hero-vignette"/><div className="hero-copy"><h1>{section("HERO").lines[0]}<br/><em>{section("HERO").lines[1]}</em></h1><p className="hero-sub">{section("HERO").lines[2]}</p><p className="hero-declaration">{section("HERO").lines.slice(3,6).map(line=><span key={line}>{line}<br/></span>)}</p><div className="hero-actions"><a className="button light" href="#inquire">Begin a private conversation <Arrow/></a></div></div></section>

  <section className="content-section section-pad architecture-dark"><div className="editorial-heading"><h2>{intro.lines[0]}<br/><em>{intro.lines[1]}</em></h2></div><div className="editorial-copy"><Copy lines={intro.lines.slice(2)}/></div></section>

  <section className="content-section long-read section-pad"><div className="editorial-heading"><h2>{section("WHAT IS A PRIVATE LEGACY FILM?").title}</h2></div><ReadingDeck lines={section("WHAT IS A PRIVATE LEGACY FILM?").lines} size={8}/></section>

  <section className="content-section long-read section-pad architecture-dark"><div className="editorial-heading"><h2>{who.title}</h2></div><div className="reading-deck titled-deck"><article className="reading-card"><Copy lines={whoIntro.slice(0,whoLeave)}/></article><article className="reading-card"><h3>{whoIntro[whoLeave]}</h3><Copy lines={whoIntro.slice(whoLeave+1,whoKeep)}/></article><article className="reading-card"><h3>{whoIntro[whoKeep]}</h3><Copy lines={whoIntro.slice(whoKeep+1,whoKind)}/></article></div><h3 className="territory-heading">{whoIntro[whoKind]}</h3></section>
  <section id="stories" className="stories section-pad"><div className="story-territories">{storyGroups.map(story=><article key={story.title}><h3>{story.title}</h3><Copy lines={story.lines}/></article>)}</div></section>

  <section className="cinema-break"><img src="https://images.pexels.com/photos/7545406/pexels-photo-7545406.jpeg?auto=compress&cs=tinysrgb&w=2000" alt="A collection of old family photographs being carefully reviewed"/><div className="frame-center">{archive.title}<br/><span>{archive.lines[0]}</span></div></section>
  <section className="content-section long-read archive-read section-pad architecture-dark"><ReadingDeck lines={archive.lines.slice(1)} size={8}/></section>

  <section className="not-video section-pad"><h2>{distinction.title.replace("EVENT VIDEOGRAPHY","")}<br/><span>event videography.</span></h2><h3 className="distinction-heading">{distinction.lines[0]}</h3><ReadingDeck lines={distinction.lines.slice(1)} size={8} className="dark-deck"/></section>

  <section className="content-section section-pad"><div className="editorial-heading"><h2>{before.title}</h2><h3>{before.lines[0]}</h3></div><div className="editorial-copy"><Copy lines={before.lines.slice(1)}/></div></section>
  <section id="experience" className="process section-pad"><div className="experience-tabs" role="tablist">{stages.map((stage,index)=><button key={stage.title} className={activeStage===index?"active":""} onClick={()=>setActiveStage(index)} role="tab" aria-selected={activeStage===index}><span>{String(index+1).padStart(2,"0")}</span>{stage.title}</button>)}</div><article className="experience-panel" role="tabpanel"><div className="experience-image"><img src={stageImages[activeStage][0]} alt={stageImages[activeStage][1]}/></div><div className="experience-copy"><Copy lines={stages[activeStage].lines}/></div></article></section>

  <section id="films" className="films section-pad"><div className="section-head compact"><div><h2>{form.title}</h2></div></div><ReadingDeck lines={form.lines.slice(0,filmStart)} size={4} className="film-intro-deck"/><div className="film-tabs-clean" role="tablist">{filmGroups.map((film,index)=><button key={film.title} className={activeFilm===index?"active":""} onClick={()=>setActiveFilm(index)} role="tab" aria-selected={activeFilm===index}>{film.title}</button>)}</div><article className="film-panel" role="tabpanel"><h3>{filmGroups[activeFilm].lines[0]}</h3><div className="film-panel-copy"><Copy lines={filmGroups[activeFilm].lines.slice(1)}/></div></article><div className="film-purpose"><div className="purpose-top"><div className="purpose-title"><h3>{form.lines[purposeStart]}</h3><h3>{form.lines[purposeStart+1]}</h3></div><p className="purpose-lead">{form.lines[purposeStart+2]}</p></div><div className="purpose-forms">{form.lines.slice(purposeStart+3,purposeStart+7).map(line=><p key={line}>{line}</p>)}</div><div className="purpose-body"><Copy lines={form.lines.slice(purposeStart+7)}/></div></div></section>

  <Editorial sectionTitle="A FILM HAS A POINT OF VIEW" dark headings={["A LIFE IS NOT A TIMELINE.","THE FILMMAKER'S ROLE","NOT EVERYTHING NEEDS TO BE INCLUDED.","YOUR FAMILY'S FILM"]}/>
  <Editorial sectionTitle="BEYOND THE FILM" headings={["WHAT HAPPENS TO A STORY AFTER IT IS TOLD?","MORE THAN AN ARCHIVE","A FILM WITH A FUTURE","THE FAMILY KEEPS CHANGING","MADE TO BE KEPT","SOMEDAY"]}/>
  <FilmmakerSection/>

  <section className="privacy privacy-vault"><header className="privacy-intro"><h2>{privacyContent.lines[0]}</h2><Copy lines={privacyContent.lines.slice(1,privacyContent.lines.indexOf(privacyHeadings[0]))}/></header><div className="privacy-principles">{privacyGroups.map(group=><article key={group.title}><div className="privacy-mark" aria-hidden/><h3>{group.title}</h3><Copy lines={group.lines}/></article>)}</div><div className="privacy-closing"><Copy lines={privacyContent.lines.slice(privacyClosing)}/></div></section>

  <section id="faq" className="faq section-pad"><div className="faq-title"><h2>FAQ</h2></div><div className="faq-list">{faq.map((item,index)=><div className={open===index?"faq-item open":"faq-item"} key={item[0]}><button onClick={()=>setOpen(open===index?null:index)} aria-expanded={open===index}><span>{String(index+1).padStart(2,"0")}</span><b>{item[0]}</b><i>{open===index?"−":"+"}</i></button><div><p>{item[1]}</p></div></div>)}</div><a className="button light faq-cta" href="#inquire">Begin a private conversation <Arrow/></a></section>

  <section className="final-cta section-pad"><div><p className="kicker gold">{final.lines[0]}</p><h2>{final.lines[1]}</h2><div className="editorial-copy editorial-wide"><Copy lines={final.lines.slice(2,final.lines.indexOf("[ BEGIN A PRIVATE CONVERSATION ]"))}/></div></div><a className="button light" href="#inquire">Begin a private conversation <Arrow/></a></section>

  <section id="inquire" className="contact section-pad"><div className="contact-title"><h2>Begin a private conversation</h2></div><div className="contact-details"><a href="mailto:hello@greenroadfilms.com">hello@greenroadfilms.com</a><a href="tel:+14158161060">+1 415 816 1060</a><span>San Francisco Bay Area, California</span></div></section>

  <footer><div className="footer-brand"><span>GREEN ROAD</span><small>FAMILY LEGACY FILMS</small></div><p>Private documentary filmmaking for the stories that deserve to continue.</p><div className="footer-links"><a href="#stories">Stories</a><a href="#films">The Films</a><a href="#experience">The Experience</a><a href="#about">About</a><a href="#faq">FAQ</a><a href="#inquire">Inquire</a></div></footer>
 </main>
}

function Editorial({sectionTitle,headings,dark=false,id}:{sectionTitle:string;headings:string[];dark?:boolean;id?:string}){
 const item=section(sectionTitle);
 const chapters=splitGroups(item.lines,headings);
 return <section id={id} className={`chapter-section section-pad${dark?" architecture-dark":""}`}><div className="chapter-intro"><h2>{item.title}</h2></div><div className="chapter-list">{chapters.map((chapter,index)=><details key={chapter.title} open={index===0&&headings.length>1}><summary><span>{chapter.title}</span><i aria-hidden>+</i></summary><div className="chapter-copy"><Copy lines={chapter.lines}/></div></details>)}</div></section>
}

function FilmmakerSection(){
 const item=section("ABOUT / THE FILMMAKER");
 const frames=readingGroups(item.lines.slice(1),15);
 return <section id="about" className="filmmaker-section section-pad"><div className="filmmaker-heading"><h2>{item.title}</h2><h3>{item.lines[0]}</h3></div><div className="filmmaker-reel">{frames.map((frame,index)=><article className="filmmaker-frame" key={index}><div className="film-perforations top" aria-hidden/><div className="filmmaker-frame-copy">{frame.map((text,itemIndex)=><p key={itemIndex}>{text}</p>)}</div><div className="film-perforations bottom" aria-hidden/></article>)}</div></section>
}
