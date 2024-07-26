import styled from "styled-components"
export const MenuDestopWapper = styled.div`
    width: 100%;
    
    padding: 0px 104px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    position: relative;
    z-index: 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999;
`
export const Logo = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 99999999999999999999999;
    img{
        max-width: 95px;
    }
`
export const NavList = styled.div`
    display: flex;
    align-items: center;
    gap: 52px;
    justify-content: center;
    z-index: 999999999999999999999999999999999999999999999999;
    a{
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
        color: #fff;
    }
`
export const BtnGroup = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 24px;
    button{
        text-decoration: none;
        font-size: 16px;
        font-weight: 700;
        color: #fff;
        background-color: transparent;
        border: none;
        &:first-child{
            max-width: 28px;
            margin-right: 24px;
            img{
                max-width: 28px;
            }
        }
        &:last-child{
            color: #000;
            padding: 12px 32px;
            border-radius: 40px;
            background-color: #fff;
        }
    }
`