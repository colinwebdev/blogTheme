function Panel({ title = null, classes = '', content }) {
    return (
        <div className={`panel ${classes}`}>
            <div className='wrap'>
                {title && (
                    <div className='title'>
                        <h3>{title}</h3>
                    </div>
                )}
                <div className='inner'>{content}</div>
            </div>
        </div>
    )
}

export default Panel
