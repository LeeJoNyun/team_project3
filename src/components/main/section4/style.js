import styled from "styled-components";

export const Section4Style = styled.section`
    width: 100%;
    height: 530px;
    padding: 200px 0;
    .inner{
        height: 100%;
        display: flex;
        justify-content:center;
        flex-wrap: wrap;
        .more{
            margin-top: 60px;
            cursor: pointer;
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

        article{
            width: 450px;
            height: 430px;
            overflow:hidden;
            display: flex;
            flex-flow: column;
            gap:60px;
            .top{
                width: 100%;
                height: 76px;
                padding-left: 15px;
                display: flex;
                flex-flow: column;
                border-left : 1px solid #000;
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
            .bottom{
                display: flex;
                justify-content:space-around;
                align-items:center;
                .item{
                    width: 200px;
                    height: 277px;
                    position:relative;
                    img{
                        width: 100%;
                        height: 200px;
                        display: block;
                    }
                    .product-info{
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
                        .package{
                            display: flex;
                            justify-content:space-between;
                            align-items:center;
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
                                .plus, 
                                .min{
                                    display: block;
                                    cursor: pointer;
                                    width: 20px;
                                    display: flex;
                                    align-items:center;
                                    justify-content:center;
                                }
                            }
                        }
                    }
                }
            }
            
        }
    }
` ;
