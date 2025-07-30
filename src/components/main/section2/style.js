import styled from 'styled-components';


export const Section2Style = styled.section`
    .inner{
        height:660px;
        display: flex;
        justify-content:space-between;
        margin-bottom : 200px;
        .left{
            width:459px;
            display: flex;
            justify-content:flex-start;
            align-items:center;

            article{
                width:100%;
                height: 410px;

                span{
                    display: block;
                    color: #000;
                    font-family: Inter;
                    font-size: 24px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 35px; /* 145.833% */
                }
                strong{
                    color: #333;
                    font-family: Inter;
                    font-size: 64px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 140px; /* 218.75% */
                }
                .more{
                    margin-top : 50px;
                    width: 119px;
                    height: 40px;
                    text-align:center;
                    line-height:40px;
                    border: 1px solid #333;
                    &:hover{
                        background: #333;
                        color : #fff;
                    }
                }
            }
        }
        .right{
            width: 660px;
            height: 660px;

            ul{
                display:flex;
                justify-content: center;
                gap:60px;
                flex-wrap:wrap;
                li{
                    width: 300px;
                    height: 300px;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius:100%;
                        
                    }
                }
            }
        }
    }
`;