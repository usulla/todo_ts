import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Страница информации</h1>
            <p>Параграф тут</p>
            <button className="btn" onClick={() => history.push('/')}>Назад</button>
        </>
    )
}