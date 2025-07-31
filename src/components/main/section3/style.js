import styled from 'styled-components';

export const Section2Style = styled.section`
    background: #FFF9F3;
    height:600px;
    position:relative;
    .inner{
        position:absolute;
        top: 50%;
        left:50%;
        transform:translateX(-50%) translateY(-50%);
        height: 451px;
        
        display:flex;
        justify-content: flex-start;
        flex-direction: column;
        .title{
            display: block;
            color: #333;
            font-family: Inter;
            font-size: 40px;
            font-weight: 700;
            line-height: 140px;

        }
        .content{
            border-top: 1px solid rgba(119, 119, 119, 0.47);
            width: 100%;
            height:307px;
            padding-top:30px;
            display: flex;
            justify-content: space-between;
            
            article{
                
                width: 300px;
                height: 277px;
                display: flex;
                flex-flow: column wrap;
                justify-content: space-between;
                
                .content-title {
                    width: 100%;
                    display: flex;
                    flex-flow: column wrap;
                    gap:14px;
                    span{
                        width: 100%;
                        display:block;
                        color: #2D2D2D;
                        font-family: Pretendard;
                        font-size: 20px;
                        font-weight: 500;
                    }
                    strong{
                        display:block;
                        color: #2D2D2D;
                        font-family: Pretendard;
                        font-size: 32px;
                        font-weight: 700;
                    }
                }
                .content-bottom{
                    display: flex;
                    align-items:center;
                    justify-content :space-between;
                    .pagination{
                        width: 94px;
                        height: 19px;
                        display: flex;
                        justify-content : space-between;
                        align-items:center;
                        i{
                            cursor: pointer;
                            width: 15px;
                            height: 15px; 
                            display: flex;
                            justify-content: center;
                            align-items:center;
                        }
                        .page{
                            color: #000;
                            text-align: center;
                            font-family: Inter;
                            font-size: 16px;
                            font-weight: 500;
                        }
                    }
                    .more{
                        width: 119px;
                        height: 40px;
                        display: flex;
                        align-items:center;
                        justify-content:center;
                        border : 1px solid #000;
                        
                        &:hover{
                            color : #FFF;
                            background: #333;
                        }
                    }
                }
            }
        }
        .swiper-button-lock {
            display:block;
        }
        .swiper{
            width:950px;
            height: 277px;
            padding-bottom: 0;
            margin:0;

        }
    }
`;

export const Section3SwiperItemStyle = styled.div`
    width: 200px;
    height: 277px;
    display: flex;
    flex-flow:column;
    position:relative;
    img{
        display: block;
        width: 200px !important;
        height: 200px !important;
    }
    .slide-content{
        width: 180px;
        height:57px;
        display: flex;
        flex-flow: column;
        position:absolute;
        left:50%;
        transform: translateX(-50%);
        bottom:0;
        .name{
            display:block;
            color: #2D2D2D;
            font-family: Pretendard;
            font-size: 20px;
            font-weight: 700;
        }
        .product-info{
            display: flex;
            justify-content:space-between;
            align-items:center;
            position:relative;
            bottom:3px;
            .price{
                color: #2D2D2D;
                font-family: Pretendard;
                font-size: 16px;
                font-weight: 500;
            }
            .order{
                opacity:0;
                width:83px;
                height: 25px;
                border-radius: 50px;
                border: 1px solid #D9D9D9;
                background: #FFF;
                display: flex;
                justify-content: space-around;
                align-items:center;
                span{
                    color: #2D2D2D;
                    font-family: Pretendard;
                    font-size: 14px;
                    font-weight: 500;
                }
                .plus, .min{
                    cursor: pointer;
                }
                &.visible {
                    opacity :1;
                }
            }
        }
    }
  
`;