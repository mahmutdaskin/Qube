var controller = {
    lang: 'en',
    get getLang() {
        return this.lang;
    },
    set setLang(newLang) {
        // Default english.
        this.lang = newLang == 'fi' ? 'fi' : 'en';        
    }
};

var fi_menu = {
    title: "Valitse suoritettavat mittaukset",
    backButton: "Takaisin kielenvalintaan",
    bodyButton: "Kehonkoostumusmittaus",
    bloodButton: "Verenpaineen mittaus"
};

var en_menu = {
    title: "Choose measurements to perform",
    backButton: "Back to language selection",
    bodyButton: "Body composition measurement",
    bloodButton: "Blood pressure measurement"
};

var fi_basicInfo = {
    title: "Perustiedot",
    prompt: "Anna perustietosi",
    heightHint: "Invalid or no value!",
    weightHint: "Invalid or no value!",
    age: "Ikä",
    height: "Pituus",
    male: "Mies",
    female: "Nainen",
    cancel: "Keskeytä",
    next: "Seuraava",
    info: "Tämä laatikko kertoo käyttäjälle mahdolliset virhetilanteet. Muista aina tarkistaa, että mittalaite on päällä ja kytkettynä tietokoneeseen."
};

var en_basicInfo = {
    title: "Basic information",
    prompt: "Input your information.",
    heightHint: "Invalid or no value!",
    weightHint: "Invalid or no value!",
    age: "Age",
    height: "Height",
    male: "Male",
    female: "Female",
    cancel: "Cancel",
    next: "Next",
    info: "This infobox tells the user of possible errors. Always remember to check that the measurement device is powered on and connected to the PC."
};

var fi_inprocess = {
    title: "Mittaus käynnissä...",
    instructions: "Mittausohjeet toisella näytöllä.",
    cancel: "Keskeytä"

};


var en_inprocess = {
    title: "Measurement in progress...",
    instructions: "Instructions on the next screen.",
    cancel: "Cancel"
};

var fi_finishedText = {
	title: "Tervetuloa Qubeen",
	select: "Valitse jatkotoimenpiteet.",
	frontpage: "Etusivulle",
	print: "Tulosta tulokset ja palaa etusivulle."
};

var en_finishedText = {
	title: "Welcome to Qube",
	select: "Select the next action.",
	frontpage: "Return to front page.",
	print: "Print the results and return to the front page."
};

var fi_inProcessPoster = {
    title: "Mittalaitteen ohjeet",
    instr1: "Ota kengät ja sukat pois.",
    instr2: "Astu laitteelle ensimmäisen kuvan osoittamalla tavalla.",
    instr3: "Odota, että laite suorittaa punnituksen.",
    instr4: 'Kun laitteen näytössä lukee "GRIP ON", tartu kapuloihin.',
    instr5: "Laske kädet sivulle ja odota, että laite suorittaa mittaukset.",
    instr6: 'Kun laitteen näytössä lukee "GRIP OFF", laita kapulat takaisin telineisiin.',
    instr7: "Astu pois laiteelta.",
    instr8: "Tulosten analysoinnissa kestää noin 5 sekuntia."
};

var en_inProcessPoster = {
    title: "Mittalaitteen ohjeet",
    instr1: "Remove your shoes and socks.",
    instr2: "Step on the device, like shown on first picture.",
    instr3: "Wait for the device to finish weighing.",
    instr4: 'When the device tells you to "GRIP ON", grip on the handles.',
    instr5: "Put down your hands and wait. The device is performing the measuring.",
    instr6: 'When the device tells you to "GRIP OFF", put the handles back to their slots.',
    instr7: "Step off the device.",
    instr8: "Analyzing results, this takes up to 5 seconds."
};

var fi_poster = {
    title: "Tervetuloa Qubeen.",
    prompt: "Ole hyvä ja seuraa kosketusnäytön ohjeita."
};

var en_poster = {
    title: "Welcome to Qube.",
    prompt: "Please follow the instructions on the touch screen."
};


