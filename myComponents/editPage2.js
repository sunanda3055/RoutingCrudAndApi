import React from "react";
import { Route, Link, withRouter } from "react-router-dom";

const Topic = ({match, userData,onInputChange,handleOnSave}) => {
    console.log('match from topic---->',match);
    console.log('userData from topic---->',userData);

    let _userDataEdit = userData && userData.filter((_dataEdit) => {

        if(_dataEdit.id === match.params.id) {
            return (
                <div key={_dataEdit.id} className='table-row-edit'>

                    <ul className='row-container'>
                        <li>
                            <label>Id : </label>
                            <strong>{_dataEdit.id}</strong>
                        </li>

                        <li>
                            <label>Title : </label>
                            <input type='text' name='title' value={_dataEdit.title} onChange={(e) => {
                                onInputChange(e, _dataEdit.id)
                            }} className='user-input-field'/>
                        </li>

                        <li>
                            <label>Body : </label>
                            <input
                                type='text'
                                name='body'
                                value={_dataEdit.body}
                                onChange={(e) => { onInputChange(e, _dataEdit.id) }}
                                className='user-input-field'
                            />
                        </li>

                        <li>
                            <input type='button' value='save' onClick={handleOnSave} className='save-Btn'/>
                        </li>
                    </ul>

                </div>
            )
        }
        return _dataEdit;
    });

    return (
        <div>
            {_userDataEdit}
        </div>
    );
}

const EditPage2 = (props) => {
    console.log('props---->',props);
    let {userData,onInputChange,handleOnSave} = props;

    let editID = props.userData[0] && props.userData.map((item) => {
        return(
            <div key={item.id}><Link to={`${props.match.url}/${item.id}`}>{item.title}</Link></div>
        )
    });

    return(
        <div>
            <h3>edit page showing</h3>

            <Route path={`${props.match.path}/:id`}
                   render={({match})=>(
                       <Topic
                           match={match}
                           userData={userData}
                           onInputChange={onInputChange}
                           handleOnSave={handleOnSave}
                       />
                   )}
            />
            <Route
                exact
                path={props.match.path}
                render={() => <h3>Please select wo a topic.</h3>}
            />

            {editID}

        </div>
    )
}

export default withRouter(EditPage2)