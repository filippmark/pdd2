import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, NavLink } from "reactstrap";
import { ApplicationState } from "../../../reducers";
import './Result.css';

export const Result = () => {
    const amountOfErrors = useSelector(
        (state: ApplicationState) => state.test.amountOfErrors
    );

    const amountOfCorrect = useSelector(
        (state: ApplicationState) => state.test.amountOfCorrect
    );

    const isTestFinished = useSelector(
        (state: ApplicationState) => state.test.isTestFinished
    );

    return (
        <Modal
            isOpen={isTestFinished}
            size="md"
            centered
            className="result"
        >
            <ModalHeader>
                <h4>Тест завершён</h4>
            </ModalHeader>
            <ModalBody>
                <div className="font-weight-normal">
                    <div className="d-flex">
                        <div className="mr-auto">
                            Количество неверных ответов:
                        </div>
                        <div className="text-danger">
                            {amountOfErrors}
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="mr-auto">
                            Количество верных ответов:
                        </div>
                        <div className="text-success">
                            {amountOfCorrect}
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <NavLink tag={Link} to={'/tests'}>
                    <Button> Выбрать новый тест</Button>
                </NavLink>
            </ModalFooter>
        </Modal>
    )
}