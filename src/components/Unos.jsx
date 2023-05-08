import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import "./Unos.css";

function Unos() {
  const schema = yup
    .object({
      Vrsta: yup.string().required("Odaberite vrstu"),
      Ime: yup
        .string()
        .required("Unesite ime")
        .min(2, "Ime mora sadržavati barem 2 znaka"),
      Godine: yup
        .number()
        .integer()
        .required("Unesite godinu")
        .min(1, "Unesite broj godina veći od 0")
        .typeError("Unesite broj godina"),
      Opis: yup.string().required("Opišite životinju"),
      Udomljen: yup.boolean(),
      Cip: yup.boolean(),
    })
    .required();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      Cip: false,
      Vrsta: "",
      Ime: "",
      Opis: "",
      Godine: 0,
    },
  });

  function obradiPodatke(data) {
    return {
      ime: data.Ime,
      vrsta: data.Vrsta,
      opis: data.Opis,
      cip: Boolean(data.Cip),
      udomljen: false,
      pregled: data.Pregled,
    };
  }

  async function spremiPodatke(data) {
    const zaSlanje = obradiPodatke(data);

    await axios
      .post(`http://localhost:3001/zivotinje`, zaSlanje)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="forma">
      <div id="Card">
        <div id="inputHolder">
          <h1 id="title">Unos nove životinje</h1>

          <form
            onSubmit={handleSubmit((data) => {
              spremiPodatke(data);
              reset();
            })}
          >
            <div className="text-inputi">
              <div className="pojedinacni-input">
                <label htmlFor="ime">Ime:</label>
                <input
                  className="input-box"
                  type="text"
                  {...register("Ime", {
                    required: "Molim unesite podatke",
                    minLength: {
                      value: 2,
                      message: "Mora imati barem 2 znaka",
                    },
                  })}
                />
                {errors["Ime"]?.message && (
                  <p id="errorMessage">{errors["Ime"]?.message}</p>
                )}
              </div>

              <div className="pojedinacni-input">
                <label htmlFor="Godine">Godine:</label>
                <input
                  className="input-box"
                  type="number"
                  {...register("Godine", {
                    required: "Molim unesite podatke",
                  })}
                />
                {errors["Godine"]?.message && (
                  <p id="errorMessage">{errors["Godine"]?.message}</p>
                )}
              </div>

              <div className="pojedinacni-input">
                <label htmlFor="opis">Opis:</label>
                <textarea
                  className="input-box-opis"
                  type="text"
                  {...register("Opis", {
                    required: "Molim unesite podatke",
                    minLength: {
                      value: 5,
                      message: "Mora imati barem 5 znakova",
                    },
                  })}
                />
                {errors["Opis"]?.message && (
                  <p id="errorMessage">{errors["Opis"]?.message}</p>
                )}
              </div>
            </div>

            <div className="radio-buttons">
              <fieldset id="radioButtonDivs">
                <legend>Vrsta</legend>
                <div id="radioButtonDiv">
                  <input
                    type="radio"
                    value="pas"
                    {...register("Vrsta", {
                      required: "Molim odaberite vrstu životinje",
                    })}
                  />
                  <label htmlFor={"Vrsta"} id="radioLabel">
                    Pas
                  </label>
                </div>

                <div id="radioButtonDiv">
                  <input
                    type="radio"
                    value="mačka"
                    {...register("Vrsta", {
                      required: "Molim odaberite vrstu životinje",
                    })}
                  />
                  <label htmlFor={"Vrsta"} id="radioLabel">
                    Mačka
                  </label>
                </div>

                <div id="radioButtonDiv">
                  <input
                    type="radio"
                    value="ostalo"
                    {...register("Vrsta", {
                      required: "Molim odaberite vrstu životinje",
                    })}
                  />
                  <label htmlFor={"Vrsta"} id="radioLabel">
                    Ostalo
                  </label>
                </div>
                {errors["Vrsta"]?.message && (
                  <p id="errorMessage">{errors["Vrsta"]?.message}</p>
                )}
              </fieldset>
            </div>

            <div id="inputDiv">
              <div id="radioButtonDiv">
                <input type="checkbox" id="cip" {...register("Cip")} />
                <label htmlFor="cip" id="radioLabel">
                  Čipiran
                </label>
              </div>
            </div>

            <div className="submit-button">
              <button type="submit" className="botun">
                Spremi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Unos;
