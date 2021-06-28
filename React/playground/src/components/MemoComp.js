import React from 'react'

// same as PureComponent for function Component
function MemoComp({name}) {
    console.log('MemoComp render')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
