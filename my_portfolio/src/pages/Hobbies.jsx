import data from "../data/about.json";
const Hobbies = () => {
  return (
    <div>
      <h1>Hobbies</h1>
      {data.hobbies.map((hobby) => (
        <div>
          <img src={hobby.image} alt={hobby.title} />
          <p>{hobby.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Hobbies;
