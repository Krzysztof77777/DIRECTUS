const AboutUs = (props) => {
  return (
    <section className="aboutUs">
      <div className="aboutUs__photo">
        <div>
          <img src="http://www.nowa-farma.pl/static/9076d6009dc9ef216dca221d892df81a/7ed23/about_us.webp"></img>
        </div>
      </div>
      <div className="aboutUs__text">
        <div className="aboutUs__title">
          <h2>O nas</h2>
        </div>
        <p>
          KDM Nieruchomości jest nowoczesną i dynamiczną firmą, która buduje w
          Warszawie nowe osiedla mieszkaniowe w najlepszych lokalizacjach
          miasta.
        </p>
        <p>
          Budujemy nowoczesne osiedla mieszkaniowe w otoczeniu zieleni o
          najwyższych standardach jakości i komfortu.
        </p>
        <p>
          Głównym zadaniem, do którego została powołana spółka KDM
          Nieruchomości, jest świadczenie szerokiego zakresu usług
          deweloperskich.
        </p>
        <p>
          Nasze inwestycje to wyjątkowe, pojedyncze realizacje o niepowtarzalnym
          charakterze, realizowane dla indywidualnych klientów – małych i
          średnich przedsiębiorstw.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
