import styled from "styled-components";

export const Section8Style = styled.section`
    .inner{
        width: 1600px;
        height: 438px;
        border : 1px solid #000;
        display: flex;
        justify-content: center;
        flex-wrap:wrap;
        gap: 100px;
        .top{
            width: 1400px;
            height: 38px;
            display: flex;
            justify-content : space-between;

            .text{
                span{
                    color: #2D2D2D;
                    font-family: Pretendard;
                    font-size: 20px;
                    font-weight: 500;
                }
                strong{
                    color: #2D2D2D;
                    font-family: Pretendard;
                    font-size: 32px;
                    font-weight: 700;
                }
            }
            i{
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items:center;
            }
        }
    }
`;