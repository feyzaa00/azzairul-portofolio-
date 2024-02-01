//inisialisasi variable
let statusProject = 'open' ;
let statusResume = 'close' ;
let statusContact = 'close' ;
const projectTitle = document.getElementById('projectTitle') ;
const resumeTitle = document.getElementById('resumeTitle') ;
const contactTitle = document.getElementById('contactTitle') ;
const project = document.getElementById('project') ;
const resume = document.getElementById('resume') ;
const contact = document.getElementById('contact') ;






//program
document.getElementById('projectTitleClick').addEventListener('click',() =>{
    openProject() ;
})

document.getElementById('resumeTitleClick').addEventListener('click',() =>{
    openResume() ;
}) ;

document.getElementById('contactTitleClick').addEventListener('click',() =>{
    openContact() ;
})












//function


//function yang akan dijalankan saat menekan project title
function openProject(){
    
    if(statusResume == 'open'){
        statusResume = 'close' ;
        projectTitle.classList.remove('text-slate-200','after:hidden') ;
        projectTitle.classList.add('text-[hsl(255,80%,80%)]') ;
        project.classList.remove('hidden') ;
        resumeTitle.classList.remove('text-[hsl(255,80%,80%)]') ;
        resumeTitle.classList.add('text-slate-200','after:hidden') ;
        resume.classList.add('hidden') ;
        project.classList.add('flex') ;
        statusProject = 'open' ;
    }
    else if(statusContact == 'open'){
        statusContact = 'close' ;
        projectTitle.classList.remove('text-slate-200','after:hidden') ;
        projectTitle.classList.add('text-[hsl(255,80%,80%)]','flex') ;
        project.classList.remove('hidden') ;
        contactTitle.classList.remove('text-[hsl(255,80%,80%)]') ;
        contactTitle.classList.add('text-slate-200','after:hidden') ;
        contact.classList.add('hidden') ;
        project.classList.add('flex') ;
        statusProject = 'open' ;
    }

}

//function yang akan dijalankan saat menekan resume title
function openResume(){

    if(statusProject == 'open'){
        statusProject = 'close' ;
        resumeTitle.classList.remove('text-slate-200','after:hidden') ;
        resumeTitle.classList.add('text-[hsl(255,80%,80%)]') ;
        resume.classList.remove('hidden') ;
        projectTitle.classList.remove('text-[hsl(255,80%,80%)]') ;
        projectTitle.classList.add('text-slate-200','after:hidden') ;
        project.classList.add('hidden') ;
        resume.classList.add('flex') ;
        statusResume = 'open' ;
    }  
    else if(statusContact == 'open'){
        statusContact = 'close' ;
        resumeTitle.classList.remove('text-slate-200','after:hidden') ;
        resumeTitle.classList.add('text-[hsl(255,80%,80%)]') ;
        resume.classList.remove('hidden') ;
        contactTitle.classList.remove('text-[hsl(255,80%,80%)]') ;
        contactTitle.classList.add('text-slate-200','after:hidden') ;
        contact.classList.add('hidden') ;
        resume.classList.add('flex') ;
        statusResume = 'open' ;
    }  

}

//function yang akan dijalankan saat menekan contact title
function openContact(){

    if(statusProject == 'open'){
        statusProject = 'close' ;
        contactTitle.classList.remove('text-slate-200','after:hidden') ;
        contactTitle.classList.add('text-[hsl(255,80%,80%)]') ;
        contact.classList.remove('hidden') ;
        projectTitle.classList.remove('text-[hsl(255,80%,80%)]') ;
        projectTitle.classList.add('text-slate-200','after:hidden') ;
        project.classList.add('hidden') ;
        contact.classList.add('flex') ;
        statusContact = 'open' ;
    }
    else if(statusResume == 'open'){
        statusResume = 'close' ;
        contactTitle.classList.remove('text-slate-200','after:hidden') ;
        contactTitle.classList.add('text-[hsl(255,80%,80%)]') ;
        contact.classList.remove('hidden') ;
        resumeTitle.classList.remove('text-[hsl(255,80%,80%)]') ;
        resumeTitle.classList.add('text-slate-200','after:hidden') ;
        resume.classList.add('hidden') ;
        contact.classList.add('flex') ;
        statusContact = 'open' ;       
    }

}