import styled from 'styled-components'

export const AboutWrapper = styled.div`
    min-height: 50vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .aboutText {
        height: 100%;
        padding: 5% 10%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .button {
        text-decoration: none;
        border: 1px solid white;
        background-color: #3b5869;
        color: white;
        border-radius: 40px;
        text-align: center;
        padding: 8px 40px;
       
        margin-bottom: 30px;
        :hover {
            background-color: white;
            border: 1px solid #3b5869;
            color: #3b5869;
            transition: all .5s ease;
        }
    }
`

