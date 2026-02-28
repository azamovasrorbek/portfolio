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

  // Smart Résumé template
  const resumeTemplate={
    name:"Dr. A. Ism",
    title:"PhD Candidate — Computational Imagination",
    affiliation:"Example University",
    email:"someone@example.com",
    research_interests:["Human-AI Interaction","Multimodal Reasoning","Speculative Design"],
    publications:[
      {title:"Embodied Representations", year:2025, type:"manuscript", url:null},
      {title:"Neurally-guided simulation", year:2024, type:"preprint", url:null}
    ],
    projects:[{name:"spec-sim", desc:"Toolkit for speculative simulation"}]
  };

  function downloadJSON(obj, filename='resume.json'){
    const blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download=filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),9000);
  }

  document.getElementById('download-json').addEventListener('click',()=>{
    const entry=Object.assign({},resumeTemplate,{generated_at:new Date().toISOString()});
    downloadJSON(entry,`resume-${entry.name.replace(/\s+/g,'_')}.json`);
  });

  // Contact form simulation
  const form=document.getElementById('msg-form');
  const status=document.getElementById('form-status');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    status.textContent='Sending…';
    setTimeout(()=>{
      status.textContent='Message received — I will reply when the quantum scheduler permits. ✨';
      form.reset();
      setTimeout(()=>status.textContent='',5000);
    },900);
  });
})();

const form = document.getElementById('msg-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = 'Sending…';

  const formData = new FormData(form);
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: {'X-Requested-With':'XMLHttpRequest', 'X-CSRFToken': csrftoken},
      body: formData
    });

    const data = await response.json();
    if(data.status === 'success'){
      status.textContent = `Sent successfully! Thanks, ${data.name}.`;
      form.reset();
    } else {
      status.textContent = 'Error: please try again.';
      console.log(data.errors);
    }
  } catch(err){
    status.textContent = 'Server error — please try again later.';
    console.error(err);
  }
});

const form = document.getElementById('msg-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  status.textContent = 'Sending…';

  const formData = new FormData(form);
  const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: {'X-Requested-With':'XMLHttpRequest','X-CSRFToken':csrftoken},
      body: formData
    });

    const data = await response.json();
    if(data.status === 'success'){
      status.textContent = `Sent successfully! Thanks, ${data.name}.`;
      form.reset();
    } else {
      status.textContent = 'Error: please try again.';
      console.log(data.errors);
    }
  } catch(err){
    status.textContent = 'Server error — please try again later.';
    console.error(err);
  }
});
