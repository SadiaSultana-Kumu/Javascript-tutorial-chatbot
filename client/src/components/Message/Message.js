import React from 'react';

const Message = (props) => {
   
    return (
        <>
            {
                props.userType === "user" ?
                    <div style={{
                        marginBottom: "60px", marginRight: "5px", marginTop: "10px", width: '40%', height: 50,
                        borderRadius: '10px', padding: '10px', fontSize: '1rem',
                        background: "#C0C0C0", float: "right"
                    }}>
                        {props.msgData}
                    </div>
                    :
                    <div style={{
                        marginTop: "60px"
                    }}>
                        <div style={{
                            marginTop: "20px", marginBottom: "50px", marginLeft: "5px", width: '40%', height: 50,
                            borderRadius: '10px', padding: '10px', fontSize: '1rem',
                            background: "#C0C0C0", float: "left"
                        }}>
                            {props.msgData}
                        </div>
                    </div>

            }
        </>


    );
};

export default Message;