import React, {useState} from 'react'
import ChildOne from './ChildOne'
import ParentOne from './ParentOne'

const GrandParent = () => {
    const [newCount, setNewCount] = useState(0)

    console.log('Render GrandParent')
    return (
        <div>
            <button onClick={()=>setNewCount(nc => nc + 1)}>GrandParent Count - {newCount}</button>
            <ParentOne>
                <ChildOne />
            </ParentOne>
        </div>
    )
}

export default GrandParent
