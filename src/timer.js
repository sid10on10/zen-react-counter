import React from "react"

class Timer extends React.Component {
    constructor(){
        super()
        this.state = {
            timer:30
        }
    }

    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({timer:this.state.timer-1})
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        if(this.state.timer!==0){
            return(
                <h1>{this.state.timer}</h1>
                )
        }else{
            return (
                <h1>Timer Ends</h1>
            )
        }
        
    }
}

export default Timer