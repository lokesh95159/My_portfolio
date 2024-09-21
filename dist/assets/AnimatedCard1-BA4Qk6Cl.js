import{j as e,P as r,d as o}from"./index-CWRMFeSb.js";const i=t=>e.jsx(n,{children:e.jsx("div",{className:"one-div",children:e.jsxs("div",{className:"text",children:[e.jsx("h1",{children:t.Title}),e.jsx("div",{className:"preventoverflowtext",children:e.jsx("p",{children:t.Description})}),e.jsx("button",{children:e.jsx("a",{href:t.Deploymentlink,target:"_blank",rel:"noopener noreferrer",children:"Click to Explore"})})]})})});i.propTypes={Title:r.string.isRequired,Description:r.string.isRequired,Deploymentlink:r.string.isRequired};const n=o.div`
  .one-div {
    position: relative;
    height: 500px;
    width: 350px;
    background-color: #1b1b1b;
    transform-style: preserve-3d;
    animation: rot 2s infinite ease;
    border-radius: 20px;
    box-shadow: 0 0 50px 0px, inset 0 0 90px 0px;
    color: #e0e0e0;
    transition: 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text h1 {
    font-size: 24px;
    font-weight: bold;
    color: #15c2ed;
    text-align: center;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    max-width: 80%;
    line-height: 1.5;
  }

  .preventoverflowtext {
    width: 80%;
    height: 65%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .text p {
    color: #dddddd;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    line-height: 1.5;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  button {
    background: #ffa500;
    border: none;
    padding: 10px 20px;
    color: white;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
  }

  button:hover {
    background: linear-gradient(
      90deg,
      #007b83,
      #ffa500,
      #ff69b4
    ); /* Darker gradient on hover */
  }

  button a {
    color: white;
    text-decoration: none;
  }

  .one-div .text {
    opacity: 0;
    transition: all 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .one-div:hover .text {
    scale: 1.2;
    opacity: 0.7;
  }

  .one-div:hover {
    box-shadow: 0 0 30px 100px black, inset 5px 5px 5px 0px rgb(31, 31, 31);
  }

  @keyframes rot {
    0% {
      transform: rotateX(-15deg) translateY(0px);
    }
    50% {
      transform: rotateX(-15deg) translateY(-10px);
    }
    100% {
      transform: rotateX(-15deg) translateY(0px);
    }
  }

  @media (max-width: 768px) {
    .one-div {
      height: 200px;
      width: 150px;
    }
    .text h1 {
      font-size: 16px;
    }
    .text p {
      font-size: 7px;
    }
    button {
      font-size: 12px;
      padding: 6px 12px;
    }
  }

  @media (max-width: 375px) {
    .one-div {
      height: 150px;
      width: 100px;
    }
    .text h1 {
      font-size: 9px;
    }
    .text p {
      font-size: 6px;
    }
    button {
      font-size: 6px;
      padding: 3px 6px;
      margin-top: 0px;
    }
  }
`;export{i as default};
