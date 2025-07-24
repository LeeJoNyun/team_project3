import styled from 'styled-components';

export const VisualStyle = styled.div`
    width:100vw;
    
    .swiper {
        width:100vw;
        height:100%;
        position: relative;
        overflow: visible; /* ← 핵심! */
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
            background-color: #767676;
            width : 20px;
            height : 20px;
        }
    }
`;