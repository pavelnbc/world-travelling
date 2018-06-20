import React, { Component } from 'react';

class DialogNotification extends Component {
    componentDidMount() {
        const chat = document.getElementById('chat');
        const chatImg = document.getElementById('chat-img');
        const ring1 = document.getElementById('ring1');
        const ring2 = document.getElementById('ring2');

        setTimeout(() => {          // Появление приглашения в чат
            chat.classList.add('appeared');
        }, 3000);

        setInterval(() => {         // Привлекающие кольца
            ring1.classList.add('expanded');

            setTimeout(() => {
                ring2.classList.add('expanded');
            }, 700);

            setTimeout(() => {
                ring1.classList.remove('expanded');
                ring2.classList.remove('expanded');
            }, 3900);
        }, 4000);

        setInterval(() => {         // Дребезжание приглашения в чат
            setTimeout(() => {
                chatImg.style.transform = 'rotate(15deg)';

                setTimeout(() => {
                    chatImg.style.transform = 'rotate(-15deg)';

                    setTimeout(() => {
                        chatImg.style.transform = 'rotate(15deg)';

                        setTimeout(() => {
                            chatImg.style.transform = 'rotate(-15deg)';

                            setTimeout(() => {
                                chatImg.style.transform = 'rotate(15deg)';

                                setTimeout(() => {
                                    chatImg.style.transform = 'rotate(-15deg)';

                                    setTimeout(() => {
                                        chatImg.style.transform = 'rotate(15deg)';

                                        setTimeout(() => {
                                            chatImg.style.transform = 'rotate(-15deg)';

                                            setTimeout(() => {
                                                chatImg.style.transform = 'rotate(15deg)';

                                                setTimeout(() => {
                                                    chatImg.style.transform = 'rotate(-15deg)';

                                                    setTimeout(() => {
                                                        chatImg.style.transform = 'rotate(15deg)';

                                                        setTimeout(() => {
                                                            chatImg.style.transform = 'rotate(5deg)';

                                                            setTimeout(() => {
                                                                chatImg.style.transform = 'rotate(0deg)';
                                                            }, 70)
                                                        }, 70)
                                                    }, 70)
                                                }, 70)
                                            }, 70)
                                        }, 70)
                                    }, 70)
                                }, 70)
                            }, 70)
                        }, 70)
                    }, 70)
                }, 70)
            }, 70)
        }, 5000)
}

    render() {
        const setChatClosed = () => {
            const chat = document.getElementById('chat');

            chat.classList.remove('appeared');
        };

        return (
            <div className="chat-notification" id="chat">
                <div className="chat-notification__closer" onClick={setChatClosed}>x</div>
                <div className="chat-notification__ring" id="ring1">
                    <div className="chat-notification__ring" id="ring2">
                        <div className="chat-notification__img" id="chat-img">
                            <img src="/img/support.png" alt="chat-img"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DialogNotification