import React from "react";
import {useSelector} from "react-redux";
import ProjectCard from "../../component/ProjectCard";

export default function FileManagerPage() {
    const {mainIcon, mainTitle} = useSelector(({system}) => system);
    return <ProjectCard icon={mainIcon} title={mainTitle}>
        <br/>
        <iframe src="/file-manager/fm-button" frameBorder="0" width="100%" height={600}></iframe>
    </ProjectCard>

}
