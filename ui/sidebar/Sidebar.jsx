import SidebarButton from "./SidebarButton";

export default function Sidebar({ onClick, sidebarData }) {
  return (
    <div className="split-sidebar">
      <ul>
        <SidebarButton
          index={0}
          onClick={onClick}
          sidebar={sidebarData}
        />
        <SidebarButton
          index={1}
          onClick={onClick}
          sidebar={sidebarData}
        />
        <SidebarButton
          index={2}
          onClick={onClick}
          sidebar={sidebarData}
        />
      </ul>
      <ul>
        <SidebarButton
          index={3}
          onClick={onClick}
          sidebar={sidebarData}
        />
        <SidebarButton
          index={4}
          onClick={onClick}
          sidebar={sidebarData}
        />
        <SidebarButton
          index={5}
          onClick={onClick}
          sidebar={sidebarData}
        />
        <SidebarButton
          index={6}
          onClick={onClick}
          sidebar={sidebarData}
        />
      </ul>
      <ul>
        <SidebarButton
          index={7}
          onClick={onClick}
          sidebar={sidebarData}
        />
        <SidebarButton
          index={8}
          onClick={onClick}
          sidebar={sidebarData}
        />
      </ul>
      {/* {sidebarData.map((button, index) => (
        <SidebarButton
          key={index}
          index={index}
          button={button}
          onClick={onClick}
        />
      ))} */}
    </div>
  );
}
