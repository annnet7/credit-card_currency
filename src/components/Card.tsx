import React from 'react';
import styled from 'styled-components';

const CardWrap = styled.div`
    width: 90vw;
    height: 55vw;
     max-width: 450px;
     max-height 275px;
     background: #343345;     
    color: #ffffff;
    border-radius: 25px;
    margin: 10px;
    padding 30px 50px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
`;
interface Props {
    alignItems?: string
}
const Row = styled.div<Props>`
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

function Card() {
  return (
    <CardWrap>
        <RowStart alignItems='baseline'><SumText>50000.00</SumText><Currency>USD</Currency></RowStart>
        <CardNum>xxxx xxxx xxxx xxxx</CardNum>
        <Row>
            <div>xx/xx</div>
           <RowEnd>
               <LogoImg src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png" alt="logo" />
           <div>MasterCard</div>   
            </RowEnd> 
        </Row>
    </CardWrap>
  );
}

export default Card;
