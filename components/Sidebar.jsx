import SidebarButton from './SidebarButton'

export default function Sidebar() {
  return (
    <div className='split-sidebar'>
      <ul>
        <li><SidebarButton /></li>
        <li><SidebarButton /></li>
      </ul>
      <div className="sidebar-break">NADES</div>
      <ul>
        <li><SidebarButton /></li>
        <li><SidebarButton /></li>
        <li><SidebarButton /></li>
        <li><SidebarButton /></li>
      </ul>
      <div className="sidebar-break">TWEAKS</div>
      <ul>
        <li><SidebarButton /></li>
        <li><SidebarButton /></li>
        <li><SidebarButton /></li>
      </ul>
    </div>
  )
}