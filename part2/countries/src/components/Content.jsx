const Content = ({search, countries}) => {
    const marchCountries = search === '' ? [] : countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    console.log(marchCountries);

    if(marchCountries.length === 0) {
        console.log("zero");
        return 
    }
    else if (marchCountries.length === 1) {
        console.log(marchCountries[0].flags);
        const languageValues = Object.values(marchCountries[0].languages);

        return (
            <div>
                <h1>{marchCountries[0].name.common}</h1>
                <p>capital {marchCountries[0].capital}
                <br/>area {marchCountries[0].area}</p>
                <h3>languages:</h3>
                <ul>
                    {languageValues.map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
                <img src={marchCountries[0].flags.png} alt={marchCountries[0].flags.alt}/>
                
            </div>
        )
    }
    else if (marchCountries.length <= 10) {
        console.log("less than 10", marchCountries.length);
        return (
            <div>
                {/* <h1>{marchCountries[0].name.common}</h1> */}
                {marchCountries.map(coutry =>
                    <div key={coutry.id}>{coutry.name.common}</div>
                )}
                
            </div>
        )
    }
    else {
        console.log("more than 10");
        return (
            <div>Too many matches, specify another filter</div>
        )
    }
}

export default Content