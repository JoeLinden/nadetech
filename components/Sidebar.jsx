import SidebarButton from './SidebarButton'
import SidebarBreak from './SidebarBreak'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      Sidebar
      {/* Ul... Li of buttons... */}
      <SidebarButton />
      <SidebarButton />
      <SidebarBreak />
      <SidebarButton />
      <SidebarButton />
      <SidebarButton />
      <SidebarButton />
      <SidebarBreak />
      <SidebarButton />
      <SidebarButton />
      <SidebarButton />
    </div>
  )
}