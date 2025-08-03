import styled from "styled-components";

export const Section8Style = styled.section`
padding-bottom:200px;
    .inner{
        width: 1600px;
        height: 438px;
        
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
                    margin-left: 14px;
                }
            }
            i{
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items:center;
                cursor: pointer;
            }
        }
        .bottom{
            width: 100%;
            height: 300px;

            .swiper{
                padding-left: 600px;
            }
            .swiper-wrapper{
                display: flex;
                justify-content: center;
                gap:50px;
               
            }
            .swiper-slide{
                display: flex;
                justify-content:center;
                align-items: center;
                width:auto;
                gap:20px;
               
            }
            img{
                display: block;
                width: 300px;
                height: 300px;
                border-radius:100%;
                
            }
            
            article{
                width:350px;
                height: 202px;
                display: flex;
                justify-content:center;
                flex-flow:column;
                gap:20px;
                padding:20px 0 ;
                position:relative;
                strong{
                    display: block;
                    font-family: Inter;
                    font-size: 24px;
                    font-weight: 400;
                    line-height: 35px; /* 145.833% */
                }
                span{
                    font-family: Inter;
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 30px; /* 187.5% */
                }

                &::after{
                        content:'';
                        width: 300px;
                        height: 300px;
                        position:absolute;
                        left: -153px;
                        top: -28px;
                        border-radius: 300px;
                        z-index:-1;
                    }
            }

            .first{
                &::after{
                    background: linear-gradient(180deg, #FEEFF0 0%, rgba(255, 255, 255, 0.00) 100%);
                }
            }
            .second{
                &::after{
background: linear-gradient(180deg, #D6F0F0 0%, rgba(255, 255, 255, 0.00) 100%);
                    
                }
            }
            .third{
                &::after{
                    background: linear-gradient(180deg, #EDDEF1 0%, rgba(255, 255, 255, 0.00) 100%);
                }
            }

            .swiper-button-prev,
            .swiper-button-next{
                display:none;
            }
        }
    }
`;