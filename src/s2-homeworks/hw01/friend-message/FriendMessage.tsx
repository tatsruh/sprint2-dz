import React from 'react'
import s from './FriendMessage.module.css'

export type FriendMessageProps = {
    message:{
        id: number
        user: {
            avatar: string
            name: string
        }
        message: {
            text: string
            time: string
        }
}
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessageProps) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img src={props.message.user.avatar}
                    id={'hw1-friend-avatar-' + props.message.id}
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {props.message.user.name}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {props.message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
