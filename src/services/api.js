// import { getDate } from '../components/Functions';
import { store } from '../store/Store';
import Path from './Path'

const getData = async () => {
    //console.log('runn')
    let getData = []; let err = '';

    let h = new Headers();
    h.append('Authorization')

    let req = new Request(Path.getData, { headers: h, method: 'get' })

    await fetch(req)
        .then(response => response.json())
        .then(result => { getData = result })
        .catch(error => { alert(error.message); getData = false });

    if (getData?.success === 'false') {
        alert(getData.message); getData = false
    }
    return getData
}
const sendEmail = async (paylaod) => {
    const { email, qty, type, description, material } = paylaod
    //console.log('runn')
    let getData = []; let err = '';


    var formdata = new FormData();
    formdata.append("type", type);
    formdata.append("qty", qty);
    formdata.append("material", material);
    formdata.append("description", description);
    formdata.append("email", email);

    let req = new Request(Path.sendEmail, { method: 'post', body: formdata })
    console.log(req)
    await fetch(req)
        .then(response => response.json())
        .then(result => { getData = result })
        .catch(error => { alert(error.message); getData = false });

    if (getData?.success === 'false') {
        console.log(getData)
        alert(getData.message); getData = false
    }
    return getData
}
const editData = async (request) => {
    // console.log(request, "dfrgthyjhtgrfefrgthjyhtgrfegrhtjyhtgrf")
    const {material,status,description,pintStock, uom, matlType, procType, specType, abc, mrpType, llCode, created, maxStock, coverage, safetyStock, qty} = request
    //console.log('runn')
    let getData = [];  

    // let h = new Headers();
    // h.append('Authorization', store.getState().authReducer.token)

    var formdata = new FormData();
    formdata.append("material", material);
    formdata.append("status", status);
    formdata.append("description", description);
    formdata.append("pintStock", pintStock);
    formdata.append("uom", uom);
    formdata.append("matlType", matlType);
    formdata.append("procType", procType);
    formdata.append("specType", specType);
    formdata.append("abc", abc);
    formdata.append("mrpType", mrpType);
    formdata.append("llCode", llCode);
    formdata.append("created", created);
    formdata.append("maxStock",maxStock);
    formdata.append("coverage", coverage);
    formdata.append("safetyStock", safetyStock);
    formdata.append("qty", qty);

    let req = new Request(Path.editData + request.id, { body: formdata, method: 'put' })

    await fetch(req)
        .then(response => response.json())
        .then(result => { getData = result })
        .catch(error => { alert(error.message); getData = false });

    if (getData?.success === 'false') {
        console.log("not found")
        alert(JSON.stringify(getData.message)); getData = false
    }
    return getData
}







export default {
    getData, sendEmail, editData

}
