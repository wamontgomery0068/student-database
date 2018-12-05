import React, { Component } from 'react';

import StudentData from './StudentData/StudentData';
import StudentCard from './StudentCard/StudentCard';
import axios from 'axios';

import './MainContent.css';

class MainContent extends Component {
    constructor() {
        super()

        this.state = {
            student: StudentData,
            // student: [],
            counter: 0
        };

        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickPrevious = this.handleClickPrevious.bind(this);
    }

    componentDidMount () {
        axios.get('https://dm20.now.sh/students/')
        .then(response => {
            // console.log(response)
            this.setState({students:response.data})
        });
    };

    handleClickPrevious(){

        if (this.state.counter === 0 ) {
            this.setState ( { counter:0 } )
        }
        else {
            this.setState( {counter: this.state.counter -1} )
        ;}
    };
    
    handleClickNext(){
        if (this.state.counter === this.state.students) {
            this.setState ( { counter:0 } )
        }
        else {
            this.setState({counter: this.state.counter +1 })
        };
    };


    render() {

        return (

            <div className = "MainContent">

                <StudentCard 
                    currentIndex={this.state.counter}
                    totalIndex={this.state.student.length}
                    name={this.state.student[this.state.counter].name}
                    from={this.state.student[this.state.counter].from}
                    funFact={this.state.student[this.state.counter].funFact}
                    cityOrCountry={this.state.student[this.state.counter].cityOrCountry}
                    indoorsOrOutdoors={this.state.student[this.state.counter].indoorsOrOutdoors}
                    food={this.state.student[this.state.counter].food}
                    dogOrCat={this.state.student[this.state.counter].dogOrCat}
                    handleClickPrevious={this.handleClickPrevious}
                    handleClickNext={this.handleClickNext}
                />
            
            </div>
        )
    };
};

export default MainContent;