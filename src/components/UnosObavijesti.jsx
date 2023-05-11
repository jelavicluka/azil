import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import "./Unos.css";

function UnosObavijesti({ admin, postaviFormu, postaviObavijesti }) {
  const schema = yup
    .object({
      Naslov: yup
        .string()
        .required("Unesite naslov")
        .max(20, "Naslov može imati maksimalno 20 znakova"),
      Tekst: yup
        .string()
        .required("Unesite tekst")
        .min(10, "Tekst mora imati najmanje 10 znakova")
        .max(200, "Tekst može imati najviše 200 znakova"),
      Vazno: yup.boolean(),
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
      Naslov: "",
      Tekst: "",
      Vazno: false,
    },
  });

  function obradiPodatke(data) {
    return {
      vazno: data.Vazno,
      naslov: data.Naslov,
      tekst: data.Tekst,
      datum: new Date().toISOString(),
    };
  }

  async function spremiPodatke(data) {
    const zaSlanje = obradiPodatke(data);

    await axios
      .post(`http://localhost:3001/obavijesti`, zaSlanje)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    const rezultat = await axios.get("http://localhost:3001/obavijesti");
    postaviObavijesti(rezultat.data);
  }

  return (
    <div className="forma">
      <div id="Card">
        <div id="inputHolder">
          <h1 id="title">Nova obavijest</h1>

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
                <label htmlFor="naslov">Naslov:</label>
                <input
                  className="input-box"
                  type="text"
                  {...register("Naslov", {
                    required: "Molim unesite podatke",
                    minLength: {
                      value: 2,
                      message: "Mora imati barem 2 znaka",
                    },
                  })}
                />
                {errors["Naslov"]?.message && (
                  <p id="errorMessage">{errors["Naslov"]?.message}</p>
                )}
              </div>

              <div className="pojedinacni-input">
                <label htmlFor="Vrijednost">Tekst:</label>
                <textarea
                  className="input-box-opis"
                  type="text"
                  {...register("Tekst", {
                    required: "Molim unesite podatke",
                  })}
                />
                {errors["Tekst"]?.message && (
                  <p id="errorMessage">{errors["Tekst"]?.message}</p>
                )}
              </div>
            </div>

            {admin ? (
              <div id="inputDiv">
                <div id="radioButtonDiv">
                  <input type="checkbox" id="vazno" {...register("Vazno")} />
                  <label htmlFor="Vazno" id="radioLabel">
                    Važno
                  </label>
                </div>
              </div>
            ) : null}

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

export default UnosObavijesti;
