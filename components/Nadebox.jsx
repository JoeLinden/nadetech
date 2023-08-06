import Image from "next/image";

function Nadebox() {
  return (
    <div className="nadebox-container">
      <header className="nadebox-header"></header>
      <Image
        src="/assets/clips/mirage/a_smoke_outside-a_stairs_thumbnail.png"
        alt="Stair Smoke from Outside A"
        className={"nadebox-thumbnail"}
        fill={true}
        object-fit="contain"
        quality={75}
        priority={true} /* Only when the image is above the fold */
      />
      <Image 
        src="/assets/clips/mirage/a_smoke_outside-a_stairs_deadzone.png"
        alt="Stair Smoke from Outside A"
        className={"nadebox-deadzone"}
        fill={true}
        object-fill="cover"
        quality={75}
        priority={true} /* Only when the image is above the fold */

      />
      <div className="nadebox-footer"></div>
    </div>
  );
}
export default Nadebox;
