import React from 'react';

const EditData = (props) =>{
    return(
        <div className='editing-Data'>
            <button onClick={() => {props.userDetailHandleEdit()}}>Edit</button>
        </div>
    )
}

export default EditData;