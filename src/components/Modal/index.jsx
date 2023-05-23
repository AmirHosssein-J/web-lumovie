import S from "./modal.module.scss";
import Wrapper from "/src/components/HOC/Wrapper";
import Container from "/src/components/HOC/Container";
import Youtube from "./Youtube";
import Button from "/src/components/Button";

import IC_Close from "/src/assets/icon/IC_Close";
import { createPortal } from "react-dom";
import { useCallback } from "react";

const Modal = ({ trailer, isModalOpen, setIsModalOpen }) => {
  const handleClose = () => isModalOpen && setIsModalOpen(false);

  // const handleClose = useCallback(() => {
  //   setTimeout(() => {
  //     setIsModalOpen(false);
  //   }, 300);
  // }, [isModalOpen]);

  return (
    <>
      {createPortal(
        <Container className={S["overlay"]}>
          <Container
            onClick={() => handleClose()}
            className={S["close-modal"]}
          ></Container>
          <Wrapper className={S["modal"]}>
            <Button.Icon
              onClick={() => handleClose()}
              icon={<IC_Close />}
              dimension={3.25}
              border
            />
            {trailer && (
              <>
                <Youtube pathKey={trailer.key} />
              </>
            )}
          </Wrapper>
        </Container>,
        document.body
      )}
    </>
  );
};

export default Modal;
// https://www.youtube.com/watch?v=
