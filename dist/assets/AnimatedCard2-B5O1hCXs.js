import{j as e,P as r,d as i}from"./index-CWRMFeSb.js";const o=t=>e.jsx(a,{children:e.jsxs("div",{className:"outer",children:[e.jsx("div",{className:"dot"}),e.jsxs("div",{className:"AnimatedCard2",children:[e.jsx("div",{className:"ray"}),e.jsx("div",{className:"text",children:e.jsxs("div",{className:"cardarea",children:[e.jsx("h1",{children:t.Title}),e.jsx("div",{className:"preventoverflowtext",children:e.jsx("p",{children:t.Description})}),e.jsx("button",{children:e.jsx("a",{href:t.Deploymentlink,target:"_blank",rel:"noopener noreferrer",children:"Click to Explore"})})]})}),e.jsx("div",{}),e.jsx("div",{className:"line topl"}),e.jsx("div",{className:"line leftl"}),e.jsx("div",{className:"line bottoml"}),e.jsx("div",{className:"line rightl"})]})]})});o.propTypes={Title:r.string.isRequired,Description:r.string.isRequired,Deploymentlink:r.string.isRequired};const a=i.div`
  .outer {
    width: 300px;
    height: 500px;
    border-radius: 10px;
    padding: 1px;
    background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
    position: relative;
  }

  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%,
    100% {
      top: 10%;
      right: 10%;
    }
    25% {
      top: 10%;
      right: calc(100% - 35px);
    }
    50% {
      top: calc(100% - 30px);
      right: calc(100% - 35px);
    }
    75% {
      top: calc(100% - 30px);
      right: 10%;
    }
  }

  .AnimatedCard2 {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    border: solid 1px #202222;
    background-size: 20px 20px;
    background: radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: #fff;
  }

  .ray {
    width: 220px;
    height: 45px;
    border-radius: 100px;
    position: absolute;
    background-color: #c7c7c7;
    opacity: 0.4;
    box-shadow: 0 0 50px #fff;
    filter: blur(10px);
    transform-origin: 10%;
    top: 0%;
    left: 0;
    transform: rotate(40deg);
  }

  .AnimatedCard2 .text {
    font-weight: bolder;
    font-size: 4rem;
    background: linear-gradient(45deg, #000000 4%, #fff, #000);
    background-clip: text;
    color: transparent;
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #2c2c2c;
  }
  .topl {
    top: 10%;
    background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
  }
  .bottoml {
    bottom: 10%;
  }
  .leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #747474 30%, #222424 70%);
  }
  .rightl {
    right: 10%;
    width: 1px;
    height: 100%;
  }

  .cardarea {
    width: 232px;
    height: 393px;
    display: flex;
    flex-direction: column;
  }
  .cardarea h1 {
    font-size: 24px;
    font-weight: bold;
    color: #15c2ed;
    text-align: center;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    line-height: 1.5;
  }

  .preventoverflowtext {
    height: 65%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .preventoverflowtext p {
    color: #dddddd;
    widht: 100%;
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

  /* Media Query for screens 768px and below */
  @media (max-width: 768px) {
    .outer {
      width: 250px;
      height: 300px;
    }
    .cardarea {
      width: 200px;
      height: 250px;
    }
    .cardarea h1 {
      font-size: 15px;
      hyphens: auto;
      line-height: 1.5;
    }
    .preventoverflowtext p {
      font-size: 10px;
      font-weight: normal;
    }

    .ray {
      width: 180px;
      height: 35px;
    }

    .AnimatedCard2 .text {
      font-size: 3rem;
    }

    .topl {
      top: 8%;
    }

    .bottoml {
      bottom: 8%;
    }

    .leftl,
    .rightl {
      left: 8%;
      right: 8%;
    }
  }

  /* Media Query for screens 375px and below */
  @media (max-width: 375px) {
    .outer {
      width: 150px;
      height: 150px;
    }

    .cardarea h1 {
      font-size: 8px;
      hyphens: auto;
      line-height: 1.5;
    }

    .cardarea {
      width: 125px;
      height: 125px;
    }

    .preventoverflowtext p {
      font-size: 5px;
      font-weight: normal;
    }
    button {
      padding: 2px 2px;
      color: white;
      font-size: 14px;
      margin-top: 5px;
    }

    .ray {
      width: 140px;
      height: 25px;
    }

    .AnimatedCard2 .text {
      font-size: 2.5rem;
    }

    .topl {
      top: 6%;
    }

    .bottoml {
      bottom: 6%;
    }

    .leftl,
    .rightl {
      left: 6%;
      right: 6%;
    }
  }
`;export{o as default};
