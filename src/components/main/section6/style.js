import styled from "styled-components";

export const Section6Style = styled.section`
    width: 100%;
    height:623px;
    display: flex;
    flex-flow: column;
    gap:60px;
    padding-top:200px;
    .title-area{
        color: #2D2D2D;
        text-align: center;
        font-family: Pretendard;
        span{
            display: block;
            font-size: 20px;
            font-weight: 500;
        }
        strong{
            display: block;
            font-size: 32px;
            font-weight: 700;
        }
    }
    .menu{
        width: 1860px;
        height: 387px;
        display: flex;
        justify-content: center;
        align-items:center;
        gap:60px;
        li{
            width: 200px;
            height: 100%;
            display: flex;
            justify-content:center;
            align-items:center;
            img{
                width: 200px;
                height: 200px;
                border-radius: 100%;
                display: block;
            }
            .info{
                display:none;
                width: 300px;
                height: 57px;
                text-align:center;
                strong{
                    color: #2D2D2D;
                    font-family: Pretendard;
                    font-size: 20px;
                    font-weight: 700;
                }
                span{
                    color: #2D2D2D;
                    font-family: Pretendard;
                    font-size: 16px;
                    font-weight: 500;
                }
                .price1 {
                    margin-right: 10px;
                }
            }
            &:hover{
                width:300px;
                height: 387px;
                flex-wrap: wrap;
                gap:30px;
                img{
                    width :300px;
                    height: 300px;
                }
                .info{
                    display:block;
                }
            }
        }
    }

    .more-area{
        display: flex;
        justify-content: center;
        align-items:center;
        .more{
            cursor: pointer;
            width: 187px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items:center;
            border: 1px solid #333;
            color: #333;
            font-family: Inter;
            font-size: 16px;
            font-weight: 500;
            &:hover{
                background: #333;
                color: #FFF;
                font-weight: 600;
            }
        }   
    }
`;
