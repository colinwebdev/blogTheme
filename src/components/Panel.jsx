

function Panel({ tabs = false, content }) {
    return (
        <div className={`panel ${tabs ? 'hasTabs' : ''}`}>
            <div className='wrap'>
                <div className='inner'>{content}</div>
            </div>
        </div>
    )
}

export default Panel
