import styled from 'styled-components';

export const HeaderStyle = styled.header`
    margin: auto;
    .inner{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        padding : 0 50px;
        .logo {
            width: 100px;
            height: 100px;
        }
    }
    .bg{
        display:none;
        width: 100%;
        height:180px;
        background: rgba(215, 215, 215);
        opacity:0.6;
        z-index: 2;
        position:absolute;
        top:100%;
        left: 0;
        transition: 2s;
        &.on{
            display:block;
        }

    }
`;

export const NavBarStyle = styled.nav`
    position:relative;
    .depth1{
        display: flex;
        justify-content: center;
        li{
            width:150px;
            height:40px;
            display: flex;
            justify-content : center;
            align-items:center;
            font-size: 18px;
            position:relative;
            
            a{
                width:100%;
                height: 100%;
                text-align:center;
            }
            
            &:hover a, 
            &.active a {
                font-weight: 700;
                font-size: 20px;
            }

            .depth2{
                display:none;
                position:absolute;
                top:100%;
                left: 0;
                width: 100%;
                height:180px;
                padding-top: 55px;
                z-index:3;
                li{
                    a{
                        font-weight:400;
                        font-size:18px;
                    }
                }
                &.on{
                    display:block;
                }
            }
        }
    }
`;

export const TopMenu = styled.ul`
    width:238px;
    height:40px;
    display: flex;
    justify-content : space-between;
    align-items: center;
    li{
        a{
            display: block;
            font-size:18px;
            svg{
                width: 16px;
            height: 16px;
                width: 100%;;
                height: 100%;
            }
        }
    }
`;