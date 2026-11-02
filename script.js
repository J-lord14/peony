// Glittering falling petals
const field=document.querySelector(".petal-field");
const symbols=["✧","✦","❀","✿","·"];
for(let i=0;i<38;i++){
 const p=document.createElement("span");p.className="petal";p.textContent=symbols[Math.floor(Math.random()*symbols.length)];
 p.style.left=Math.random()*100+"%";p.style.fontSize=(8+Math.random()*18)+"px";
 p.style.animationDuration=(10+Math.random()*20)+"s";p.style.animationDelay=(-Math.random()*25)+"s";
 p.style.setProperty("--drift",(-100+Math.random()*200)+"px");field.appendChild(p);
}
// A peony image + glitter follows the pointer with smooth easing
const follower=document.querySelector(".cursor-peony");
let targetX=innerWidth/2,targetY=innerHeight/2,x=targetX,y=targetY;
window.addEventListener("pointermove",e=>{if(e.pointerType!=="touch"){targetX=e.clientX;targetY=e.clientY;follower.classList.add("active")}});
window.addEventListener("pointerleave",()=>follower.classList.remove("active"));
function follow(){x+=(targetX-x)*.17;y+=(targetY-y)*.17;follower.style.left=x+"px";follower.style.top=y+"px";requestAnimationFrame(follow)}follow();
// Reveal sections as they enter the viewport
const targets=document.querySelectorAll(".section,.closing,.bouquet,.meaning-card");
targets.forEach(el=>el.classList.add("reveal"));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12});
targets.forEach(el=>observer.observe(el));



// Floating pink glitter and magical sparks
const sparkleLayer = document.createElement("div");
sparkleLayer.className = "sparkle-layer";
document.body.appendChild(sparkleLayer);

for (let i = 0; i < 45; i++) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";

  sparkle.style.setProperty("--x", Math.random() * 100 + "%");
  sparkle.style.setProperty("--size", (Math.random() * 4 + 2) + "px");
  sparkle.style.setProperty("--duration", (Math.random() * 8 + 7) + "s");
  sparkle.style.setProperty("--delay", (Math.random() * -15) + "s");
  sparkle.style.setProperty("--drift", (Math.random() * 140 - 70) + "px");

  sparkleLayer.appendChild(sparkle);
}

// PEONY GARDEN DECORATIONS
const garden = document.createElement("div");
garden.className = "peony-garden";
garden.setAttribute("aria-hidden", "true");

// Add decorative peony blooms
for (let i = 0; i < 5; i++) {
    const flower = document.createElement("div");
    flower.className = "peony-bloom";
    garden.appendChild(flower);
}

// Add floating petals
for (let i = 0; i < 28; i++) {
    const petal = document.createElement("span");
    petal.className = "garden-petal";

    petal.style.left = Math.random() * 100 + "%";
    petal.style.animationDuration = (8 + Math.random() * 12) + "s";
    petal.style.animationDelay = (-Math.random() * 20) + "s";
    petal.style.transform = `scale(${0.5 + Math.random()})`;

    garden.appendChild(petal);
}

document.body.prepend(garden);