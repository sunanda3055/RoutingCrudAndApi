import React from "react";
//import '../assets/scss/style.scss'
import Detail from "./details";

class HomePage extends React.Component{

    render(){
        const { userData,onDeleteDataBtn } = this.props;

        return(
            <div className='user-details'>
                {
                    <table className='user-detail-table'>
                        <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Action</th>
                        </tr>

                        <Detail
                            userData = { userData }
                            onDeleteDataBtn = { onDeleteDataBtn }
                        />
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}

export default HomePage