var fi_finishedPoster = {
	title: "Tervetuloa Qubeen.",
	done: "Mittaukset suoritettu.",
	prompt: "Lisäohjeita kosketusnäytöllä."
};


var en_finishedPoster = {
	title: "Welcome to Qube.",
	done: "Measurement complete.",
	prompt: "Additional instructions on the touch screen."
};

var fi_bloodPressure = {
    title: "Verenpaineen mittauksen ohjeet",
    intro1: "Verenpaineen vaihtelu on luontaista ja siksi olosuhteet on vakioitava mahdollisimman hyvin. Mittaus tehdään mittaamalla kaksi peräkkäistä mittausta 1–2 minuutin välein.",
    intro2: "Puoleen tuntiin ennen mittausta ei pidä harrastaa liikuntaa, tupakoida, juoda alkoholia, kahvia, teetä eikä kola- tai energiajuomia.",
    intro3: "Huom! Täysin luotettava arvio verenpaineesta ei synny yhdellä kaksoismittauksella. Ammattilaisten vastaanottomittauksissa lasketaan neljänä eri vuorokautena tehtyjen kaksoismittauksien keskiarvot.",
    instrHeader: "Ohjeet:",
    instr1: "Istu selkänojalliseen tuoliin, nojaudu selkänojaan ja istu mahdollisimman rennosti.", 
    instr2: "Kiedo mansetti paljaan olkavarren ympärille siten, että sormi mahtuu mansetin ja olkavarren väliin.",
    instr3: "Katso, että ilmaletkun kiinnityskohta on ylöspäin ja että letku kulkee vapaasti.",
    instr4: "Tue käsivarsi noin 90 asteen kulmaan siten, että mansetti ja sydän ovat samalla tasolla. Pidä käsi rentona. Kun olet kiinnittänyt mansetin olkavarteen, rauhoitu ennen mittausta noin viiden minuutin ajaksi.",
    instr5: "Suorita mittaus painamalla napista. Ole täysin rentona, älä puhu tai liiku mittauksen aikana. Toista mittaus 1-2 minuutin kuluttua ja merkitse molemmat tulokset muistiin.",
    back: "Takaisin",
    next: "Seuraava",
};

var en_bloodPressure = {
    title: "Instructions for blood pressure measurement",
    intro1: "Variation in blood pressure is natural, and that’s why measuring conditions need to be standardized as well as possible. The measurement is done by measuring two subsequent measurements with a 1-2 minute pause between them.",
    intro2: "One should not exercise, smoke, drink alcohol, coffee, tea, coke, or energy drinks less than half an hour before the measurement.",
    intro3: "Note! A completely reliable estimate of a blood pressure can’t be achieved with two subsequent measurements. Professionals measure on four different days, twice a day.",
    instrHeader: "Instructions:",
    instr1: "Sit down on a chair with a back rest, lean back, and sit as relaxed as possible.", 
    instr2: "Tie the manchette around a bare upper arm so that a finger fits between the manchette and the arm.",
    instr3: "Check that the air hose’s attachment part is facing downwards and that the hose is able to move freely",
    instr4: "Support your arm in a 90 degree angle, so that the manchette is on the same level as your heart. Keep your arm relaxed. When you have attached the manchette to your arm, relax for five minutes before the measurement.",
    instr5: "Perform the measurement by pressing the button. Be completely relaxed, don’t talk or move during the measurement. Repeat in 1-2 minutes and write down both results.",
    back: "Back",
    next: "Next"
};

