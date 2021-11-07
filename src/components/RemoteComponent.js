import React, { Component } from "react";

const style = {
    padding: 20,
    outline: '1px dashed black',
}

/**
 * Свойство 'host' обьекта React мы назначили в Host приложении
 * для проверки что модули React не загружаются повторно
 */
console.log('Check from 🟦 REMOTE COMPONENT - React.host is:', React.host)

class RemoteComponent extends Component {
    render() {
        return (
            <div style={ style }>
                I am RemoteComponent from REMOTE app.
            </div>
        );
    }
}

export default RemoteComponent;
