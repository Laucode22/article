import { Component } from "react";
import './Comment.css';

class Comment extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
          <div className="Comment">
              <span className="span" className="author">{this.props.author}</span>
              <span className="span" className="date">{this.props.date}</span>
              <p>{this.props.content}</p>
              
          </div>  
        );
    }
}

export default Comment;