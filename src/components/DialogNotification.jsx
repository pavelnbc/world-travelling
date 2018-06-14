import React, { Component } from 'react';

class DialogNotification extends Component {
    componentDidMount() {
        this.dialog = document.getElementById('dialog');

        setTimeout(() => {
            this.dialog.classList.add('dialog-notification__shown');
        }, 2000);

/*        setInterval(() => {
            dialog.classList.add('dialog-notification__expanded-ring');

            setTimeout(() => {
                dialog.classList.remove('dialog-notification__expanded-ring');

            }, 500)
        }, 2000)*/
    }

    render() {
        let closeDialogNotification = () => {
            this.dialog.classList.remove('dialog-notification__shown');
        };

        return (
            <div className="dialog-notification" id="dialog">
                <div className="dialog-notification__closer" onClick={closeDialogNotification}>x</div>
                <div className="dialog-notification__img">
                    <img src="/img/support.png" alt="support"/>
                </div>
            </div>
        )
    }
}

export default DialogNotification