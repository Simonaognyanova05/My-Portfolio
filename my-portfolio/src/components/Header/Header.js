import { useState } from "react";
import './Header.css';
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
export default function Header(){const{admin}=useAuth();const[open,setOpen]=useState(false);const links=[["/","About"],["/services","Education"],["/my-work","Work"],["/contact","Contact"]];return <header className="site-header"><Link className="brand" to="/"><b>SO</b><span>SIMONA OGNYANOVA<small>FULL-STACK DEVELOPER</small></span></Link><nav className={open?'open':''}>{links.map(([to,x])=><NavLink end={to==='/'} to={to} onClick={()=>setOpen(false)}>{x}</NavLink>)}{admin.email&&<><NavLink to="/adminEdu">+ Education</NavLink><NavLink to="/adminServices">+ Project</NavLink><NavLink to="/messages">Messages</NavLink><NavLink to="/logout">Logout</NavLink></>}</nav><a className="hire" href="mailto:simonaognanova05@gmail.com">Available for work ↗</a><button className="menu-toggle" onClick={()=>setOpen(!open)}>☰</button></header>}
