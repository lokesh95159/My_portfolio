import{j as e,d as t}from"./index-CWRMFeSb.js";const r=()=>e.jsx(i,{children:e.jsxs("div",{className:"AnimatedDownloadResumecard",children:[e.jsxs("div",{className:"text",children:[e.jsx("span",{children:"Download my resume"}),e.jsx("p",{className:"subtitle",children:"get in touch"})]}),e.jsx("div",{className:"icons",children:e.jsx("a",{className:"btn",href:"https://drive.google.com/uc?export=download&id=11g8dTJ52hYMOAH5k5O9aBQIuULUxZP7B",children:e.jsx("svg",{y:"0",xmlns:"http://www.w3.org/2000/svg",x:"0",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid meet",className:"svg-icon",children:e.jsx("path",{strokeWidth:8,strokeLinejoin:"round",strokeLinecap:"round",fill:"none",d:"M31.8,64.5a14.5,14.5,0,0,1-3.2-28.7,17.5,17.5,0,0,1-.4-4,18.2,18.2,0,0,1,36-3.6h.3a18.2,18.2,0,0,1,3.7,36M39.1,75.4,50,86.3m0,0L60.9,75.4M50,86.3V42.7"})})})})]})}),i=t.div`
  .AnimatedDownloadResumecard {
    width: 180px;
    height: 140px;
    border-radius: 15px;
    background: rgba(105, 13, 197, 0.103);
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    justify-content: space-between;
  }

  .AnimatedDownloadResumecard::before {
    content: "😶‍🌫️";
    height: 100px;
    width: 100px;
    position: absolute;
    top: -30%;
    left: -10%;
    border-radius: 50%;
    border: 50px solid rgba(25, 55, 2525, 0.1);
    transition: all 0.8s ease;
    filter: blur(0.5rem);
    z-index: -1;
  }

  .text {
    flex-grow: 1;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: aliceblue;
    font-weight: 900;
    font-size: 1.2em;
    text-align: center;
  }

  .subtitle {
    font-size: 0.6em;
    font-weight: 300;
    color: rgba(240, 248, 255, 0.691);
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    background-color: rgba(247, 234, 234, 0.589);
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(247, 234, 234, 0.8);
    border-radius: 50%;
    overflow: hidden;
  }

  .svg-icon {
    width: 25px;
    height: 25px;
    stroke: rgb(38, 59, 126);
  }

  .btn:hover {
    background-color: rgb(255, 255, 255);
  }

  .AnimatedDownloadResumecard:hover::before {
    width: 100px;
    height: 100px;
    top: -30%;
    left: 50%;
    filter: blur(0rem);
  }
`;export{r as default};
