import React from 'react'
import nt from "../../images/notes.png"
function Note_card(props) {
    return (
        <div class="row my-2">
            <div class="col-1 icon-block2">
                <img src={nt} alt='CAIC' width='30' height='30' />
            </div>
            <div class="col-9">
                {props.name}
            </div>
        </div>
    )
}

export default Note_card