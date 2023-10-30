import Volunteerr from "./volunterrr";
function Volunteer() {
  return (
    <section className="volunteer missions">
      <div className="missiontitle1 ot titles">Our Team</div>
      <div className="missiontitle2 red-text">Our Active Team</div>
      <div className="volunteers missionslist">
        <Volunteerr
          name={"Yubraj Kunwar Chettri"}
          imgsrc={"src/assets/YubrajKunwarChettri.jpeg"}
          position={"Vice Chairperson"}
        />
        <Volunteerr
          name={"Sabita Ghale"}
          imgsrc={"src/assets/SabitaGhale.jpeg"}
          position={" Secretary"}
        />
        <Volunteerr
          name={"Sada Gurung"}
          imgsrc={"src/assets/SadaGurung.jpeg"}
          position={"Treasurer"}
        />
        <Volunteerr
          name={"Juna Thapa"}
          imgsrc={"src/assets/JunaThapa.jpeg"}
          position={"Executive Member"}
        />
        <Volunteerr
          name={"Subash Gharti Magar"}
          imgsrc={"src/assets/SubashGhartiMagar.jpeg"}
          position={"Executive Member"}
        />
        <Volunteerr
          name={"Som Bahadur Bishwokarma"}
          imgsrc={"src/assets/SomBahadurBishwokarma.jpeg"}
          position={"Executive Member"}
        />
      </div>
    </section>
  );
}
export default Volunteer;
