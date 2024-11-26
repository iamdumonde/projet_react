import React, { useState } from "react";

const FournisseurSelect = () => {
  const [step, setStep] = useState(1);
  const [selectFournisseur, setSelectFournisseur] = useState("");
  const [subscriptionMontant, setSubscriptionMontant] = useState("");
  const [preference, setPreference] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isConsentChecked, setIsConsentChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const totalSteps = 4;
  const progress = Math.round((step / totalSteps) * 100);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!postalCode || !phoneNumber || !isConsentChecked) {
      setErrorMessage("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setErrorMessage("");
    console.log("Code postal:", postalCode);
    console.log("Numéro de téléphone:", phoneNumber);
    console.log("Consentement accepté:", isConsentChecked);
  };

  const handleNextStep = (field) => {
    if (!field) return;
    setStep(step + 1);
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-6">
        {/* Barre de progression */}
        <div className="relative w-full bg-gray-200 rounded-full h-3 mb-6">
          <div
            className="absolute top-0 left-0 bg-teal-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Étape 1 */}
          {step === 1 && (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Quel est votre fournisseur internet actuel ?
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {["orange", "sfr", "bouygues", "free"].map((fournisseur) => (
                  <button
                    key={fournisseur}
                    onClick={() => {
                      setSelectFournisseur(fournisseur);
                      handleNextStep(fournisseur);
                    }}
                    type="button"
                    className="bg-gray-100 hover:bg-teal-100 p-4 rounded-lg border border-gray-300 transition"
                  >
                    <img
                      src={`../assets/${fournisseur}.png`}
                      alt={fournisseur}
                      className="h-16 mx-auto"
                    />
                  </button>
                ))}
              </div>
              <p className="text-center text-gray-600 text-sm">
                Vous ne trouvez pas votre fournisseur ? Sélectionnez "Autre".
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={() => {
                    setSelectFournisseur("Autre");
                    handleNextStep("Autre");
                  }}
                  type="button"
                  className="px-4 py-2 border rounded-lg hover:bg-gray-200"
                >
                  Autre
                </button>
                <button
                  onClick={() => {
                    setSelectFournisseur("Aucun");
                    handleNextStep("Aucun");
                  }}
                  type="button"
                  className="px-4 py-2 border rounded-lg hover:bg-gray-200"
                >
                  Aucun
                </button>
              </div>
            </>
          )}

          {/* Étape 2 */}
          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Quel est le montant de votre abonnement internet actuel ?
              </h2>
              <div className="space-y-3">
                {["Moins de 25€", "De 25 à 45€", "Plus de 45€"].map(
                  (montant) => (
                    <button
                      key={montant}
                      onClick={() => {
                        setSubscriptionMontant(montant);
                        handleNextStep(montant);
                      }}
                      type="button"
                      className="w-full py-3 bg-gray-100 hover:bg-teal-100 rounded-lg text-center border transition"
                    >
                      {montant}
                    </button>
                  )
                )}
              </div>
            </>
          )}

          {/* Étape 3 */}
          {step === 3 && (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Avez-vous une préférence pour l'une de ces offres ?
              </h2>
              <div className="space-y-3">
                {[
                  "La moins chère",
                  "Le meilleur débit",
                  "Orange / Sosh",
                  "Bouygues Télécom",
                  "SFR / RED",
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setPreference(option);
                      handleNextStep(option);
                    }}
                    type="button"
                    className="w-full py-3 bg-gray-100 hover:bg-teal-100 rounded-lg text-center border transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Étape 4 */}
          {step === 4 && (
            <>
              <h2 className="text-xl font-semibold text-center mb-4">
                Dernière étape !
              </h2>
              <p className="text-center text-gray-600 text-sm mb-6">
                Saisissez votre code postal et numéro pour recevoir des offres
                personnalisées.
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Code postal"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-teal-200"
                  required
                />
                <input
                  type="text"
                  placeholder="06 01 02 03 04"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring focus:ring-teal-200"
                  required
                />
              </div>
              <label className="flex items-center mt-4">
                <input
                  type="checkbox"
                  checked={isConsentChecked}
                  onChange={(e) => setIsConsentChecked(e.target.checked)}
                  className="mr-2"
                />
                <span className="text-sm">
                  J'accepte d'être contacté(e) par téléphone ou SMS.
                </span>
              </label>
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
              <button
                type="submit"
                className="w-full mt-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
              >
                Envoyer
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default FournisseurSelect;
