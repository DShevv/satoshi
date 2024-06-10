import { useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/Buttons/SubmitButton/SubmitButton";
import {
  ButtonContainer,
  Container,
  ExchangeIcon,
  Policy,
  RefreshContainer,
  RefreshLine,
  StyledSvgRefreshGlow,
  SvgRefresh,
} from "./ExchangeForm.style";
import InputFieldCurrency from "../../../components/InputFieldCurrency/InputFieldCurrency";
import { Form, Formik } from "formik";
import { observer } from "mobx-react-lite";
import globalStore from "../../../stores/global-store";
import { useEffect, useState } from "react";
import ExchangeService from "../../../services/ExchangeService";
import validateExchange from "../../../utils/validateExchange";

const ExchangeForm = observer(
  ({ isSell, currencies, handleChange, allItems, onSelects, ...other }) => {
    const navigate = useNavigate();
    const { exchangeStore } = globalStore;
    const { from, to, setFrom, setTo } = exchangeStore;
    const [course, setCourse] = useState();

    const onSubmit = (values) => {
      setFrom(from.currency, values.from);
      setTo(to.currency, values.to);
      if (to.currency.title === "Офлайн" || from.currency.title === "Офлайн") {
        navigate("/offline");
      } else {
        isSell ? navigate(`/sell`) : navigate(`/buy`);
      }
    };

    useEffect(() => {
      fetchCourse();
    }, []);

    const fetchCourse = async () => {
      try {
        const res = await ExchangeService.getCourseUsdt();
        setCourse(res.data.course);
      } catch (error) {
        console.log(error);
      }
    };

    const toFixedIfNecessary = (value) => {
      return +parseFloat(value).toFixed(2);
    };

    return (
      <Formik
        initialValues={{
          from: "",
          to: "",
        }}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={false}
        validate={validateExchange}
      >
        {(formik) => {
          const { errors, values, setValues } = formik;

          return (
            <Form>
              <Container {...other}>
                <InputFieldCurrency
                  isError={errors.from ? 1 : 0}
                  placeholder={"10"}
                  type={"number"}
                  name="from"
                  title={`Отправляете: ${currencies.from.title}`}
                  current={currencies.from}
                  items={allItems.from}
                  onInput={(value) => {
                    if (value === "") {
                      setValues({ to: "", from: "" });
                      return;
                    }
                    isSell
                      ? setValues({
                          from: value,
                          to: toFixedIfNecessary(value / course),
                        })
                      : setValues({
                          from: value,
                          to: toFixedIfNecessary(value * course),
                        });
                  }}
                  onChange={onSelects.setFrom}
                  info={
                    isSell
                      ? `100 ${currencies.from.cur} = ${
                          course ? toFixedIfNecessary(100 / course) : ""
                        } ${currencies.to.cur}`
                      : `1 ${currencies.from.cur} = ${course ? course : ""} ${
                          currencies.to.cur
                        }`
                  }
                />
                <RefreshContainer>
                  <RefreshLine />
                  <ExchangeIcon
                    onClick={() => {
                      handleChange();
                      setValues({
                        from: values.to,
                        to: values.from,
                      });
                    }}
                  >
                    <SvgRefresh />

                    <StyledSvgRefreshGlow />
                  </ExchangeIcon>
                  <RefreshLine />
                </RefreshContainer>
                <InputFieldCurrency
                  isError={errors.to ? 1 : 0}
                  placeholder={"950"}
                  type={"number"}
                  name="to"
                  title={`Получаете: ${currencies.to.title}`}
                  current={currencies.to}
                  items={allItems.to}
                  onChange={onSelects.setTo}
                  onInput={(value) => {
                    if (value === "") {
                      setValues({ to: "", from: "" });
                      return;
                    }
                    isSell
                      ? setValues({
                          to: value,
                          from: toFixedIfNecessary(value * course),
                        })
                      : setValues({
                          to: value,
                          from: toFixedIfNecessary(value / course),
                        });
                  }}
                />
                <ButtonContainer>
                  <SubmitButton type="submit">Перейти к обмену</SubmitButton>
                </ButtonContainer>
                <Policy>
                  Нажимая на кнопку «Перейти к обмену», я соглашаюсь с правилами
                  и пользовательским соглашением
                </Policy>
              </Container>
            </Form>
          );
        }}
      </Formik>
    );
  }
);
export default ExchangeForm;
