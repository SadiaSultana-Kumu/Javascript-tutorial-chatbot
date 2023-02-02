import React, { useEffect, useState } from 'react';
import './Chatbox.css';
import DialogFlowService from '../../service/DialogFlowService';
import Message from '../Message/Message';

const ChatBox = () => {
    const [data, setData] = useState([]);



    const handleSubmit = async (e) => {
        if (e.key === "Enter") {

            if (!e.target.value) {
                return alert('you need to type somthing first')
            }
            setData(data => [...data, { who: "user", msg: e.target.value }])
            //we will send request to text query route 
            const res = await DialogFlowService.addTextQuery({ [e.target.name]: e.target.value })
            setData(data => [...data, { who: "bot", msg: res?.data?.fulfillmentText }])

            e.target.value = "";
        }

    }



    return (
        <div style={{
            height: 620, width: 700,
            border: '3px solid black', borderRadius: '7px'
        }}>
            <div style={{ height: 564, width: '100%', overflow: 'auto' }} >
                {
                    data?.map((message, i) => (
                        <Message msgData={message.msg} userType={message.who}/>
                    ))
                }
            </div>
            <input
                style={{
                    margin: 0, width: '100%', height: 50,
                    borderRadius: '4px', padding: '0px', fontSize: '1rem'
                }}
                placeholder="Send a message..."
                type="text"
                name="text"
                onKeyDown={handleSubmit}
            />

        </div>
    )
};

export default ChatBox;