import React from "react";

const SectionService = () => {
  return (
    <div className="w-full md:py-8 lg:py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-white py-4 md:p-6 lg:p-8">
          <div className="relative mt-8 md:mt-12 flex h-40 w-full flex-col justify-center">
            <div
              className="z-20 whitespace-pre-line p-6 text-center text-[15px] md:text-lg"
              style={{ color: "white" }}
            >
              Des milliers de personnes ont déjà trouvé la meilleure offre box +
              mobile grâce à nos services
            </div>
            <svg
              height="246"
              preserveAspectRatio="none"
              viewBox="0 0 1440 246"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-secondColor absolute inset-0 h-full w-full"
            >
              <path
                d="M0 22H80C160 22 320 22 480 16.7C640 11 800 0.999951 960 0.699951C1120 0.999951 1280 11 1360 16.7L1440 22V246H1360C1280 246 1120 246 960 246C800 246 640 246 480 246C320 246 160 246 80 246H0V22Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-8 md:items-center">
            <div className="w-full md:w-1/2">
              <img
                src="assets/CompareOffers.webp"
                alt="Conseiller et client"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="w-full md:w-1/2">
              <div className="text-center md:text-left space-y-4">
                <h3 className="text-sm md:text-xl lg:text-2xl font-semibold">
                  <b>Nos téléconseillers experts</b>{" "}
                  <span>sont là pour vous aider à trouver</span> l'opérateur qui
                  vous coorespond.
                </h3>

                <button className="w:[50%] sm:w-2 md:w-auto bg-orange-600 hover:bg-orange-700 text-white py-3 px-3 rounded-lg transition-colors duration-300">
                  Comparer les offres
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mt-4 mx-auto">
        <div className="bg-white py-4 md:p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-8 md:items-center">
            <div className="w-full md:w-1/2">
              <img
                src="assets/Support.webp"
                alt="Section comparaison des offres"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="w-full md:w-1/2  bg-secondColor py-4 mb-4 text-white">
              <div className="text-center md:text-left space-y-4">
                <h3 className="text-sm md:text-xl lg:text-2xl font-semibold">
                  Laisser-nous vous guider vers la meilleure offre
                </h3>
                <p className="text-sm">Demande gratuite et sans engagement</p>

                <button className="w:[50%] sm:w-2 md:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-3 mb-9 rounded-lg transition-colors duration-300">
                  Comparer les offres
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionService;
