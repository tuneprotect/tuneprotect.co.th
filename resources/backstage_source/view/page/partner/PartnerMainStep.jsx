import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from 'react-i18next';
import {makeStyles} from "@material-ui/core/styles";
import {useParams} from "react-router-dom";
import {Step, StepButton, Stepper} from "@material-ui/core";
import globalStyle from "../../../asset/jss/standard";
import ProjectCard from "../../component/ProjectCard";
import PartnerMainForm from "./PartnerMainForm";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme),
}));

export default function PartnerMainStep(props) {
    const classes = useStyles();
    const {t} = useTranslation();
    const {mainIcon, mainTitle} = useSelector(({system}) => system);
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setStep] = useState([]);
    const [id, setId] = useState(useParams().id);

    const showPreview = () => {

    }

    useEffect(() => {

        let arrStep = [];

        if (props.config.title) {
            arrStep.push({id: "detail", label: t("global.detail")});
        }

        if (id && props.config.hasPublishPeriod === true) {
            arrStep.push({id: "publish_period", label: t("global.publish_option")});
        }

        setStep(arrStep);

    }, [id]);

    const renderPage = () => {

        if (steps[activeStep] === undefined) {
            return null
        }
        const childProp = {...props, id, setId};
        return <PartnerMainForm page={steps[activeStep].id} {...childProp} />

    }

    return <ProjectCard icon={mainIcon} title={mainTitle}>
        {steps.length > 1 &&
        <Stepper alternativeLabel nonLinear activeStep={activeStep} className={classes.stepper}>
            {steps.map((v, index) => {
                return <Step key={v.id}>
                    <StepButton onClick={() => setActiveStep(index)}>
                        {v.label}
                    </StepButton>
                </Step>;
            })}
        </Stepper>}
        {renderPage()}
    </ProjectCard>;
}
