import Slideshow from "./Slideshow";
import Karta from "./Karta";

function Opcenito() {
  return (
    <div>
      <h1>Informacije o skloništu</h1>
      <p>
        Sklonište za nezbrinute životinje Grada Splita postoji od siječnja 2001.
        godine. Smješteno je na istočnom rubu grada.
      </p>
      <p>
        Sklonište je sagrađeno adaptacijom starog ruševnog gospodarskog objekta
        te prilagođeno držanju i smještanju napuštenih pasa s područja Splita.
        Tu se nalaze razne kategorije i pasmine pasa, a zajednička im je sudbina
        neželjenih kućnih ljubimaca. Svi psi koji se udomljavaju iz Skloništa
        cijepljeni su protiv bjesnoće i ostalih zaraznih bolesti te
        mikročipirani, a odrasli i sterilizirani, tj. kastrirani. Ako udomi
        štene, vlasnik ima pravo na besplatnu kastraciju, tj. sterilizaciju u
        Skloništu uz prethodni dogovor sa zaposlenicima, i to u dobi šteneta od
        5 do 6 mjeseci. Prilikom udomljavanja potpisuje se Ugovor o udomljavanju
        nezbrinutih životinja između Skloništa i udomitelja.
      </p>
      <div className="slideshow-container">
        <Slideshow />
      </div>
      <h1>Služba za zbrinjavanje životinja</h1>
      <p>
        Početkom travnja 2009. godine dobili smo novu ekipu u Skloništu i od
        tada je pa do kraja 2015. godine kroz njihove ruke prošlo na tisuće pasa
        i ranjenih mačaka, a spašeno je s ulica grada preko 3500 divljih
        životinja.
      </p>
      <p>
        Naš četveročlani tim svakodnevno se brine o napuštenim psima koje
        neodgovorni vlasnici ostavljaju nezbrinute na ulicama grada, ali i o
        macama i ostalim vrstama životinja koje su lutale na javnim površinama.
        Bilo je tu ptica (patke, jastrebi, kosovi, sove, sokoli, pauni, labudi i
        sl.), divljih životinja (lisice, zmije, kune, ježevi, srne, jeleni,
        vjeverice, vidre,), ali i egzotičnih vrsta poput iguana i različitih
        vrsta kornjača.
      </p>
      <h1>Kako do nas?</h1>
      <div className="map-container">
        <Karta />
      </div>
    </div>
  );
}

export default Opcenito;
