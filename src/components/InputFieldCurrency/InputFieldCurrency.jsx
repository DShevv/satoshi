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
  ListItemContainer,
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
  name,
  onInput,
  isError,
  ...other
}) => {
  const [active, setActive] = useState(false);

  return (
    <Container {...other}>
      {title && <Title $error={isError}>{title}</Title>}
      <InputContainer $error={isError}>
        <Label>
          <Input
            name={name}
            type={type ? type : "text"}
            placeholder={placeholder}
            disabled={disabled}
            onChange={(e) => {
              if (e.target.value < 0) {
                e.target.value = Math.abs(e.target.value);
              }

              if (e.target.value > 0) {
                onInput(Number(e.target.value));
              } else {
                onInput("");
              }
            }}
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
                  type="button"
                  onClick={() => {
                    onChange(item);
                    setActive(false);
                    document.body.classList.remove("scrollLock-select");
                  }}
                >
                  <ListItemContainer>
                    <CurrentImage src={item.image} />
                    <ItemCaption>
                      {item.title} {item.hint}
                    </ItemCaption>
                  </ListItemContainer>
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
