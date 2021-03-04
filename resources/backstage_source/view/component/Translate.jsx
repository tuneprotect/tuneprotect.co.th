import React from 'react';
import {useTranslation} from 'react-i18next'

export default function Translate({id}) {
    const { t } = useTranslation();
    return t(id);
}
