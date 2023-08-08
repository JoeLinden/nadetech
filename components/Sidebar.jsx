import SidebarButton from './SidebarButton'

export default function Sidebar() {
  return (
    <div className='split-sidebar'>
      {/* Ul... Li of buttons... */}
      <SidebarButton />
      <SidebarButton />
      <div className="sidebar-break">NADES</div>
      <SidebarButton />
      <SidebarButton />
      <SidebarButton />
      <SidebarButton />
      <div className="sidebar-break">TWEAKS</div>
      <SidebarButton />
      <SidebarButton />
      <SidebarButton />
    </div>
  )
}