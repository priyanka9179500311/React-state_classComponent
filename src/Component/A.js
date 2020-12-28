import {Component} from 'react';

//Create class Component with State Property
export default class A extends Component{
   // 1.Property
    //Every JS Object have 2 Member
    //Declaration and Initialization
    state={
        //1.Properties
        //P:v
        name:'Priyanka',
        'surname':'Yadav'
        //2.Methods   
    };
    //2.Constructor
    constructor(){
        //Call the parent Constructor  via super Method
        super();
        this.state.name = 'Mahima';
    }
    //3.Method
    //Every method must have render method always access method
    render(){//JSX javascript XML
        return(
            <p>
                <h1>Hello </h1>
                <h2>{ this.state.name}</h2>
            </p>
        );
    }
}
 