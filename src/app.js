import React from "react";
import Axios from 'axios';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./home";
import EditPage from "./editPage";
//import EditPage2 from "./../myComponents/editPage2";
//import '../assets/scss/style.scss'

class Home extends React.Component{

    state = {
        userData: [],
        userDetail: [],
    };

    componentDidMount() {

        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                //console.log('response--->',response.data.length);
                //window.lc = response.data;
                this.setState({userData: response.data});
            })
            .catch((error) => {
                console.log(error);
            });

    }

    onDeleteDataBtn = (id) => {
        const { userData } = this.state;
        const objIndex = userData.findIndex((obj => obj.id === id));
        const deletedUserData2 = userData.splice(objIndex,1);
        console.log('deletedUserData2--->',deletedUserData2);

        // const updatedUserData = [
        //     ...userData.slice(0, objIndex),
        //     ...userData.slice(objIndex + 1),
        // ];

        this.setState({
            userData : userData,
        });
    }

    userDetailHandleEdit = (id) => {
        const { userData } = this.state;
        const currentUser = userData.filter((info) => {
            return info['id'] === id;
        });
        this.setState({
            userDetail: currentUser
        });
    }

    onInputChange = (e, id) => {
        const { userData } = this.state;
        const newUser = [...userData];
        const temp = newUser.map((info) => {
            if (info['id'] === id) {
                const key = e.target.name;
                info[key] = e.target.value;
            }
            return info;
        });
        const updatedUser = [...temp];
        this.setState({userData: updatedUser});
    }

    handleOnSave = () => {}

    render(){
        const { userDetail,userData } = this.state;

        return(
            <Router>
                <div className='link-container'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {/*<li>*/}
                            {/*<Link to="/edit2">Edit2</Link>*/}
                        {/*</li>*/}
                    </ul>

                    <hr />

                    <Switch>
                        <Route exact path="/" render={() => (
                            <HomePage
                                userDetail = { userDetail }
                                userData = { userData }
                                onDeleteDataBtn = { this.onDeleteDataBtn }
                                userDetailHandleEdit = { this.userDetailHandleEdit }
                                onInputChange = { this.onInputChange }
                                handleOnSave = { this.handleOnSave }
                            />
                        )} />

                        <Route exact = { true } path="/editPost/:id" render={({ match }) => (
                            <EditPage
                                match = { match }
                                userData = { userData }
                                onInputChange = { this.onInputChange }
                                handleOnSave = { this.handleOnSave }
                            />
                        )}
                        />

                        {/*<Route exact = { true } path="/edit2" render = {({ match }) => (*/}
                            {/*<EditPage2*/}
                                {/*match = { match }*/}
                                {/*userData = { userData }*/}
                                {/*onInputChange = { this.onInputChange }*/}
                                {/*handleOnSave = { this.handleOnSave }*/}
                            {/*/>*/}
                        {/*)}*/}
                        {/*/>*/}
                    </Switch>

                </div>
            </Router>
        )
    }
}

export default Home