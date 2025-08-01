import styled from "styled-components";

export const Section7Style = styled.section`
    width: 100%;
    height: 755px;
    padding: 200px 0 ;
    .inner{
        height: 100%;
        display: flex;
        flex-flow:column;
        gap:60px;
        .con1{
            width: 100%;
            height: 395px;
            display: flex;
            justify-content: center;
            gap:60px;
            img{
                width: 750px;
                height: 100%;
            }
            article{
                width:590px;
                height:100%;
                display: flex;
                flex-flow:column;
                justify-content:center;
                gap:40px;
                span{
                    display: block;
                    color: #000;
                    font-family: Inter;
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 35px; /* 145.833% */
                }
                strong{
                    display: block;
                    color: #333;
                    font-family: Inter;
                    font-size: 36px;
                    font-weight: 700;
                    line-height: 80px; /* 222.222% */
                }
                .text-box1{
                    display: flex;
                    flex-flow:column;
                    justify-content: flex-start;
                }
                
            }
        }
        .con2{
            width: 100%;
            height: 300px;
            display: flex;
            justify-content: center;
            gap:60px;
            span{
                display: block;
                color: #000;
                font-family: Inter;
                font-size: 18px;
                font-weight: 500;
                line-height: 35px; /* 194.444% */
            }
            .text-area {
                width: 700px;
                height: 300px;
                display: flex;
                justify-content:flex-end;
                align-items:center;
                article{
                    text-align:right;
                    display: flex;
                    justify-items: center;
                    flex-flow:column;
                    gap: 60px;
                }
            }
            .text-box2 {
                text-align :right;
                position:relative;
                padding : 12.5px 0;
                width: 100%;
                height: 40px;
                div{
                    position:absolute;
                    right:0;
                    width: 153px;
                    height: 40px;
                    display: flex;
                    align-items:center;
                    justify-content: center;
                    color: #333;
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 500;
                    border:1px solid #333;
                    &:hover{
                        color: #FFF;
                        font-weight: 600;
                        background:#333;
                    }
                }
            }
            .image-area{
                width:640px;
                height: 300px;
                display: flex;
                justify-content:center;
                gap: 40px;
                img{
                    width: 300px;
                    height: 300px;
                    display: block;
                }
            }
        }
    }

`;