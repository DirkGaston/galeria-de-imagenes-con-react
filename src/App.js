import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Galería de Imágenes con React" />
      <div className="cardContainer">
        <Card
          imgUrl={
            "https://i.discogs.com/9oD4vbEy9Zxo3be8_MLfWF8rXJx5n1axVpMHoISjMrU/rs:fit/g:sm/q:90/h:536/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcyNzI1/MTItMTQzNzc5NzUw/NS04MDczLmpwZWc.jpeg"
          }
          imgTitle="Symphony X - Underworld"
          imgDesc="Visión de los Infiernos desde el trono hiperbóreo del reino del prog-metal"
          spotiLink={
            "https://open.spotify.com/album/1QuLmibFywtH6jNHLYm393?si=TLdN_4hrS4Cl4RYpfTR-1Q"
          }
        />
        <Card
          imgUrl={
            "https://i.discogs.com/EdTWP4HHEOHDHo2VCyQRNUvVsDeGwYsYu366ap4vIDE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyMDQx/MzEtMTMyMTgzNjYx/MS5qcGVn.jpeg"
          }
          imgTitle="Symphony X - V: The New Mythology Suite"
          imgDesc="El quinto LP de la banda, que remontaría el sendero maestro tras “Twilight in Olympus”, un álbum conceptual basado en la historia de la Atlántida, la antigua mitología egipcia y la astrología."
          spotiLink={
            "https://open.spotify.com/album/3RZHKuP6hVRsHAVruUfDXE?si=HdqF79YOSHueI2emPik6bQ"
          }
        />
        <Card
          imgUrl={
            "https://i.discogs.com/Xp9eVo5YByJ9pu1joXa3_Z8q-bIdGLd-M9hLssVCqis/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUzMTc0/Mi0xMjQyOTAyNzQz/LmpwZWc.jpeg"
          }
          imgTitle="Symphony X - The Odyssey"
          imgDesc="En este viaje inspirado en la Odisea de Homero, contamos con ocho temas, siendo el tema título de mas de veinticuatro minutos uno de los mejores de su carrera y del metal progresivo en general."
          spotiLink={
            "https://open.spotify.com/album/6DxbC5BG4iiktFTWbzqqIV?si=qdkxLZ7DQjK6VB4VUVRyVg"
          }
        />
        <Card
          imgUrl={
            "https://i.discogs.com/oTow4mJk81OhzyclcnC8dV8t-WPtKWlAiOLlIWcc5oM/rs:fit/g:sm/q:90/h:589/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY2NTI2/OC0xNDg1NTYxMjIz/LTE2NTEuanBlZw.jpeg"
          }
          imgTitle="Symphony X - The Divine Wings of Tragedy"
          imgDesc="El ascenso a la divinidad del Prog metal"
          spotiLink={
            "https://open.spotify.com/album/1QuLmibFywtH6jNHLYm393?si=TLdN_4hrS4Cl4RYpfTR-1Q"
          }
        />
        <Card
          imgUrl={
            "https://i.discogs.com/yVeGTo16owgdrGturgUf8VhGY3iJ2f7VRxujF2sdpRI/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNzg4/NTYzLTE1MDQzNDUx/MDctODU5MC5qcGVn.jpeg"
          }
          imgTitle="Adrenaline Mob - Men of Honor"
          imgDesc="Resumiendo, “Men of Honor” es un buen disco, donde lo mejor lo encontramos en la voz de Russell Allen y la labor en las seis cuerdas de Orlando. Creo que mejora su debut y nos hace pasar un rato de metal moderno bien musculoso, tal vez un poco simple pero que te pega en toda la jeta un directo sin miramientos."
          spotiLink={
            "https://open.spotify.com/album/3MwpZJbLr5Fe50hPqKoRag?si=7Hz4s3U8SVWQkU6pHM5fzA"
          }
        />
        <Card
          imgUrl={
            "https://i.discogs.com/jCxSCPfRj9-8j7rpIiZ-gHF5jW0mkcS3aRetjNDrwOg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0MjQy/MjgtMTQ5MDIxODgw/OS04MDQ5LmpwZWc.jpeg"
          }
          imgTitle="Ayreon - Universal Migrator Part I & II"
          imgDesc="Los álbumes gemelos de Universal Migrator se lanzaron en 2000. El primer álbum, The Dream Sequencer consiste en rock progresivo suave y atmosférico, mientras que el segundo álbum, Flight of the Migrator, consiste más en heavy metal. Ambos álbumes cuentan con alrededor de diez cantantes apoyados por muchos instrumentistas."
          spotiLink={
            "https://open.spotify.com/album/4aPe3iiuhnIJLoqPATvhrp?si=sVeOX5mzTgGQ6YPcQOF8wA"
          }
        />
        <Card
          imgUrl={
            "https://i.discogs.com/9NKz3anlrshSXX7qCr_uWs2aT4PJxV_mhVodapIJR78/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyNjQz/MDc1LTE2NDgyMzQ4/NzMtNDQxMC5qcGVn.jpeg"
          }
          imgTitle="Michael Romeo - War of the Worlds Pt. 2"
          imgDesc="War of The Worlds Pt. 2 es la tercera entrega como solista del prestigioso y virtuoso guitarrista Michael Romeo, más conocido como el miembro de la banda de metal progresivo Symphony X."
          spotiLink={
            "https://open.spotify.com/album/5at2nyogvRg2DXmlqYFKaS?si=ewRde2vfQI2qhgrfck9YrQ"
          }
        />
        <Card
          imgUrl={
            "https://i.discogs.com/8hlp4UfiwGwk6zfM-L6hJprS13l-wja1uNMFn4wo_lk/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY1NjM3/MjAtMTQyMjA5NTY3/Ny05NzY0LmpwZWc.jpeg"
          }
          imgTitle="Michael Pinnella - Enter By The Twelfth Gate"
          imgDesc="Debut en solitario del teclista de Symphony X, tras 6 discos en estudio con la banda americana."
          spotiLink={
            "https://open.spotify.com/album/1ZtuNTpDIB6rwQIxammDgS?si=F3vEacFySeadTdE3OgY0NA"
          }
        />
      </div>
      <Footer galleryInfo="Discos más escuchados durante la última semana" />
    </div>
  );
}

export default App;
