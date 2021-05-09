import React from 'react'
import Party from '../components/Party'

const Parties = (props) => {

    return (
        <div className="parties">
            {props.parties.map (party => {
                return <Party party={party}/>
            })}
        </div>
    )
}

export default Parties