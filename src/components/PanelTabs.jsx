import React from 'react'

function PanelTabs({ title = null, bottom = false }) {
    return (
        <div className='panelTabs'>
            {title ? (
                
                    <div className='title'>
                        <p>{title}</p>
                    </div>
                
            ) : <div className='spacer'></div>}
            {bottom && (
                <>
                    <div className='bottomTab'>
                        <div className='bottomInner'></div>
                    </div>
                </>
            )}
        </div>
    )
}

export default PanelTabs
