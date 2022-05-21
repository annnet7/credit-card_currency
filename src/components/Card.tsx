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
interface cardContentProps {
    cardBackground?: string,
}
const CardContent = styled.div<cardContentProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;


    background: #343345;  
    
    backround-image: url(${props => props.cardBackground || ""});
    background-repeat: no-repeat;
    backround-size: cover;
    background-position: center;

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

    @media only screen and (max-width: 450px){
        border-radius: 5.5vw;
        padding 6.7vw 11vw;
    }
   
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
    @media only screen and (max-width: 450px){
        font-size: 7.1vw;
    }
`;
const Currency = styled.p`
    font-size: 18px;
    font-weight: 800;
    line-height: 1;
    margin: 0;
    @media only screen and (max-width: 450px){
        font-size: 4vw;
    }
`;
const CardNum = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 2;
    margin: 20px 0px;
    @media only screen and (max-width: 450px){
        font-size: 5.3vw;
        margin: 4vw 0px;
    }
`;
const CardText = styled.div`
    font-size: 18px;
    font-weight: 400;
    
    @media only screen and (max-width: 450px){
        font-size: 4vw;
    }
`;
const LogoImg = styled.img`
    height: 32px;
    @media only screen and (max-width: 450px){
        height: 7.1vw;
    }
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
    @media only screen and (max-width: 450px){
        font-size:4vw;
        padding: 2.2vw;
        margin: 6.7vw 0;
    }
`;

//Interface to set card props:
interface CardProps {
    rotateCard:boolean,

    cardSum: string | number,
    currency: string,
    cardNumString: string,
    cardPeriod: string,
    paySysLogo: string,
    paySysName: string

}


function Card(props:CardProps) {
  return (
    <CardWrap>        
        <CardInner rotateDeg={props.rotateCard?'180':'0'}>
            <CardFront cardBackground="https://www.nlspacecampus.eu/cache/3/1920x1080/mob-shutterstock-481251031-20210610135721_1920x1080.jpg">
                <RowStart alignItems='baseline'><SumText>{props.cardSum}</SumText><Currency>{props.currency}</Currency></RowStart>
                <CardNum>{props.cardNumString}</CardNum>
                <Row>
                    <CardText>{props.cardPeriod}</CardText>
                <RowEnd>
                    <LogoImg src={props.paySysLogo} alt="logo" />
                    <CardText>{props.paySysName}</CardText>   
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
