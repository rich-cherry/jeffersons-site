import styled from 'styled-components'

export const FooterWrapper = styled.div`
    width: 100%;
    min-height: 50vh;
    margin-top: 70px;
    background-color: #171717;
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
    .footerText {
        height: 100%;
        padding: 0 10%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .footer {
        height: 100%;
        padding: 0 10%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        input {
            font-size: 110%;
            padding: 10px;
        }
    }
    button {
    background-color: transparent;
    color: white;
    text-decoration: none;
    border: 1px solid white;
    border-radius: 15px;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
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

