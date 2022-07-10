import React from "react";
import { connect } from "react-redux";
import {createPost} from '../reduxe/actions'

 class PostForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title:''
        }
    }
    submitHandler = event =>{
        event.preventDefault()
       const {title}= this.state

       if(!title.trim()){
           return
       }

       const newPost = {
           title , id: Date.now().toString()
       }
       this.props.createPost(newPost)
       this.setState({title:''})
    }
    changeInputHandler = event =>{
        event.persist()
        this.setState(prev =>({...prev,...{
            [event.target.name]: event.target.value
        }}))
    }
    render(){
        return <form onSubmit={this.submitHandler}>
            <div className="form-group">
            <label htmlFor="title">Заголовок поста</label>
            <input name="title" onChange={this.changeInputHandler} value={this.state.title} type="text" className="form-control" id="title" />
            </div>
            <button type="submit" className="btn btn-success">Создать</button>
            </form>
    }


}

const mapDispatchToProps = {
    createPost
}

export default connect(null,mapDispatchToProps)(PostForm)