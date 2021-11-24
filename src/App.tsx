import { Global, css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import CountryList from "./components/CountryList";
import GlobalBarChart from "./components/GlobalBarChart";
import GlobalInfo from "./components/GlobalInfo";
import type { Country, GlobalData, ResponseData } from "./types";

function App() {
  const [data, setData] = useState<ResponseData | undefined>(undefined);
  const [activeCountries, setActiveCountries] = useState<Country[]>([]);
  const fetchData = async () => {
    const result = await fetch("https://api.covid19api.com/summary");
    const data: ResponseData = await result.json();
    setData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onCountryClick = (country: Country) => {
    const countryIndex = activeCountries.findIndex(
      (activeCountry) => activeCountry.ID === country.ID
    );
    if (countryIndex > -1) {
      const newActiveCountries = [...activeCountries];
      newActiveCountries.splice(countryIndex, 1);
      setActiveCountries(newActiveCountries);
    } else {
      setActiveCountries([...activeCountries, country]);
    }
  };
  console.log(activeCountries);
  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: #d6b5b5;
            color: #7d7d7d;
          }
        `}
      />

      {data ? (
        <>
          <GlobalInfo
            newConfirmed={data?.Global.NewConfirmed}
            newDeaths={data?.Global.NewDeaths}
            newRecovered={data?.Global.NewRecovered}
          />
          <hr />
          {activeCountries.length ? (
            <BarChart countries={activeCountries} global={data?.Global} />
          ) : (
            <GlobalBarChart
              newConfirmed={data?.Global.NewConfirmed}
              newDeaths={data?.Global.NewDeaths}
              newRecovered={data?.Global.NewRecovered}
              totalConfirmed={data?.Global.TotalConfirmed}
              totalDeaths={data?.Global.TotalDeaths}
              totalRecovered={data?.Global.TotalRecovered}
            />
          )}

          <CountryList
            countries={data.Countries}
            onItemClick={onCountryClick}
          />
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

//부모요소 1개만 있어야 한다는 얘기 나오면 <> </> 붙여주면 됩니다.

export default App;
