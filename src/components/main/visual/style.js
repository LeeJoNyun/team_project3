import styled from 'styled-components';

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
