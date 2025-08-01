import styled from "styled-components";

export const Section5Style = styled.section`
    width: 100%;
    height:700px;
    
    .inner{
        width: 1575px;
        height: 100%;
        &::after{
            content:'';
            background-image: url('/images/con5bg.png');
            background-repeat: no-repeat;
            background-size: contain;
            width:498px;
            height:498px;
            opacity: 0.2;
            position:absolute;
            left:50%;
            top:50%;
            transform:translateX(-50%) translateY(-50%);
            z-index:-1;
        }

        .gsap-bullets{
            display: flex;
            justify-content: space-around;
            width: 258px;
            height: 18px;
            .gsap-bullet{
                width: 18px;
                height: 18px;
                border-radius: 100%;
                background-color: #FAAC59;
            }
        }
        .con-box{
            position:absolute;
            left: 70px;
            top:50%;
            transform:translateY(-50%);
            width:710px;
            height: 217px;
            display: flex;
            flex-flow: column;
            gap:40px;
            .text-area{
                strong{
                    font-size: 80px;
                    line-height: 84px;
                    font-weight:700;
                    aspect-ratio: 20/21;
                    color : #FAAC59;
                    margin-right: 40px;
                    position:relative;
                    
                }
                .dot{
                    display: inline-block;
                        width:18px;
                        height:18px;
                        border-radius:100%;
                        background-color: #FAAC59;
                        position:absolute;
                        left:41%;
                        top:-20px;
                        transform:translateX(-50%);
                    }
                .last{
                    margin-right: 20px;
                }
                span{
                    color: rgba(51, 51, 51, 0.80);
                    font-family: Inter;
                    font-size: 36px;
                    font-weight: 700;
                    line-height: 70px; /* 194.444% */
                }
            }
            .text-area2{
                strong{
                    color: #FFF;
                    font-family: Inter;
                    font-size: 64px;
                    font-weight: 700;
                    background-color:#FAAC59;
                }
                span{
                    color: rgba(51, 51, 51, 0.80);
                    font-family: Inter;
                    font-size: 48px;
                    font-weight: 700;
                    line-height: 70px; /* 145.833% */
                }
            }
        }

        .snack{
            position:absolute;
            right: 73px;
            bottom: 103px;
            width: 668px;
            height: 392px;
            border-radius:25px;
            background-image: url('/images/snack.jpg');
            background-position: -250px -67px;
        
        }
    }

`;