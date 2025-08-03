import styled from 'styled-components';

export const VisualSectionStyle = styled.div`
    
    .visual-swiper {
        width:100vw;
        height:100%;
        position: relative;
        padding-bottom : 16px;
        .swiper-slide{
            img:nth-child(1), 
            img:nth-child(3) {
                width: calc(260 / 19.2 * 1vw); 
            }
            img:nth-child(2) {
                width: calc(1400 / 19.2 * 1vw);
            }


        }
        
                
    }
    .swiper-pagination{
            position: absolute;
            bottom: -30px; /* 슬라이더 아래로 내리기 */
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content:center;
            align-items:center;
            gap:30px;
            z-index: 10;
        }
        
        .swiper-pagination-bullet{
            width:14px;
            height: 14px;
        }
        
        .swiper-pagination-bullet-active{
            background: #767676 !important;
            width : 20px;
            height : 20px;
        }
`;

export const SwiperItemStyle = styled.div`
    width:100%;
    height: 100%;
    position:relative;
`;

export const SwiperItem = styled.article`
    width:600px;
    height:auto;
    position:absolute;
    left:50%;
    top:50%;
    transform:translateX(-50%) translateY(-50%);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    span{
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        margin-bottom: 10px;
        
    }
    .line{
        width: 300px;
        height: 1px;
        background: #FFF;
        margin-bottom: 20px;
    }
    strong{
        color: #FFF;
        font-family: Inter;
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 80px;
    }
    .more{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width:105px;
        height: 40px;
        border: 1px solid #FFF;
        color: #FFF;
        font-family: Inter;
        font-size: 16px;
        font-weight: 900;
        box-sizing:border-box;
        line-height: 40px;
        &:hover{
            border: 1px solid #FFF;
            background: #333;
        }
    }
`;