var fi_bloodPressureResults = {
    // Text paragraphs
    title: "Verenpaineen tulosten analysointi",
    infoHeader1: "Verenpaine",
    info1: "Verenpaine ilmoitetaan kahdella luvulla. Suurempi luku (yläpaine / systolinen) kuvaa painetta sydämen supistuessa ja pienempi luku (alapaine / diastolinen) on paine sydämen lepovaiheen aikan. Mittayksikkö on elohopeamillimetri eli mmHg. ",
    info2: "Verenpainemittarilla voidaan seurata verenpainetta ja tunnistaa kohonnut verenpaine. Kohonneen verenpaineen tärkein haitallinen seuraus on aivohalvaus. Se lisää myös sepelvaltimotaudin ja muiden valtimotautien riskiä.",
    infoHeader2: "Leposyke",
    info3: "Tyypillinen leposyke aikuisella on 60–80 bpm, mutta 50 ja 60 välillä olevaa leposykettä pidetään vielä täysin normaalina. Parhailla kestävyysurheilijoilla leposyke voi olla jopa 30-40 bpm.",
    // Table contents
    tableCol1Header: "Jaottelu",
    tableCol2Header: "Yläpaine",
    tableCol4Header: "Alapaine",
    tableC1R1: "Ihanteellinen",
    tableC2R1: "Alle 120",
    tableC3R1: "ja",
    tableC4R1: "Alle 80",
    tableC1R2: "Normaali",
    tableC2R2: "120–129",
    tableC3R2: "ja/tai",
    tableC4R2: "80–84",
    tableC1R3: 'Tyydyttävä ("korkea normaali")',
    tableC2R3: "130–139",
    tableC3R3: "ja/tai",
    tableC4R3: "85–89",
    tableC1R4: "Asteen 1 hypertensio",
    tableC2R4: "140–159",
    tableC3R4: "ja/tai",
    tableC4R4: "90–99",
    tableC1R5: "Asteen 2 hypertensio",
    tableC2R5: "160–179",
    tableC3R5: "ja/tai",
    tableC4R5: "100–109",
    tableC1R6: "Asteen 3 hypertensio",
    tableC2R6: "180 tai korkeampi",
    tableC3R6: "ja/tai",
    tableC4R6: "110 tai korkeampi",
    tableC1R7: "Isoloitunut systolinen hypertensio",
    tableC2R7: "140 tai korkeampi",
    tableC3R7: "ja",
    tableC4R7: "Alle 90",
    return: "Edellinen",
    done: "Valmis"
};

var en_bloodPressureResults = {
    // Text paragraphs
    title: "Analyzing the results of blood pressure measurement.",
    infoHeader1: "Blood Pressure",
    info1: "Blood pressure is indicated with two values. The higher value, the upper blood pressure / systolic pressure, represents the pressure when the heart contracts. The lower value, the lower blood pressure / diastolic pressure, represents the pressure when the heart is in resting state. The unit of measurement is millimetre of mercury, mmHg.",
    info2: "With a blood pressure meter blood pressure can be tracked, and an elevated blood pressure can be recognized. The most harmful consequence of an elevated blood pressure is a stroke. It also increases the risk of coronary heart disease and other artery diseases.",
    infoHeader2: "Resting heart rate",
    info3: "The typical resting heart rate of an adult is between 60 and 80 bpm, but a resting heart rate of 50-60 is still considered perfectly normal. The best endurance athletes can have a resting heart rate of as low as 30 to 40 bpm.",
    // Table contents
    tableCol1Header: "Category",
    tableCol2Header: "Upper pressure",
    tableCol4Header: "Lower pressure",
    tableC1R1: "Ideal",
    tableC2R1: "Less than 120",
    tableC3R1: "and",
    tableC4R1: "Less than 80",
    tableC1R2: "Normal",
    tableC2R2: "120–129",
    tableC3R2: "and/or",
    tableC4R2: "80–84",
    tableC1R3: 'Satisfactory ("high normal")',
    tableC2R3: "130–139",
    tableC3R3: "and/or",
    tableC4R3: "85–89",
    tableC1R4: "Stage 1 hypertension",
    tableC2R4: "140–159",
    tableC3R4: "and/or",
    tableC4R4: "90–99",
    tableC1R5: "Stage 2 hypertension",
    tableC2R5: "160–179",
    tableC3R5: "and/or",
    tableC4R5: "100–109",
    tableC1R6: "Stage 3 hypertension",
    tableC2R6: "180 or higher",
    tableC3R6: "and/or",
    tableC4R6: "110 or higher",
    tableC1R7: "Isolated systolic hypertension",
    tableC2R7: "140 tor higher",
    tableC3R7: "and",
    tableC4R7: "Less than 90",
    return: "Return",
    done: "Done"
};

