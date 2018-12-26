import React, {Fragment} from "react";
import Link from "react-router-dom/es/Link";

const EditPage = (props) => {
    let { userData,onInputChange,handleOnSave } = props;
    //console.log('EditPage props---->',props);
    //console.log('EditPage userdata---->',userData);
    //console.log('EditPage props match params---->',props.match.params);

    //let obj = props.match && userData.filter(info => (props.match.params.id == info.id));
    // console.log('obj--->',obj);

    let obj2 = props.match && userData.length && userData.find(info => (props.match.params.id == info.id));

    let obj = [];
    obj.push(obj2);
    //console.log('obj--->',obj);

    let _userDataEdit = props.match && obj.length && obj.map((_dataEdit) => (
        <div key={_dataEdit.id} className='table-row-edit'>
            <ul className='row-container'>
                <li>
                    <label>Id : </label>
                    <strong>{_dataEdit.id}</strong>
                </li>
                <li>
                    <label>Title : </label>
                    <input type='text' name='title' value={_dataEdit.title} onChange={(e) => {onInputChange(e,_dataEdit.id)}} className='user-input-field' />
                </li>
                <li>
                    <label>Body : </label><input type='text' name='body' value={_dataEdit.body} onChange={(e) => {onInputChange(e,_dataEdit.id)}} className='user-input-field' />
                </li>
                <li>
                    <Link to='/'><input type='button' value='save' onClick={handleOnSave} className='save-Btn' /></Link>
                </li>
            </ul>
        </div>
    ));

    return(
        <Fragment>
            {
                props.match ?

                    <div>
                        <div className='edit-page-header'>
                            <h2>Edit post</h2>
                        </div>
                        {_userDataEdit}
                    </div>

                    :

                <div className='table-row-edit'>
                    <ul className='row-container'>
                        <li>
                            <label>Id : </label>
                            <strong>&nbsp;</strong>
                        </li>
                        <li>
                            <label>Title : </label>
                            <input type='text' name='title' value=''  className='user-input-field' />
                        </li>
                        <li>
                            <label>Body : </label><input type='text' name='body' value=''  className='user-input-field' />
                        </li>
                        <li>
                            <input type='button' value='save' className='save-Btn' />
                        </li>
                    </ul>
                </div>
            }
        </Fragment>
    )
}

export default EditPage