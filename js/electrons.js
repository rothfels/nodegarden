"use strict";!function(){function t(){o=window.innerWidth*d,r=window.innerHeight*d,m=o*r,i.length=Math.sqrt(m)/25|0,h.width=o,h.height=r;var t,a;for(t=0,a=i.length;a>t;t++)i[t]||(i[t]={x:Math.random()*o,y:Math.random()*r,vx:1*Math.random()-.5,vy:1*Math.random()-.5,m:1.5*Math.random()+1,pos:Math.random()>=.5})}function a(t){var a={x:t.pageX,y:t.pageY},n=i[Math.floor(Math.random()*(i.length-1))];n.x=a.x,n.y=a.y,n.vx=0,n.vy=0,n.m=1.5*Math.random()+1}function n(){var t,a,e,m,d,h,s,l,M,x;for(requestAnimationFrame(n),y.clearRect(0,0,o,r),h=0,x=i.length-1;x>h;h++)for(s=h+1;x+1>s;s++){if(l=i[h],M=i[s],m=M.x-l.x,d=M.y-l.y,t=Math.sqrt(Math.pow(m,2)+Math.pow(d,2)),t<l.m/2+M.m/2){if(l.m<=M.m){l.x=Math.random()*o,l.y=Math.random()*r,l.vx=1*Math.random()-.5,l.vy=1*Math.random()-.5,l.m=1.5*Math.random()+1;continue}if(M.m<=l.m){M.x=Math.random()*o,M.y=Math.random()*r,M.vx=1*Math.random()-.5,M.vy=1*Math.random()-.5,M.m=1.5*Math.random()+1;continue}}a={x:m/t,y:d/t},e=2*(l.m*M.m)/Math.pow(t,2);var c=200*e;if(!(.05>c)){var f=l.pos===M.pos?-1:1;y.beginPath(),1===f?y.strokeStyle="rgba(191,63,31,"+(1>c?c:1)+")":y.strokeStyle="rgba(31,63,191,"+(1>c?c:1)+")",y.moveTo(l.x,l.y),y.lineTo(M.x,M.y),y.stroke();var g=e*a.x/l.m,w=e*a.x/l.m,u=e*a.y/M.m,p=e*a.y/M.m;l.vx+=f*g,l.vy+=f*u,M.vx-=f*w,M.vy-=f*p}}for(v?y.fillStyle="#ffffff":y.fillStyle="#000000",h=0,x=i.length;x>h;h++)y.beginPath(),y.arc(i[h].x,i[h].y,i[h].m,0,2*Math.PI),y.fill(),i[h].x+=i[h].vx,i[h].y+=i[h].vy,(i[h].x>o+25||i[h].x<-25||i[h].y>r+25||i[h].y<-25)&&(i[h].x=Math.random()*o,i[h].y=Math.random()*r,i[h].vx=1*Math.random()-.5,i[h].vy=1*Math.random()-.5)}function e(t){t.stopPropagation(),v=!v,v?document.body.classList.add("nightmode"):document.body.classList.remove("nightmode")}var o,r,m,d=window.devicePixelRatio,i=new Array(Math.sqrt(m)/10|0),h=document.createElement("canvas"),y=h.getContext("2d"),s=document.getElementById("container"),l=document.getElementsByClassName("moon")[0],v=!1;1!==d&&(h.style.transform="scale("+1/d+")",h.style.transformOrigin="0 0"),h.id="nodegarden",s.appendChild(h),t(),n(),window.addEventListener("resize",t),window.addEventListener("click",a),l.addEventListener("click",e)}();