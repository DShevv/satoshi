import {
  BackgroundWrapper,
  Close,
  Container,
  CurrentArrow,
  CurrentCurrency,
  CurrentImage,
  CurrentText,
  InfoContainer,
  Input,
  InputContainer,
  ItemCaption,
  Label,
  List,
  ListArrow,
  ListItem,
  Modal,
  ModalTitle,
  Title,
} from "./InputFieldCurrency.style";
import arrow from "../../assets/icons/open-select.svg";
import { useState } from "react";
import { SvgClose, SvgOpenArrow } from "../../assets/icons/svgs";

const InputFieldCurrency = ({
  type,
  title,
  current,
  items,
  min,
  max,
  info,
  placeholder,
  disabled,
  onChange,
  ...other
}) => {
  const [active, setActive] = useState(false);

  return (
    <Container {...other}>
      {title && <Title>{title}</Title>}
      <InputContainer>
        <Label>
          <Input
            type={type ? type : "text"}
            placeholder={placeholder}
            disabled={disabled}
          />
        </Label>
        {current && (
          <CurrentCurrency
            onClick={(e) => {
              e.stopPropagation();

              if (items.length > 1) {
                setActive(true);
                document.body.classList.add("scrollLock-select");
              }
            }}
          >
            <CurrentImage src={current.image} />
            <CurrentText>
              {current.title} {current.hint}
            </CurrentText>
            {items.length > 1 && <CurrentArrow src={arrow} />}
          </CurrentCurrency>
        )}
      </InputContainer>
      {info || min || max ? (
        <InfoContainer>
          <div>
            {min && <span>Min: {min}</span>} {max && <span>Max: {max}</span>}
          </div>
          {info && <div>{info}</div>}
        </InfoContainer>
      ) : (
        ""
      )}
      {items.length > 1 && (
        <BackgroundWrapper
          className={active ? "active" : ""}
          onClick={() => {
            setActive(false);
            document.body.classList.remove("scrollLock-select");
          }}
        >
          <Modal
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ModalTitle>Выберите валюту</ModalTitle>
            <List>
              {items.map((item, index) => (
                <ListItem
                  key={`${item.text}${index}`}
                  onClick={() => {
                    onChange(item);
                    setActive(false);
                    document.body.classList.remove("scrollLock-select");
                  }}
                >
                  <CurrentImage src={item.image} />
                  <ItemCaption>
                    {item.title} {item.hint}
                  </ItemCaption>
                  <ListArrow>
                    <SvgOpenArrow />
                  </ListArrow>
                </ListItem>
              ))}
            </List>
            <Close
              onClick={() => {
                document.body.classList.remove("scrollLock-select");
                setActive(false);
              }}
            >
              <SvgClose />
            </Close>
          </Modal>
        </BackgroundWrapper>
      )}
    </Container>
  );
};

export default InputFieldCurrency;
