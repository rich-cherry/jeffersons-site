import styled from 'styled-components'

export const IntroWrapper = styled.div`
    min-height: 70vh;
    background-color: #3b5869;
    display: grid;
    grid-template-columns: 1fr;
    color: white;

        @media (min-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        >div:first-child{
            order: 2;
        }
         
        >div:last-child{
            order: 1;
        }
    }
    .introText {
        height: 100%;
        padding: 5% 10%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .button {
        color: white;
        text-decoration: none;
        border: 1px solid white;
        border-radius: 15px;
        text-align: center;
        padding: 5px 0;
        width: 30%;
        margin-bottom: 30px;
        :hover {
            background-color: white;
            color: #3b5869;
            transition: all 1s ease;
        }
    }
`

