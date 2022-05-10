import React, {useState} from 'react';
import styled from 'styled-components';



//Styled components to set separate styles for component wich are not conflict with other classes
const CardWrap = styled.div`
    width: 90vw;
    height: 55vw;
    max-width: 450px;
    max-height 275px;    
    margin: 10px;    
    box-sizing: border-box;

    perspective: 1000px;
`;

interface CardInnerProps {
    rotateDeg?: string
}
const CardInner = styled.div<CardInnerProps>`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform: rotateY(${props => props.rotateDeg || '0'}deg);
  
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    background: #343345;     
    color: #ffffff;
    border-radius: 25px;
    padding 30px 50px;
    text-align: left;

    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: absolute;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
   
`;

const CardFront = styled(CardContent)``;
const CardBack = styled(CardContent)`
    justify-content: flex-start;
    transform: rotateY(180deg);
`;

interface RowProps {
    alignItems?: string
}
const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: ${props => props.alignItems || 'center' };
    justify-content: space-between;
`;
const RowStart = styled(Row)`
    justify-content: flex-start;
`;
const RowEnd = styled(Row)`
    justify-content: flex-end;
`;
const SumText = styled.p`
    font-size: 32px;
    font-weight: 600;
    line-height: 1;
    margin: 0;
    margin-right: 15px;
`;
const Currency = styled.p`
    font-size: 18px;
    font-weight: 800;
    line-height: 1;
    margin: 0;
`;
const CardNum = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 2;
    margin: 20px 0px;
`;
const LogoImg = styled.img`
    height: 32px;
`;

const CardCVV = styled.div`
    width: 100%;
    background: #ffffff;
    color: #333333;
    text-align: right;

    font-size:16px;
    font-weight: 600;
    line-height: 2;
    padding: 10px;
    margin: 30px 0;
    box-sizing: border-box;
`;

//Interface to set card props:
interface CardProps {
    rotateCard:boolean;
}


function Card(props:CardProps) {
  return (
    <CardWrap>        
        <CardInner rotateDeg={props.rotateCard?'180':'0'}>
            <CardFront>
                <RowStart alignItems='baseline'><SumText>50000.00</SumText><Currency>USD</Currency></RowStart>
                <CardNum>xxxx xxxx xxxx xxxx</CardNum>
                <Row>
                    <div>xx/xx</div>
                <RowEnd>
                    <LogoImg src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png" alt="logo" />
                <div>MasterCard</div>   
                    </RowEnd> 
                </Row>
            </CardFront>
            <CardBack>
                <CardCVV>355</CardCVV>
            </CardBack>
        </CardInner>
        
    </CardWrap>
  );
}

export default Card;
