import React from "react"
import ChatContainer from "./ChatContainer"
import Header from "./Header"

function ChatArea({id}) {
    return (
        <div className="chatarea">

            <Header id={id}/>
            <ChatContainer id={id}/>
            
        </div>
    )
}

export default ChatArea