import Panel from './Panel'

function Left() {
    return (
        <aside>
            <nav>
                <Panel
                    title={'Getting Around'}
                    classes={'nav'}
                    content={<p>Hello World</p>}
                />
            </nav>
            <Panel
                title={'Longer Title Test Test Test Test'}
                content={<p>Hello World</p>}
            />
        </aside>
    )
}

export default Left
