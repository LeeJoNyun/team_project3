import styled from "styled-components";

export const FooterStyle = styled.footer`
    width: 100%;;
    height: 240px;
    background: #58585B;
    display: flex;
    justify-content: center;
    align-items:center;

    .inner{
        width: 1600px;
        height: 105px;
        display: flex;
        justify-content: space-between;
        .left{
            width: 496px;
            height: 100px;
            display: flex;
            align-items:center;
            justify-content:center;
            gap:30px;
            .logo{
                width: 100px;
                height: 100px;
                display: block;
            }
            .info{
                width: 366px;
                height: 105px;
                span{
                    display: block;
                    color: #FFF;
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 35px; /* 218.75% */
                }
            }
            
        }
        .right{
            width: 238px;
            height: 105px;
             display: flex;
            align-items:flex-end;
            .sns{
                width: 100%;
                height: 24px;
                display: flex;
                justify-content:space-between;

                li{
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                
            }
            
        }
    }
`;