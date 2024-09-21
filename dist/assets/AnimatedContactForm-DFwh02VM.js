import{r as l,j as s,d as f}from"./index-CWRMFeSb.js";const c={_origin:"https://api.emailjs.com"},x=(t,e="https://api.emailjs.com")=>{c._userID=t,c._origin=e},u=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class m{constructor(e){this.status=e.status,this.text=e.responseText}}const p=(t,e,n={})=>new Promise((i,r)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:a})=>{const d=new m(a);d.status===200||d.text==="OK"?i(d):r(d)}),o.addEventListener("error",({target:a})=>{r(new m(a))}),o.open("POST",c._origin+t,!0),Object.keys(n).forEach(a=>{o.setRequestHeader(a,n[a])}),o.send(e)}),g=(t,e,n,i)=>{const r=i||c._userID;return u(r,t,e),p("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},h=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},b=(t,e,n,i)=>{const r=i||c._userID,o=h(n);u(r,t,e);const a=new FormData(o);return a.append("lib_version","3.2.0"),a.append("service_id",t),a.append("template_id",e),a.append("user_id",r),p("/api/v1.0/email/send-form",a)},j={init:x,send:g,sendForm:b},y=()=>{const t=l.useRef(),[e,n]=l.useState({message:"",status:""}),i=o=>{o.preventDefault(),n({message:"Message is sending..."}),j.sendForm("service_8hx4tic","template_x3k8l89",t.current,"xBkClTq2mmlU9A_AQ").then(()=>{r(),n({message:"Message Sent Successfully!",status:"success"}),r(),t.current.reset()},a=>{console.log(a.text),n({message:"Failed to send message. Please try again later.",status:"error"}),r()})},r=()=>{setTimeout(()=>{n({message:"",status:""})},3e3)};return s.jsxs(v,{children:[e.message&&s.jsx("div",{className:`notification ${e.status}`,children:e.message}),s.jsx("div",{className:"contact-card1",children:s.jsx("div",{className:"contact-card2",children:s.jsxs("form",{ref:t,onSubmit:i,className:"contact-form",children:[s.jsx("p",{className:"contact-heading",children:"Get In Touch"}),s.jsx("div",{className:"contact-field",children:s.jsx("input",{required:!0,placeholder:"Name",name:"user_name",className:"input-field",type:"text"})}),s.jsx("div",{className:"contact-field",children:s.jsx("input",{required:!0,placeholder:"Email",name:"user_email",className:"input-field",type:"email"})}),s.jsx("div",{className:"contact-field",children:s.jsx("input",{required:!0,placeholder:"Subject",name:"subject",className:"input-field",type:"text"})}),s.jsx("div",{className:"contact-field",children:s.jsx("textarea",{required:!0,placeholder:"Message",name:"message",cols:30,rows:3,className:"input-field"})}),s.jsx("button",{className:"sendMessage-btn",type:"submit",children:"Send Message"})]})})})]})},v=f.div`
  position: relative;

  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1em;
    border-radius: 10px;
    font-size: 0.9em;
    z-index: 1001;
    animation: fadeIn 0.5s ease-in-out;
  }

  .notification.success {
    background-color: #4caf50;
    color: white;
  }

  .notification.error {
    background-color: #f44336;
    color: white;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    align-self: center;
    font-family: inherit;
    gap: 10px;
    padding-inline: 2em;
    padding-bottom: 0.4em;
    background-color: #171717;
    border-radius: 20px;
  }

  .contact-heading {
    text-align: center;
    margin: 2em;
    color: #fff4ea;
    font-size: 1.2em;
    background-color: transparent;
    align-self: center;
  }

  .contact-field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 10px;
    padding: 0.6em;
    border: none;
    outline: none;
    color: white;
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #ccd6f6;
    padding-inline: 1em;
  }

  .sendMessage-btn {
    cursor: pointer;
    margin-bottom: 3em;
    padding: 1em;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #fff8e8;
    font-weight: bold;
    outline: 1px solid #64ffda;
    transition: all ease-in-out 0.3s;
  }

  .sendMessage-btn:hover {
    transition: all ease-in-out 0.3s;
    background-color: #48cfcb;
    color: #000;
    cursor: pointer;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .contact-card1 {
    background-image: linear-gradient(
      163deg,
      #87ceeb 0%,
      #4682b4 14%,
      #4682b4 28%,
      #4682b4 42%,
      #4682b4 57%,
      #4682b4 71%,
      #4682b4 85%,
      #4682b4 100%
    );

    border-radius: 22px;
    transition: all 0.3s;
  }

  .contact-card1:hover {
    box-shadow: 0px 0px 30px 1px #87ceeb;
  }

  .contact-card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .contact-card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;export{y as default};
