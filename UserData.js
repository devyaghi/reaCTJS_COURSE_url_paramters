import React from "react";
import MainMenu from "./MainMenu";

export default class UserData extends React.Component{


    render() {
        return (
            <div>
                <MainMenu/>
                <div>
                    User Data : {this.props.match.params.id}
                </div>
            </div>

        )
    }

}