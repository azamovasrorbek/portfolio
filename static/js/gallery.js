(function(){
  // Set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Canvas particles
  const canvas=document.getElementById('bg-canvas');
  const ctx=canvas.getContext('2d');
  let w=canvas.width=innerWidth,h=canvas.height=innerHeight;
  const DPR=Math.max(1,window.devicePixelRatio||1);
  canvas.width=w*DPR; canvas.height=h*DPR;
  canvas.style.width=w+'px'; canvas.style.height=h+'px';
  ctx.setTransform(DPR,0,0,DPR,0,0);

  const particles=[];
  const N=Math.min(120,Math.floor((w*h)/90000)+40);
  function rand(a,b){return a+Math.random()*(b-a);}
  function initParticles(){
    particles.length=0;
    for(let i=0;i<N;i++){
      particles.push({x:rand(0,w),y:rand(0,h),vx:rand(-0.15,0.15),vy:rand(-0.15,0.15),r:rand(0.6,2.2)});
    }
  }
  function step(){
    ctx.clearRect(0,0,w,h);
    for(const p of particles){
      p.x+=p.vx; p.y+=p.vy; p.vx*=0.995; p.vy*=0.995;
      if(p.x<-20)p.x=w+20; if(p.y<-20)p.y=h+20; if(p.x>w+20)p.x=-20; if(p.y>h+20)p.y=-20;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(126,249,255,${0.16+p.r/6})`;
      ctx.fill();
    }
  }
  function loop(){ step(); requestAnimationFrame(loop);}
  function resize(){
    w=canvas.width=innerWidth; h=canvas.height=innerHeight;
    canvas.width=w*DPR; canvas.height=h*DPR;
    canvas.style.width=w+'px'; canvas.style.height=h+'px';
    ctx.setTransform(DPR,0,0,DPR,0,0);
    initParticles();
  }
  window.addEventListener('resize',resize);
  initParticles();
  loop();

  // Tilt cards
  const tiltEls=document.querySelectorAll('.proto');
  tiltEls.forEach(el=>{
    let rect=null;
    function onMove(e){
      const x=(e.clientX||(e.touches&&e.touches[0].clientX))-rect.left;
      const y=(e.clientY||(e.touches&&e.touches[0].clientY))-rect.top;
      const px=x/rect.width; const py=y/rect.height;
      const rx=(py-0.5)*-8; const ry=(px-0.5)*10;
      el.style.transform=`perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(6px)`;
      el.style.boxShadow=`${-ry*0.8}px ${rx*0.8}px 30px rgba(20,30,60,0.35)`;
    }
    el.addEventListener('mouseenter',ev=>{
      rect=el.getBoundingClientRect();
      el.style.transition='transform .08s, box-shadow .08s';
      window.addEventListener('mousemove',onMove);
      window.addEventListener('touchmove',onMove,{passive:true});
    });
    el.addEventListener('mouseleave',ev=>{
      window.removeEventListener('mousemove',onMove);
      window.removeEventListener('touchmove',onMove);
      el.style.transform='';
      el.style.boxShadow='';
    });
  });
})();
