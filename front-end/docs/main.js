document.addEventListener("DOMContentLoaded",(function(){!async function(){try{const e=await fetch("http://localhost:7000/missiles"),t=await e.json();document.getElementById("missilesList").innerHTML=function(e){return`<ul>${e.map((e=>`<li style="list-style-type:none; padding:20px;"><a href="missileDetails.html?name=${e.name}">${e.name}</a></li>`)).join("")}</ul>`}(t)}catch(e){console.error("Error fetching missiles:",e)}}()}));