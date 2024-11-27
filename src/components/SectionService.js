import React from "react";

const SectionService = () => {
  return (
    <div className="md:py-8 w-full border">
      {/* first section */}
      <div className="bg-white py-4 md:p-6 lg:p-8 w-full md:w-screen">
        <div className="relative mt-8 md:mt-12 flex h-40 flex-col justify-center w-full">
          <div
            className="z-20 whitespace-pre-line px-6 text-center text-[15px] md:text-lg lg:text-xl"
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

        <div className="flex flex-col md:flex-row md:pt-4 md:space-y-0 md:space-x-8 md:items-center md:px-4 md:w-[1/2] lg:max-w-[70%] lg:mx-auto">
          <div className="md:w-1/2">
            <img
              src="assets/Support.webp"
              alt="Conseiller et client"
              className="block shadow-md h-[55vw] sm:h-[55vw] md:w-[800px] md:h-auto lg:w-[800px] lg:h-[484px] xl:w-[800px] xl:h-[484px] m-auto w-full object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 md:pl-6">
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <h3 className="text-sm md:text-[16px] mt-3 leading-relaxed lg:text-2xl font-semibold max-w-md">
                <b>Nos téléconseillers experts</b>{" "}
                <span>sont là pour vous aider à trouver</span> l'opérateur qui
                vous correspond
              </h3>

              <button className="w-auto md:w-auto bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg transition-colors duration-300 mt-3">
                Comparer les offres
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* second section */}
      <div className="mt-8 md:w-screen">
        <div className="pb-4 md:p-6 lg:p-8">
          <div className="bg-secondColor flex flex-col md:flex-col md:space-y-0 md:space-x-8 md:items-center md:px-4 pb-4 w-full">
            <div className="max-w-[1440px] w-full md:mt-5">
              <img
                src="assets/CompareOffers.webp"
                alt="Section comparaison des offres"
                className="shadow-md w-full h-[55vw] sm:h-[55vw] md:w-[600px] md:h-[400px] lg:w-[600px] lg:h-[400px] xl:w-[600px] xl:h-[400px] m-auto object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="text-center space-y-3">
                <h3 className="text-lg sm:text-xl md:text-2xl 3xl:text-3xl font-bold text-white">
                  Laisser-nous vous guider vers la meilleure offre
                </h3>
                <p className="text-sm sm:text-md md:text-lg xl:text-xl 3xl:text-2xl text-white mt-2">
                  Demande gratuite et sans engagement
                </p>

                <button className="w-auto md:w-auto bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300">
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
