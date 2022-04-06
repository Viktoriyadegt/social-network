import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StatePropsType} from "../../App";



export const Profile: React.FC<StatePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />

        </div>
    )
}