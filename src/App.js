import { Component } from 'react';
import './App.css';
import Article from './Article/Article';

class App extends Component {
  render(){
  return (
    <div className="App">
       <Article title="The news!" content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
       url="https://www.beready.pk/Images/NewsPaper/20190506082843442-.jpg" width={200}/>
       
    </div>
  ); 
 }
}
export default App;
