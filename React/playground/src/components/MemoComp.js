import React from 'react'

// PureComponent is for class component
// Memo component is same as PureComponent for function Component
function MemoComp({name}) {
    console.log('MemoComp render')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
