import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Person from './Person/Person';
import CharOutput from './CharComponent/CharOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import styleClasses from '../src/style.module.css';
class App extends Component {
  state = {
    UserName : 'sana',
    persons: [{name:'sana', age: 22}, {name:'arooj',age:24}],
    outputToggle: false,
    textLength: 0,
    text:'',
    validationInformation: 'Text is too short',
    textArray:[]
  }
  UserNameHandler = ({target}) => {
    this.setState({UserName: target.value })
  }
  ChangeOutputToggle = () => {
    this.setState({outputToggle: !this.state.outputToggle})
  }
  ShowLength = ({target}) => {
    const value = target.value;
    this.setState({text:value});
    this.setState({textArray: value.split('')});
    this.setState({textLength: target.value.length});
    if(target.value.length > 5) {
      this.setState({validationInformation: "Text is long enough"})
    } else {
      this.setState({validationInformation: "Text is too small"})
    }
  }
  removeLetterHandler = (index) => {
    let textArrayCopy = [...this.state.textArray];
    textArrayCopy.splice(index, 1);
    const convertedText = textArrayCopy.join('');
    this.setState({textArray: textArrayCopy});
    this.setState({text:convertedText});
    console.log("this is the removal index", textArrayCopy);
  }

  render() {
    let characters = this.state.textArray.map((c,index) => {
      return (
      <CharOutput letter = {c} index = {index} key={index} clicked={this.removeLetterHandler}></CharOutput>
      )
      
    });
    // let outputComponents = null;
    // let person = this.state.persons.map((person) => {
    // return <h1 key={person.age}>hello {person.name}</h1>;
    //   });

    // if(this.state.outputToggle)
    // {
    //   outputComponents = (
    //     <div>
    //       <UserOutput p1={"This is the username: " + this.state.UserName} p2="This is another one" />
    //       <UserOutput p1="Hey we are reusing components" p2="This is another one" />
    //     </div>
    //   )
    // }
    return (
  //  <div className="App">
  //    <button onClick={this.ChangeOutputToggle}>show content</button>
  //     {this.state.outputToggle === true ?
  //      <div>
  //   <UserInput changeName= {this.UserNameHandler} nameProp = {this.state.UserName} />
  //    {outputComponents}
  //   </div> : null}
  //   <Person name={this.state.persons[1].name}/>
  //   {person}
  //  </div>
  <div className="App">
    <h1 className={styleClasses.bgColor}>Assignment2 </h1>
    <div >
    <label>Enter your text here:</label>
    <input type="text" value={this.state.text} onChange={this.ShowLength} />
    <ValidationComponent info={this.state.validationInformation}></ValidationComponent>
    {characters}
    </div>
  </div>
  );}
}

export default App;
