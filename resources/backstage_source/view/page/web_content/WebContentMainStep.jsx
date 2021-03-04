import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from 'react-i18next';
import {makeStyles} from "@material-ui/core/styles";
import {useParams} from "react-router-dom";
import {Step, StepButton, Stepper} from "@material-ui/core";
import globalStyle from "../../../asset/jss/standard";
import ProjectCard from "../../component/ProjectCard";
import GalleryPage from "./GalleryPage";
import WebContentMainForm from "./WebContentMainForm";
import ChildContentPage from "./ChildContentPage";
import PackagePage from "../product/PackagePage";
import PackageDetailPage from "../product/PackageDetailPage";
import ProductSlideshowPage from "../product/ProductSlideshowPage";
import FaqPage from "../product/FaqPage";

const useStyles = makeStyles((theme) => ({
    ...globalStyle(theme),
}));

export default function WebContentMainStep(props) {
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

        if (props.config.hasSEO === true) {
            arrStep.push({id: "seo", label: t("global.seo")});
        }

        if (id && props.config.hasPublishPeriod === true) {
            arrStep.push({id: "publish_period", label: t("global.publish_option")});
        }

        if (id && props.config.hasPackage === true) {
            arrStep.push({id: "product_slideshow", label: t("global.slideshow")});
            arrStep.push({id: "package", label: t("global.package")});
            arrStep.push({id: "faq", label: t("global.faq")});
            // arrStep.push({id: "package_detail", label: t("global.package_detail")});
        }

        if (id && props.config.hasGallery === true) {
            arrStep.push({id: "gallery", label: t("global.gallery")});
        }

        if (id && props.config.hasChildContent) {
            arrStep.push({id: "child", label: props.config.hasChildContent.tabName});
        }

        setStep(arrStep);

    }, [id]);

    const renderPage = () => {

        if (steps[activeStep] === undefined) {
            return null
        }

        const childProp = {...props, id, setId};

        if (steps[activeStep].id === 'gallery') {
            return <GalleryPage {...childProp} />
        }

        if (steps[activeStep].id === 'package') {
            return <PackagePage product_id={id} />
        }

        if (steps[activeStep].id === 'faq') {
            return <FaqPage parent_id={id} />
        }

        if (steps[activeStep].id === 'package_detail') {
            return <PackageDetailPage product_id={id} />
        }

        if (steps[activeStep].id === 'product_slideshow') {
            return <ProductSlideshowPage product_id={id} />
        }

        if (steps[activeStep].id === 'child') {
            return <ChildContentPage  {...{
                type_id: props.type_id,
                parent_id : id,
                config : props.config.hasChildContent.config
            }} />
        }

        return <WebContentMainForm page={steps[activeStep].id} {...childProp} />

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
