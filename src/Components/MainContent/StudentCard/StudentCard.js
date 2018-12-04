import React from 'react';

export default function StudentCard (props) {
    return(
        <div className = "Card_Outline">

            <div className = "Student_Card">

                <div className = "Page_Number">
                    <p> {props.currentIndex +1 } of {props.totalIndex} </p>
                </div>

                <div className = "Student_Name">
                    <p> {props.name} </p>
                </div>

                <div className = "First_Information">
                    <p> From: {props.from} </p>
                    <p> Fun Fact: {props.funFact} </p>
                </div>

                <div className = "Second_Information">
                    <ul>
                        <h3> Would you rather..... </h3>
                        <li> <p> ........live in the city or country? {props.cityOrCountry} </p> </li>
                        <li> <p> ........be indoors or outdoors? {props.indoorsOrOutdoors} </p></li>
                        <li> <p> ........eat at Top's or Subway? {props.food} </p></li>
                        <li> <p> ........have a dog or a cat? {props.dogOrCat} </p></li>
                    </ul>
                </div>
                
            </div>

            <div className = "Bottom_Nav">

                <div className = "Previous_Button">
                    <button onClick = { props.handleClickPrevious }> Previous </button>
                </div>

                <div className = "Next_Button">
                    <button onClick = { props.handleClickNext }> Next </button>
                </div>

            </div>

        </div>
    )
};
