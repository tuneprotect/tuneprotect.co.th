import React, {useState} from "react";
import PackageTable from "./PackageTable";
import WebContentMainForm from "../web_content/WebContentMainForm";
import {WEB_CONTENT} from "../../../config/config";
import Translate from "../../component/Translate";
import * as Yup from "yup";

const config = {
    pic: {
        fieldProp: {
            label: <Translate id="global.image"/>,
            width: 960,
            height: 390,
        },
        validate: Yup.string()
            .required(<Translate id="error_message.required"/>)
    },
    pic_mobile: {
        fieldProp: {
            label: <Translate id="global.image_mobile"/>,
            width: 520,
            height: 480,
        }
    },
    title: {
        fieldProp: {
            label: <Translate id="global.title"/>,
            required: true,
        },
        validate: Yup.string()
            .required(<Translate id="error_message.required"/>)
    },
    content: {
        fieldProp: {
            label: <Translate id="global.content"/>,
            multiline : true
        }
    },
};

export default function ProductSlideshowPage({product_id}) {

    const [id, setId] = useState("");
    const [showSection, setShowSection] = useState('table');
    return showSection === 'table' ?
        <PackageTable
            type_id={WEB_CONTENT.PRODUCT_SLIDESHOW}
            parent_id={product_id}
            setId={setId}
            setShowSection={setShowSection}
            config={{
                isSortable : true
            }}

        /> :
        <WebContentMainForm
            isWebContent={true}
            type_id={WEB_CONTENT.PRODUCT_SLIDESHOW}
            config={config}
            id={id}
            setId={setId}
            parent_id={product_id}
            setShowSection={setShowSection}
            page="detail"/>
}
