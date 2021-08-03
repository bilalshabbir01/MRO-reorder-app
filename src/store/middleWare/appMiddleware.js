import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { login, setUser } from "../action/authAction";
import { store } from "../Store";
import { getAllData } from "../action/appAction";




export const _getData = () => {

    return async (dispatch, getState) => {


        let res = await api.getData();

        if (res?.success === "true") {

            dispatch(getAllData(res.result))
            return res.result

        }
        return false

        // dispatch(setLoading(false));
    }
}
export const _sendEmail = (req) => {

    return async (dispatch, getState) => {


        let res = await api.sendEmail(req);

        if (res?.success === "true") {
            let alldata = store.getState().appReducer.allData;
            let index = alldata.findIndex(f => f.material === req.material)
            let temp = alldata[index]
            temp.qty = req.qty;
            alldata[index] = temp
            dispatch(getAllData(alldata))
            return true

        }
        return false

        // dispatch(setLoading(false));
    }
}
export const _editData = (req) => {

    return async (dispatch, getState) => {
         
 
        let res = await api.editData(req);

        if (res?.success==="true") {
            
            // alert("data edited successfully")
            // dispatch(login(store.getState().authReducer.token,user))
         return res.result

        } 
        return false

        // dispatch(setLoading(false));
    }
}

