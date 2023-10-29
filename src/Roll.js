/*import {useState} from "react";*/

function Roll (props) {
    /*There was an attempt made here to
    actually make the roller roll multiple
    dice at once, as the user is supposed to
    be able to request such a roll, but I'm 
    struggling with how, exactly, to make that 
    happen. As such, it's been tabled for now in
    favor of getting something posted for further
    improvement.
    const [numsRolled, setNums] = useState([]);
    const updateNums= (listNums) => {
        for (let i = 0; i < props.quantity; i++) { 
            const numForList = Math.floor(Math.random() * (props.size- 1+ 1) +1);
            listNums += numForList;
            console.log(numForList);
            console.log(listNums);
        }
        setNums(listNums);
    }*/
    const numRolled = Math.floor(Math.random() * (props.size- 1+ 1) +1);

    return(
        <div>
            <p>Rolling {props.quantity} {props.size}-sided dice.</p>
            <p>You rolled: {numRolled}</p>
        </div>
    )
}

export default Roll;