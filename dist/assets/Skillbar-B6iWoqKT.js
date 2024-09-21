import{R as a,j as i,P as s,d as o}from"./index-CWRMFeSb.js";const l=a.memo(({name:t,percentage:e})=>i.jsx(p,{children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"skill-box",children:i.jsxs("div",{className:"skill-bar",children:[i.jsx("span",{className:`skill-per ${t.toLowerCase()}`,style:{width:`${e}%`},children:i.jsx("span",{className:"tooltip",children:`${e}%`})}),i.jsx("span",{className:"title",children:i.jsx("p",{children:t})})]})})})}));l.displayName="Skillbar";l.propTypes={name:s.string.isRequired,percentage:s.number.isRequired};const p=o.div`
  .container {
    position: relative;
    max-width: 300px;
    width: 100%;
    padding: 10px 20px;
    border-radius: 7px;
    transition: all 0.3s ease;
  }

  .container .skill-box {
    width: 100%;
  }
  .skill-bar p {
    padding-top: 5px;
    font-size: 10px;
    width: 100%;
  }

  .skill-box .title {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: white;
  }

  .skill-box .skill-bar {
    height: 8px;
    width: 100%;
    border-radius: 6px;
    margin-top: 6px;
    background: rgba(255, 255, 255, 0.7);
    position: relative;
  }

  .skill-bar .skill-per {
    position: relative;
    display: block;
    height: 100%;
    border-radius: 6px;
    background: #4070f4;
    transition: width 0.4s ease-in-out;
  }

  @keyframes progress {
    0% {
      width: 0;
    }
    100% {
      width: inherit;
    }
  }

  .skill-per .tooltip {
    position: absolute;
    right: -14px;
    top: -28px;
    font-size: 9px;
    font-weight: 500;
    color: #fff;
    padding: 2px 6px;
    border-radius: 3px;
    background: #4070f4;
    z-index: 5;
  }

  .tooltip::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    height: 10px;
    width: 10px;
    z-index: -1;
    background-color: #4070f4;
    transform: translateX(-50%) rotate(45deg);
  }

  @media (max-width: 1024px) {
    .container {
      max-width: 250px;
      padding: 10px 15px;
    }
    .skill-box .title {
      font-size: 12px;
    }
    .skill-box .skill-bar {
      height: 6px;
    }
  }

  @media (max-width: 768px) {
    .container {
      max-width: 90px;
      padding: 10px;
    }
    .title {
      font-size: 10px;
    }
    .skill-box {
      font-size: 5px;
    }
    .skill-box .skill-bar {
      height: 5px;
    }
  }

  @media (max-width: 480px) {
    .container {
      max-width: 150px;
      padding: 8px;
    }
    .skill-box .title {
      font-size: 8px;
      padding-top: 4px;
    }
    .skill-box .skill-bar {
      height: 4px;
    }
  }

  @media (max-width: 375px) {
    .container {
      max-width: 120px;
      padding: 6px;
    }
    .skill-box .title {
      font-size: 7px;
    }
    .skill-box .skill-bar {
      height: 3px;
    }
  }
`;export{l as default};
