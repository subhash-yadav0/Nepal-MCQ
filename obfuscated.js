document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("year"),t=(new Date).getFullYear();e.textContent=t})),document.addEventListener("contextmenu",(function(e){e.preventDefault()})),document.addEventListener("keydown",(function(e){"F12"===e.key&&e.preventDefault(),e.ctrlKey&&e.shiftKey&&"I"===e.key&&e.preventDefault(),e.ctrlKey&&e.shiftKey&&"C"===e.key&&e.preventDefault(),e.ctrlKey&&e.shiftKey&&"J"===e.key&&e.preventDefault(),e.ctrlKey&&"u"===e.key&&e.preventDefault()}));const menuButton=document.querySelector(".menu1"),menu=document.querySelector(".menu");menuButton.addEventListener("click",(()=>{menu.classList.toggle("active"),menuButton.style.color="white"})),document.body.style.overflow=menu.classList.contains("active")?"hidden":"",menuButton.addEventListener("click",(()=>{document.body.style.overflow=menu.classList.contains("active")?"hidden":""})),ScrollReveal().reveal(".mcqimg",{delay:500,origin:"top",interval:200}),ScrollReveal().reveal(".headdown",{delay:500,origin:"top",interval:200}),ScrollReveal().reveal(".title",{delay:500,origin:"top",interval:200}),ScrollReveal().reveal(".big-btn",{delay:50,origin:"bottom",interval:50}),ScrollReveal().reveal(".toggle-label,.toggle-content",{delay:500,origin:"top",interval:200}),document.getElementById("serv").addEventListener("click",(function(){document.getElementById("scrollable-content").classList.add("scrollable")})),document.getElementById("refresh-btn").addEventListener("click",(function(){location.reload()}));const shot=document.querySelector("#refresh-btn");function showMessage(){alert("This is a protected site!")}document.getElementById("reload").addEventListener("click",(function(){shot.style.display="block"})),function(){var e,t,n=["x25x57x3Ax3Ax20x61x74x65x63x74x6ex69x72x6f"];e=n,t=175,function(t){for(;--t;)e.push(e.shift())}(++t);var l,o;l="0x0",o=n[l-=0],alert(o)}(),showMessage();