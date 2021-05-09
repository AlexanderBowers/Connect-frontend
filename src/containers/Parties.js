import React from 'react'
import Party from '../components/Party'

const Parties = (props) => {

    function renderParties (parties) {
        console.log(props)
        if (parties.length !== 0) {
            props.parties.map (party => {
                return <Party party={party}/>
            }
            )}
        else {
            return <h1>There are currently no open parties.</h1>
        }
    }

    return (
        <div className="parties">
           {renderParties(props.parties)}
        </div>
    )
}

export default Parties