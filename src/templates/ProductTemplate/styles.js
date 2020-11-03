import styled from 'styled-components'

export const Grid = styled.section`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 768px){
        width: 80%;
        margin: 0 auto;
        padding: 50px;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        >div:first-child{
            order: 2;
        }
         
        >div:last-child{
            order: 1;
        }
    }

`;

export const SelectWrapper = styled.div`
    margin-top: 40px;
    padding: 40px 0;
    >strong {
        display: block;
        margin-bottom: 8px;
    }
    >select {
        border: none;
        box-shadow: 0 0 15px rgba(0,0,0,0.2);
        width: 40%;
    }
`

export const Price = styled.div`::after
    margin: 40px 0;
    font-weight: bold;
    font-size: 30px;
`