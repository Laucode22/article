import { Component } from "react";
import Comment from "./Comment/Comment";
import './CommentList.css';

class CommentList extends Component{
    
    render(){
        return(
          <div className="CommentList">
              <Comment author="Laura" date="21/12/2020" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
              <Comment author="Philippe" date="22/05/2018" content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"/>
              <Comment author="Amanda" date="31/01/1999" content="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"/>
              
          </div> 
        );
    }

}

export default CommentList;