var fi_warning = {
    title: "VAROITUS!",
    warning1: "Mikäli sinulla on sydämentahdistin tai muu kehoon asennettu elektroninen laite, oman turvallisuutesi vuoksi",
    warning2: "KEHONKOOSTUMUS MITTARIN KÄYTTÖ ON EHDOTTOMASTI KIELLETTY!",
    exit: "Poistu",
    continue: "Jatka"
};

var en_warning = {
    title: "WARNING!",
    warning1: "In case you have a pacemaker or other electronic device installed in your body, for your own safety,",
    warning2: "THE USAGE OF THE BODY COMPOSITION MEASUREMENT DEVICE IS FORBIDDEN!",
    exit: "Exit",
    continue: "Continue"
};

var fi_results = {
    results: "Tulokset",
    basic: "Tulokset",
    extensive: "Lisää tuloksia",
    limbs: "Raajat",
    sendTo: "Lähetä tulokset sähköpostiin",
    exit: "Poistu",
    close: "Sulje",
    promptEmail: "Anna sähköpostiosoitteesi",
    send: "Lähetä",
    success: "Sähköpostin lähetys onnistui!",
    failure: "Sähköpostin lähetys epäonnistui."
};

var en_results = {
    results: "Results",
    basic: "Results",
    extensive: "More results",
    limbs: "Limbs",
    sendTo: "Send results to e-mail",
    exit: "Exit",
    close: "Close",
    promptEmail: "Please input your e-mail address",
    send: "Send",
    success: "E-mail sent successfully!",
    failure: "Failed to send the e-mail."
};


function menuText(lang) {
    if (lang == 'fi')
        return fi_menu;
    else
        return en_menu;
}

function basicInfoText(lang) {
    if (lang == 'fi')
        return fi_basicInfo;
    else
        return en_basicInfo;
}

function inprocessText(lang) {
    if (lang == 'fi')
        return fi_inprocess;
    else
        return en_inprocess;
}

function finishedText(lang) {
    if (lang == 'fi')
        return fi_finishedText;
    else
        return en_finishedText;
}

function finishedText(lang) {
    if (lang == 'fi')
        return fi_finishedText;
    else
        return en_finishedText;
}

function inprocessPosterText(lang) {
    if (lang == 'fi')
        return fi_inProcessPoster;
    else
        return en_inProcessPoster;
}

function posterText(lang) {
    if (lang == 'fi')
        return fi_poster;
    else
        return en_poster;
}

function finishedPosterText(lang) {
    if (lang == 'fi')
        return fi_poster;
    else
        return en_poster;
}

function bloodPressureText(lang) {
    if (lang == "fi") {
        return fi_bloodPressure;
    }
    else {
        return en_bloodPressure;
    }
}

function bloodPressureResultsText(lang) {
    if (lang == "fi") {
        return fi_bloodPressureResults;
    }
    else {
        return en_bloodPressureResults;
    }
}

function warningText(lang) {
    if (lang == 'fi') {
        return fi_warning;
    }
    else {
        return en_warning;
    }
}

function resultsText(lang) {
    if (lang =="fi") {
        return fi_results;
    } else {
        return en_results;
    }
}

module.exports.controller = controller;
module.exports.resultsText = resultsText;
module.exports.menuText = menuText;
module.exports.basicInfoText = basicInfoText;
module.exports.inprocessText = inprocessText;
module.exports.finishedText = finishedText;
module.exports.inprocessPosterText = inprocessPosterText;
module.exports.posterText = posterText;
module.exports.finishedPosterText = finishedPosterText;
module.exports.bloodPressureText = bloodPressureText;
module.exports.bloodPressureResultsText = bloodPressureResultsText;
module.exports.warningText = warningText;
