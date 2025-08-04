import styled from 'styled-components';

export const Section1Style = styled.section`
    width:100%;
    margin:200px 0;
    .inner{
        width:1600px;
        height:582px;
        position:relative;
         padding: 0 60px; /* 버튼을 위한 공간 확보 */
        .swiper{
            width:100%;
            height:100%;
            overflow:hidden;

            .swiper-wrapper{
                width: 100%;
                height:100%;
                box-sizing:border-box;
            }
            .swiper-slide{
                display: flex;
                justify-content: space-around;
                align-items : center;
                box-sizing:border-box;
                .left{ 
                    width: 1000px;
                    height:100%;
                    position:relative;
                    img{
                        width:1000px;
                        height:570px;
                    }
                }
                .right{
                    width:400px;
                    height:100%;
                    display: flex;
                    justify-content: center;
                    align-items:center;
                    article{
                        width: 318px;
                        height: 410px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        justify-content: center;                    
                        .title{
                            font-family: Inter;
                            font-size: 24px;
                            line-height: 35px; /* 145.833% */
                        }
                        strong{
                            font-family: Inter;
                            font-size: 96px;
                            font-weight: 700;
                            line-height: 140px; /* 145.833% */
                        }
                        .text1,.text2,.text3{
                            font-family: Inter;
                            font-size: 20px;
                            font-weight: 400;
                            line-height: 35px; /* 175% */
                        }
                        .more{
                            cursor: pointer;
                            margin-top:50px;
                            width:138px;
                            height:40px;
                            line-height:40px;
                            text-align:center;
                            border:1px solid #000;
                            &:hover{
                                &:hover{
                                    background: #333;
                                    color : #fff;
                                }
                            }
                        }
                    }
                    
                }
            }

            .swiper-pagination{
            position: absolute;
            left:18px;
            bottom: 5px; 
            display: flex;
            justify-content:center;
            align-items:center;
            gap:30px;
            width:1000px;
            }
            
            .swiper-pagination-bullet{
                width: auto;
                height:4px;
                border-radius : 50px;
                flex : 1;
            }
            .swiper-pagination-bullet-active{
                flex : 2;
                background: #686868;
            }
        }

        .swiper-button{
            position:absolute;
            top:50%;
            transform : translateY(-50%);
            cursor: pointer;
            
            &:hover{
                path{
                    fill:#333;
                }
            }

        }
        .swiper-custom-button-prev{
            left:-60px;
        }
        .swiper-custom-button-next{
            right:-60px;
        }
        
    }
`;

