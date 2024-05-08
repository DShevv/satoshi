import {
  StyledArrow,
  Container,
  PopUp,
  PopUpItem,
  ItemImage,
  CurrentItem,
} from "./SelectBordered.style";
import { useEffect, useState, useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

function SelectBordered({ style, items, onChange, className, value }) {
  const [isActive, setIsActive] = useState(false);
  const [current, setCurrent] = useState(value ? value : items[0]);
  const ref = useRef(null);
  useOutsideClick(ref, () => {
    setIsActive(false);
  });

  useEffect(() => {
    onChange(current);
  }, [current]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const createItemClick = (value) => {
    return () => {
      setCurrent(value);
    };
  };

  return (
    <Container
      onClick={toggle}
      className={`${className} ${isActive ? "active" : ""}`}
      ref={ref}
      style={style}
    >
      <CurrentItem>
        <ItemImage src={current.image} />
        {current.title}
      </CurrentItem>
      <StyledArrow>
        <svg
          width="16"
          height="9"
          viewBox="0 0 16 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 0.75L8 7.25L14.5 0.75" stroke="white" strokeWidth="2" />
        </svg>
      </StyledArrow>
      <PopUp>
        {items.map(
          (elem, index) =>
            elem !== current && (
              <PopUpItem
                key={elem.title + index}
                onClick={createItemClick(elem)}
              >
                <ItemImage src={elem.image} />
                {elem.title}
              </PopUpItem>
            )
        )}
      </PopUp>
    </Container>
  );
}

export default SelectBordered;
