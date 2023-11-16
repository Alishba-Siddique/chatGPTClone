import './App.css';
import {useState} from 'react';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import upgrade from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMessageToOpenAI } from './openAi.js';


function App() {
  const [inputText, setInput] = useState("")

  const handleSendResponse = async () => {
    const res = await sendMessageToOpenAI(inputText);
    console.log(res);
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="New Chat" className="addBtn" />
            NewChat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Life?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to be successful in life?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="Home" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="Saved" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={upgrade} alt="Upgrade" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="userIcon" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              fugit veniam facere hic soluta, in beatae porro totam ad sunt,
              labore velit impedit distinctio maxime ab repudiandae quae
              repellat fugiat deserunt voluptatibus eos cumque iusto voluptatem.
              Quis provident eius deleniti obcaecati exercitationem delectus
              optio mollitia cumque illum sunt. Sit, deserunt! Necessitatibus
              commodi quae laborum quia magni voluptate tempore consequatur
              eligendi cumque rerum! Fuga, modi vitae consectetur nesciunt minus
              dignissimos maiores hic, quae officiis blanditiis, autem quos
              fugit aliquid. Neque velit autem pariatur aliquid itaque quas a,
              nihil nemo aspernatur culpa ratione labore saepe dolore odio
              doloremque, illum voluptates veniam blanditiis.
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="gptImgLogo" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              fugit veniam facere hic soluta, in beatae porro totam ad sunt,
              labore velit impedit distinctio maxime ab repudiandae quae
              repellat fugiat deserunt voluptatibus eos cumque iusto voluptatem.
              Quis provident eius deleniti obcaecati exercitationem delectus
              optio mollitia cumque illum sunt. Sit, deserunt! Necessitatibus
              commodi quae laborum quia magni voluptate tempore consequatur
              eligendi cumque rerum! Fuga, modi vitae consectetur nesciunt minus
              dignissimos maiores hic, quae officiis blanditiis, autem quos
              fugit aliquid. Neque velit autem pariatur aliquid itaque quas a,
              nihil nemo aspernatur culpa ratione labore saepe dolore odio
              doloremque, illum voluptates veniam blanditiis.
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" value={inputText} onChange={(e)=>{setInput(e.target.value)}}/>
            <button className="send" onClick={handleSendResponse}>
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>
            ChatGPT can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
