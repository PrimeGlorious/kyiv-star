(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();(()=>{const o=document.querySelector("[data-menu-open-button]"),n=document.querySelector("[data-menu-close-button]"),s=document.querySelector("[data-menu]"),r=document.querySelector("body");o.addEventListener("click",()=>{r.classList.toggle("hidden"),s.classList.toggle("is-open")}),n.addEventListener("click",()=>{r.classList.toggle("hidden"),s.classList.toggle("is-open")})})();const l=document.querySelectorAll(".header-nav-link"),u=document.location.pathname,i="active";l.forEach(o=>{if(o.classList.contains(i)&&o.classList.remove(i),u.includes(o.getAttribute("href"))){o.classList.add(i);return}});u==="/team-orion/"&&l[0].classList.add(i);
