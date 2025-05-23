import data from "../data/about.json";
import "../assets/css/Hobbies.css";
const Hobbies = () => {
  return (
    <section id="hobbies">
      <h1 className="title hobbys-title">Hobbies</h1>
      <div className="hobbies">
        {data.hobbies.map((hobby,index) => (
          <div key={index} className="card">
            <img src={hobby.image} className="hobby-image" alt={hobby.title} />
            <p className="description">{hobby.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
