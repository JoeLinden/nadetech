import Image from "next/image";

function Nadebox({ thumbnail, alt }) {
  return (
    <div className="nadebox-container">
      <header className="nadebox-header"></header>
      <Image
        className={"nadebox-thumbnail"}
        src={thumbnail}
        alt={alt}
        fill={true}
        object-fit="contain"
        quality={100}
        priority
      />
      <footer className="nadebox-footer"></footer>
    </div>
  );
}
export default Nadebox;
