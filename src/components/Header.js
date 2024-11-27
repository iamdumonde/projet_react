import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex mt-3 flex-col gap-0  mb-14">
        <h1 className="text-[24px] md:text-2xl lg:text-[30px] text-center text-headerTextColor md:my-2">
          Économisez jusqu’à 50 % sur votre facture internet Fibre et Mobile !
        </h1>
        <p className="text-headerTextColor text-sm text-center md:w-3/4 hidden md:block mx-auto lg:text-[18px]">
          Nous vous aidons à trouver le meilleur fournisseur au meilleur prix en
          2 minutes.
        </p>
        <p className="text-[18px] text-headerTextColor text-center md:text-lg">
          ℹ️ Demande gratuite et sans engagement
        </p>
      </div>
    </div>
  );
};

export default Header;
