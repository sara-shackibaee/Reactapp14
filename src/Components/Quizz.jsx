import React, { Component } from 'react'
import qlist from '../Data/Data'
import  '../CSS/quizz.css'
export default class Quizz extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
             correct:[],
             incorrect :[],
             result:'',
             mode :false,
             num1:'',
             num2:''
        }
    }
    

    handelclick = (e)=>{
        console.log(e.target.innerText)
        console.log(e.target.id)
        const reply = e.target.innerText
        const qid = e.target.id
        const answer = qlist[qid].correct
        console.log(answer)
        if (reply===answer){
          const  new_correct = this.state.correct
            new_correct.push(reply)
            this.setState({correct:new_correct})
        }
        else{
           const  new_incorrect = this.state.incorrect
            new_incorrect.push(reply)
            this.setState({incorrect:new_incorrect})
        }
    }
    handelclick1 =()=>{
       
        console.log(this.state.correct)
        console.log(this.state.incorrect)
        const sumcorrect = this.state.correct
        const sumincorrect = this.state.incorrect
        const allquestion = sumcorrect.length + sumincorrect.length
        const number = sumcorrect.length
        const number1 = sumincorrect.length
        if (number & number1){
            const  myresult = (number/allquestion)*100
        this.setState({result:myresult,mode:true,num1:number,num2:number1})
        }
        else{
            alert("please reply to question!!!")
        }
       

    }
    render() {
        return (
            <div>
                {qlist.map((item)=>{return(<div className='mydiv'><h1 ><span>{item.questionId})</span>{item.question}</h1>{item.answers.map(( ans,index)=>{return(<button   id={item.questionId}  onClick={this.handelclick}>{ans}</button>)})}</div>)})}
                <br></br><button onClick={this.handelclick1}>Finish</button>
                {this.state.mode?<div>
                    <h1>result:{this.state.result}%</h1>
                    <h1>number of correct is:{this.state.num1}</h1>
                    <h1>number of incorrect is:{this.state.num2}</h1><br></br>
                    </div>:false}
               
            </div>
        )
    }
}
