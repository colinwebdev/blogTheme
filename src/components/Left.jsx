import Panel from './Panel'
import PanelTabs from './PanelTabs'

function Left() {
    return (
        <aside>
            <Panel content={<p>Hello World</p>} />
            <PanelTabs title={'Longer Title Test Test Test Test'} bottom={true} />
            <Panel content={<p>Hello World</p>} />
            <PanelTabs bottom={true} />
        </aside>
    )
}

export default Left
