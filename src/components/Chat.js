// import React, { Component } from "react";

// export class Chat extends Component {
//     componentDidMount() {
//         (function (d, m) {
//             var kommunicateSettings = {
//                 appId: "8ff20a31ca20ee64996c25237fe0d7da",
//                 popupWidget: true,
//                 automaticChatOpenOnNavigation: true,
//             };
//             var s = document.createElement("script");
//             s.type = "text/javascript";
//             s.async = true;
//             s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//             var h = document.getElementsByTagName("head")[0];
//             h.appendChild(s);
//             window.kommunicate = m;
//             m._globals = kommunicateSettings;
//         })(document, window.kommunicate || {});
//     }
//     render() {
//         return (
//             <div>
//                 <h1>This is our Chat Bot</h1>
//             </div>
//         );
//     }
// }

// export default Chat;

import React, { useEffect } from "react";

const Chat = () => {
    useEffect(() => {
        (function (d, m) {
            var kommunicateSettings = {
                appId: "8ff20a31ca20ee64996c25237fe0d7da",
                popupWidget: true,
                automaticChatOpenOnNavigation: true,
            };
            // var s = document.createElement("script");
            // s.type = "text/javascript";
            // s.async = true;
            // s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            // var h = document.getElementsByTagName("head")[0];
            // h.appendChild(s);
            // window.kommunicate = m;
            // m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }, []);
    return <div>Chat</div>;
};

export default Chat;
