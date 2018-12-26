import React from 'react';

const DeleteData = (props) => {
    let { data } = props;
    //console.log(props);
    return(
        <div className='deleting-Data'>
            <button onClick={() => props.onDeleteDataBtn(data.id)}>Delete</button>
        </div>
    )
}

export default DeleteData;