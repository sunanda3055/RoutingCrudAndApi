import React from "react";
import Link from "react-router-dom/es/Link";

const Detail = (props) => {
    let { userData,onDeleteDataBtn } = props;
    //console.log('userData details page---->',userData);

    let _userData = userData.map((_data) => {
        return(
            <tr key={_data.id} className='table-row'>
                <td><strong>{_data.id}</strong></td>
                <td>{_data.title}</td>
                <td>{_data.body}</td>
                <td><button onClick={() => {onDeleteDataBtn(_data.id)}}>Delete</button></td>
                <td>
                    {/*<button onClick={() => {userDetailHandleEdit(_data.id)}}>Edit</button>*/}
                    <Link to={`editPost/${_data.id}`} >Edit</Link>
                </td>
            </tr>
        )
    });

    return(
        <React.Fragment>
            {_userData}
        </React.Fragment>
    )
}

export default Detail