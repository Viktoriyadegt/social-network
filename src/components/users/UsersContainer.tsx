import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setTotalUserCountAC,
    setUsersAC,
    unFollowAC, UsersPropsType,
} from "../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

type ResponseType = {
    items: Array<UsersPropsType>
    totalCount: number
    error: string
}

 class UsersContainer extends React.Component<UsersType> {
    componentDidMount() {
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.users}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsersAC(response.data.items);
                this.props.setTotalUserCountAC(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPageAC(pageNumber)
        axios.get<ResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                return this.props.setUsersAC(response.data.items);
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)

        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <Users
                totalUsersCount={this.props.usersPage.totalUsersCount}
                pageSize={this.props.usersPage.pageSize}
                currentPage={this.props.usersPage.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.usersPage.users}
                unfollowAC={this.props.unFollowAC}
                followAC={this.props.followAC}
            />
        )
    }

}

export type MapStatePropsType = {
    usersPage: InitialStateType
}
type MapDispatchPropsType = {
    followAC : (usersId:number)=>void
    unFollowAC: (usersId:number)=>void
    setUsersAC: (users:Array<UsersPropsType>)=>void
    setCurrentPageAC: (currentPage:number)=>void
    setTotalUserCountAC:(userCount:number)=>void
}

export type UsersType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        usersPage: state.users
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        followAC:(usersId:number)=>{
            dispatch(followAC(usersId))
        },
        unFollowAC:(usersId:number)=>{
            dispatch(unFollowAC(usersId))
        },
         setUsersAC: (users:Array<UsersPropsType>)=>{
           dispatch(setUsersAC(users))
         },
        setCurrentPageAC: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCountAC: (userCount:number) => {
            dispatch(setTotalUserCountAC(userCount))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)