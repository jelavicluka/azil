import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import "./Unos.css";

function UnosDonacije({ admin, postaviFormu, postaviDonacije }) {
  const schema = yup
    .object({
      Tip: yup.string().required("Odaberite tip donacije"),
      Vrijednost: yup
        .number()
        .integer()
        .required("Unesite vrijednost")
        .min(1, "Unesite broj godina veći od 0")
        .typeError("Unesite vrijednost"),
      Opis: yup.string().required("Opišite donaciju"),
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
      kategorija: "",
      Tip: "",
      Vrijednost: "",
      Opis: "",
    },
  });

  function obradiPodatke(data) {
    return {
      kategorija: admin ? "trazi" : "nudi",
      tip: data.Tip,
      opis: data.Opis,
      vrijednost: data.Vrijednost,
    };
  }

  async function spremiPodatke(data) {
    const zaSlanje = obradiPodatke(data);

    await axios
      .post(`http://localhost:3001/donacije`, zaSlanje)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    const rezultat = await axios.get("http://localhost:3001/donacije");
    postaviDonacije(rezultat.data);
  }

  return (
    <div className="forma">
      <div id="Card">
        <div id="inputHolder">
          <h1 id="title">Unos nove donacije</h1>

          <form
            onSubmit={handleSubmit((data) => {
              spremiPodatke(data);
              reset();
              console.log(data);
              postaviFormu(false);
            })}
          >
            <div className="text-inputi">
              <div className="pojedinacni-input">
                <label htmlFor="opis">Opis:</label>
                <input
                  className="input-box"
                  type="text"
                  {...register("Opis", {
                    required: "Molim unesite podatke",
                    minLength: {
                      value: 2,
                      message: "Mora imati barem 2 znaka",
                    },
                  })}
                />
                {errors["Opis"]?.message && (
                  <p id="errorMessage">{errors["Opis"]?.message}</p>
                )}
              </div>

              <div className="pojedinacni-input">
                <label htmlFor="Vrijednost">Vrijednost:</label>
                <input
                  className="input-box"
                  type="number"
                  {...register("Vrijednost", {
                    required: "Molim unesite podatke",
                  })}
                />
                {errors["Vrijednost"]?.message && (
                  <p id="errorMessage">{errors["Vrijednost"]?.message}</p>
                )}
              </div>
            </div>

            <div className="radio-buttons">
              <fieldset id="radioButtonDivs">
                <legend>Tip</legend>
                <div id="radioButtonDiv">
                  <input
                    type="radio"
                    value="hrana"
                    {...register("Tip", {
                      required: "Molim odaberite tip donacije",
                    })}
                  />
                  <label htmlFor={"Tip"} id="radioLabel">
                    Hrana
                  </label>
                </div>

                <div id="radioButtonDiv">
                  <input
                    type="radio"
                    value="igračke"
                    {...register("Tip", {
                      required: "Molim odaberite tip donacije",
                    })}
                  />
                  <label htmlFor={"Tip"} id="radioLabel">
                    Igračke
                  </label>
                </div>

                <div id="radioButtonDiv">
                  <input
                    type="radio"
                    value="ostalo"
                    {...register("Tip", {
                      required: "Molim odaberite tip donacije",
                    })}
                  />
                  <label htmlFor={"Tip"} id="radioLabel">
                    Ostalo
                  </label>
                </div>
                {errors["Tip"]?.message && (
                  <p id="errorMessage">{errors["Tip"]?.message}</p>
                )}
              </fieldset>
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

export default UnosDonacije;
