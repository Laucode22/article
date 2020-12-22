import { Component } from "react";
import './Article.css';
import CommentList from "./CommentList/CommentList";

class Article extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
           <div className="Article">
               <h1>{this.props.title}</h1>  ´
               <p className="content">{this.props.content} </p>     
               <img src={this.props.url} alt="" width={this.props.width}/>
               <CommentList/>
               
           </div>
        );
    }
}

export default Article;