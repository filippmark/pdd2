import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { ApplicationState } from "../../../reducers";
import './Result.css';
import { actionCreators } from '../../../actions/saveUserAnswers';

export const Result = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const amountOfErrors = useSelector(
        (state: ApplicationState) => state.test.amountOfErrors
    );

    const amountOfCorrect = useSelector(
        (state: ApplicationState) => state.test.amountOfCorrect
    );

    const isTestFinished = useSelector(
        (state: ApplicationState) => state.test.isTestFinished
    );

    const answers = useSelector(
        (state: ApplicationState) => state.test.anwersQuestions
    );

    const isLoading = useSelector(
        (state: ApplicationState) => state.saveUserAnswers.isLoading
    );

    const isUserLoggedIn = useSelector(
        (state: ApplicationState) => state.signIn.isUserLoggedIn
    )
    const startDate = useSelector(
        (state: ApplicationState) => state.test.dateStart
    );
    const endDate = useSelector(
        (state: ApplicationState) => state.test.dateFinish
    );



    const saveAnswers = async () => {
        let durationInSeconds = 0;
        if (endDate && startDate) {
            durationInSeconds = (endDate.getTime() - startDate.getTime()) / 1000;
        }
        if (isUserLoggedIn) {
            await dispatch(actionCreators.saveUserAnswers({
                durationInSeconds,
                userAnswers: answers,
            }));
        }
        history.push('/tests');
    }


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
                <Button onClick={saveAnswers}> {isLoading ? 'Отправка результатов...' : 'Выбрать новый тест'}</Button>
            </ModalFooter>
        </Modal>
    )
}