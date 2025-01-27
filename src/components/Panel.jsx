function Panel({ title = null, classes = '', content }) {
    return (
        <div className={`panel ${classes}`}>
            <div className='wrap'>
                {title && <div className='title'>{title}</div>}
                <div className='inner'>{content}</div>
            </div>
        </div>
    )
}

export default Panel
