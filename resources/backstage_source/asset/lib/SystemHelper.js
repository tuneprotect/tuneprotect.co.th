import {connectAPI} from "./FormHelper";
import {API_STATUS_RESULT, API_URL_LIST} from "../../config/config";
import {changePublishData} from "../../store/system/SystemReducer";
import store from "../../store";

export const getUnPublish = async () => {
    const response = await connectAPI(API_URL_LIST.systemGetUnPublish, {
        showStatus: false,
        showLoading: false
    });

    if (response.status === API_STATUS_RESULT.SUCCESS) {
        store.dispatch(changePublishData(response.result));
    }
}
