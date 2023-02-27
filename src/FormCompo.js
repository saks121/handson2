
import React from 'react';
class FormCompo extends React.Component{

    state={
        name:"",
        department:"",
        rating:"",
        data:[]
    }

    ClickHandle =(event)=>{
        this.setState({[event.target.name]:event.target.value});
        this.setState({[event.target.department]:event.target.value});
        this.setState({[event.target.rating]:event.target.value});
    }

    HandleSubmit=(e)=>{
        e.preventDefault();
        const FormData={
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating
        }
        console.log(FormData);

        const arr =this.state.data;
        arr.push(FormData);

        this.setState({[this.state.data]:arr});

    }
    
    render(){
        return(
            <div className="form-main">
                <form className="form-m">
                <label>Name :</label>
                <input  className="text-f" type={"text"} name={"name"} placeholder="Enter the Name here" onChange={this.ClickHandle} />
                <br /><br />
                <label>Department :</label>
                <input className="text-f" type={"text"} name={"department"} placeholder="Enter text here.." onChange={this.ClickHandle} />
                <br /><br />
                <label>Rating :</label>
                <input className="text-f" type={"number"} name={"rating"} placeholder ="Enter num here..." onChange={this.ClickHandle} />
                <br /><br />
                <button className="sub-b" type="Submit" onClick={this.HandleSubmit}>Submit</button>
                </form>

                <div className= "shw-b">
                    {this.state.data.map((item,index)=>{
                        return(
                            
                        
                                <div className="cont-b" key={index}>
                                    <p>Name:{item.name}&nbsp;|| Department:{item.department}&nbsp;|| Rating:{item.rating}</p>

                                </div>
                            
                        );
                
                    })}
                </div>    
                    

            </div>
        )
    }
}
export default FormCompo;