import React, {useState} from "react";
import PackageTable from "./PackageTable";
import WebContentMainForm from "../web_content/WebContentMainForm";
import {WEB_CONTENT} from "../../../config/config";
import Translate from "../../component/Translate";
import * as Yup from "yup";

const config = {
    title: {
        fieldProp: {
            label: <Translate id="global.title"/>,
            required: true,
        },
        validate: Yup.string()
            .required(<Translate id="error_message.required"/>)
    },
    cat_id: {
        type_id: WEB_CONTENT.FAQ_CONTACT_CATEGORY,
        label: <Translate id="global.category"/>,
    },
    content: {
        fieldProp: {
            editor: true,
            multiline: true,
            label: <Translate id="global.content"/>
        }
    },
};

export default function FaqPage({parent_id}) {

    const [id, setId] = useState("");


    const [showSection, setShowSection] = useState('table');
    return showSection === 'table' ?
        <PackageTable type_id={WEB_CONTENT.FAQ} parent_id={parent_id} setId={setId} setShowSection={setShowSection}
                      config={{
                          isSortable: true
                      }}/> :
        <WebContentMainForm
            isWebContent={true}
            type_id={WEB_CONTENT.FAQ}
            config={config}
            id={id}
            setId={setId}
            parent_id={parent_id}
            setShowSection={setShowSection}
            page="detail"/>
}
