import SidebarButton from './SidebarButton'

export default function Sidebar({ onClick, sidebarData }) {
  return (
    <div className='split-sidebar'>
      {sidebarData.map((button, index) => (
        <SidebarButton 
          key={index} 
          index={index}
          button={button}
          onClick={onClick}
        />
      ))}
    </div>
  )
}