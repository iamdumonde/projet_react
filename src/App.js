import Header from "./components/Header";
import SectionService from "./components/SectionService";
import OffreGratuite from "./components/OffreGratuite";
import FournisseurSelect from "./components/FournisseurSelect";

const App = () => {
  return (
    <div>
      <main className="flex flex-col items-center justify-center flex-grow lg:px-8">
        <div className="lg:flex lg:items-center pt-11">
          <div className="lg:flex lg:w-[50%] ">
            <Header />
          </div>
          <div>
            <FournisseurSelect />
          </div>
        </div>

        <div className="lg:w-full">
          <OffreGratuite />
        </div>

        <div>
          <SectionService />
        </div>
      </main>
    </div>
  );
};

export default App;
