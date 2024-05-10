import styled from "styled-components";

export const PopUp = styled.ul`
  position: absolute;
  list-style: none;
  width: calc(100% + 2px);
  max-height: ;
  padding: 12px 0;
  max-height: 200px;
  overflow: auto;
  bottom: 0;
  left: -1px;
  transform: translateY(100%);
  border: 1px solid ${(props) => props.theme.colors.grayLight};
  background-color: ${(props) => props.theme.colors.blackGray};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  display: none;
  flex-direction: column;
  z-index: 12;
`;

export const StyledArrow = styled.div`
  width: 12px;
  height: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  max-width: 345px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.grayLight};
  border-radius: 8px;
  padding: 16px 13px;
  background: ${(props) => props.theme.colors.blackGray};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: initial;

  font-size: 14px;

  &.active {
    border-bottom: none;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  &.active ${PopUp} {
    display: flex;
  }

  &.active ${StyledArrow} {
    transform: rotate(180deg);
  }

  &.mobile {
    display: none;
  }

  @media (max-width: 1024px) {
    &.mobile {
      display: flex;
    }

    &.desktop {
      display: none;
    }
  }
`;

export const PopUpItem = styled.li`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    color: ${(props) => props.theme.colors.textDark};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const ItemImage = styled.img`
  max-width: 40px;
  max-height: 40px;
  object-position: center;
  object-fit: cover;
`;

export const CurrentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
