document.addEventListener("DOMContentLoaded", init);

function init(){
    var myDict = ["aa", "aah", "aahed", "aahing", "aahs", "aal", "aalii", "aaliis", "aals", "aardvark", "aardvarks", "aardwolf", "aardwolves", "aargh", "aarrgh", "aarrghh", "aarti", "aartis", "aas", "aasvogel", "aasvogels", "ab", "aba", "abac", "abaca", "abacas", "abaci", "aback", "abacs", "abacterial", "abactinal", "abactinally", "abactor", "abactors", "abacus", "abacuses", "abaft", "abaka", "abakas", "abalone", "abalones", "abamp", "abampere", "abamperes", "abamps", "aband", "abanded", "abanding", "abandon", "abandoned", "abandonedly", "abandonee", "abandonees", "abandoner", "abandoners", "abandoning", "abandonment", "abandonments", "abandons", "abandonware", "abandonwares", "abands", "abapical", "abas", "abase", "abased", "abasedly", "abasement", "abasements", "abaser", "abasers", "abases", "abash", "abashed", "abashedly", "abashes", "abashing", "abashless", "abashment", "abashments", "abasia", "abasias", "abasing", "abask", "abatable", "abate", "abated", "abatement", "abatements", "abater", "abaters", "abates", "abating", "abatis", "abatises", "abator", "abators", "abattis", "abattises", "abattoir", "abattoirs", "abattu", "abature", "abatures", "abaxial", "abaxile", "abaya", "abayas", "abb", "abba", "abbacies", "abbacy", "abbas", "abbatial", "abbe", "abbed", "abbes", "abbess", "abbesses", "abbey", "abbeys", "abbot", "abbotcies", "abbotcy", "abbots", "abbotship", "abbotships", "abbreviate", "abbreviated", "abbreviates", "abbreviating", "abbreviation", "abbreviations", "abbreviator", "abbreviators", "abbreviatory", "abbreviature", "abbreviatures", "abbs", "abcee", "abcees", "abcoulomb", "abcoulombs", "abdabs", "abdicable", "abdicant", "abdicate", "abdicated", "abdicates", "abdicating", "abdication", "abdications", "abdicative", "abdicator", "abdicators", "abdomen", "abdomens", "abdomina", "abdominal", "abdominally", "abdominals", "abdominoplasty", "abdominous", "abduce", "abduced", "abducens", "abducent", "abducentes", "abduces", "abducing", "abduct", "abducted", "abductee", "abductees", "abducting", "abduction", "abductions", "abductor", "abductores", "abductors", "abducts", "abeam", "abear", "abearing", "abears", "abecedarian", "abecedarians", "abed", "abegging", "abeigh", "abele", "abeles", "abelia", "abelian", "abelias", "abelmosk", "abelmosks", "aberdevine", "aberdevines", "abernethies", "abernethy", "aberrance", "aberrances", "aberrancies", "aberrancy", "aberrant", "aberrantly", "aberrants", "aberrate", "aberrated", "aberrates", "aberrating", "aberration", "aberrational", "aberrations", "abessive", "abessives", "abet", "abetment", "abetments", "abets", "abettal", "abettals", "abetted", "abetter", "abetters", "abetting", "abettor", "abettors", "abeyance", "abeyances", "abeyancies", "abeyancy", "abeyant", "abfarad", "abfarads", "abhenries", "abhenry", "abhenrys", "abhominable", "abhor", "abhorred", "abhorrence", "abhorrences", "abhorrencies", "abhorrency", "abhorrent", "abhorrently", "abhorrer", "abhorrers", "abhorring", "abhorrings", "abhors", "abid", "abidance", "abidances", "abidden", "abide", "abided", "abider", "abiders", "abides", "abiding", "abidingly", "abidings", "abies", "abietic", "abigail", "abigails", "abilities", "ability", "abiogeneses", "abiogenesis", "abiogenetic", "abiogenetically", "abiogenic", "abiogenically", "abiogenist", "abiogenists", "abiological", "abioses", "abiosis", "abiotic", "abiotically", "abiotrophic", "abiotrophies", "abiotrophy", "abirritant", "abirritants", "abirritate", "abirritated", "abirritates", "abirritating", "abitur", "abiturient", "abiturients", "abiturs", "abject", "abjected", "abjecting", "abjection", "abjections", "abjectly", "abjectness", "abjectnesses", "abjects", "abjoint", "abjointed", "abjointing", "abjoints", "abjunction", "abjunctions", "abjuration", "abjurations", "abjure", "abjured", "abjurer", "abjurers", "abjures", "abjuring", "ablactation", "ablactations", "ablate", "ablated", "ablates", "ablating", "ablation", "ablations", "ablatitious", "ablatival", "ablative", "ablatively", "ablatives", "ablator", "ablators", "ablaut", "ablauts", "ablaze", "able", "abled", "ablegate", "ablegates", "ableism", "ableisms", "ableist", "ableists", "abler", "ables", "ablest", "ablet", "ablets", "abling", "ablings", "ablins", "abloom", "ablow", "abluent", "abluents", "ablush", "abluted", "ablution", "ablutionary", "ablutions", "ablutomane", "ablutomanes", "ably", "abmho", "abmhos", "abnegate", "abnegated", "abnegates", "abnegating", "abnegation", "abnegations", "abnegator", "abnegators", "abnormal", "abnormalism", "abnormalisms", "abnormalities", "abnormality", "abnormally", "abnormals", "abnormities", "abnormity", "abnormous", "abo", "aboard", "abode", "aboded", "abodement", "abodements", "abodes", "aboding", "abohm", "abohms", "aboideau", "aboideaus", "aboideaux", "aboil", "aboiteau", "aboiteaus", "aboiteaux", "abolish", "abolishable", "abolished", "abolisher", "abolishers", "abolishes", "abolishing", "abolishment", "abolishments", "abolition", "abolitional", "abolitionary", "abolitionism", "abolitionisms", "abolitionist", "abolitionists", "abolitions", "abolla", "abollae", "abollas", "aboma", "abomas", "abomasa", "abomasal", "abomasi", "abomasum", "abomasus", "abominable", "abominableness", "abominably", "abominate", "abominated", "abominates", "abominating", "abomination", "abominations", "abominator", "abominators", "abondance", "abondances", "abonnement", "abonnements", "aboon", "aboral", "aborally", "abord", "aborded", "abording", "abords", "abore", "aborigen", "aborigens", "aborigin", "aboriginal", "aboriginalism", "aboriginalisms", "aboriginalities", "aboriginality", "aboriginally", "aboriginals", "aborigine", "aborigines", "aborigins", "aborne", "aborning", "abort", "aborted", "abortee", "abortees", "aborter", "aborters", "aborticide", "aborticides", "abortifacient", "abortifacients", "aborting", "abortion", "abortional", "abortionist", "abortionists", "abortions", "abortive", "abortively", "abortiveness", "abortivenesses", "aborts", "abortuaries", "abortuary", "abortus", "abortuses", "abos", "abought", "aboulia", "aboulias", "aboulic", "abound", "abounded", "abounding", "abounds", "about", "abouts", "above", "aboveboard", "aboveground", "aboves", "abracadabra", "abracadabras", "abrachia", "abrachias", "abradable", "abradant", "abradants", "abrade", "abraded", "abrader", "abraders", "abrades", "abrading", "abraid", "abraided", "abraiding", "abraids", "abram", "abranchial", "abranchiate", "abrasax", "abrasaxes", "abrasion", "abrasions", "abrasive", "abrasively", "abrasiveness", "abrasivenesses", "abrasives", "abraxas", "abraxases", "abray", "abrayed", "abraying", "abrays", "abrazo", "abrazos", "abreact", "abreacted", "abreacting", "abreaction", "abreactions", "abreactive", "abreacts", "abreast", "abrege", "abreges", "abri", "abricock", "abricocks", "abridgable", "abridge", "abridgeable", "abridged", "abridgement", "abridgements", "abridger", "abridgers", "abridges", "abridging", "abridgment", "abridgments", "abrim", "abrin", "abrins", "abris", "abroach", "abroad", "abroads", "abrogable", "abrogate", "abrogated", "abrogates", "abrogating", "abrogation", "abrogations", "abrogative", "abrogator", "abrogators", "abrooke", "abrooked", "abrookes", "abrooking", "abrosia", "abrosias", "abrupt", "abrupter", "abruptest", "abruption", "abruptions", "abruptly", "abruptness", "abruptnesses", "abrupts", "abs", "abscess", "abscessed", "abscesses", "abscessing", "abscind", "abscinded", "abscinding", "abscinds", "abscise", "abscised", "abscises", "abscisic", "abscisin", "abscising", "abscisins", "absciss", "abscissa", "abscissae", "abscissas", "abscisse", "abscisses", "abscissin", "abscissins", "abscission", "abscissions", "abscond", "absconded", "abscondence", "abscondences", "absconder", "absconders", "absconding", "absconds", "abseil", "abseiled", "abseiling", "abseilings", "abseils", "absence", "absences", "absent", "absented", "absentee", "absenteeism", "absenteeisms", "absentees", "absenter", "absenters", "absenting", "absently", "absentminded", "absentmindedly", "absentmindedness", "absentmindednesses", "absents", "absey", "abseys", "absinth", "absinthe", "absinthes", "absinthiated", "absinthism", "absinthisms", "absinths", "absit", "absits", "absolute", "absolutely", "absoluteness", "absolutenesses", "absoluter", "absolutes", "absolutest", "absolution", "absolutions", "absolutise", "absolutised", "absolutises", "absolutising", "absolutism", "absolutisms", "absolutist", "absolutistic", "absolutists", "absolutive", "absolutize", "absolutized", "absolutizes", "absolutizing", "absolutory", "absolvable", "absolve", "absolved", "absolvent", "absolvents", "absolver", "absolvers", "absolves", "absolving", "absolvitor", "absolvitors", "absonant", "absorb", "absorbabilities", "absorbability", "absorbable", "absorbance", "absorbances", "absorbancies", "absorbancy", "absorbant", "absorbants", "absorbate", "absorbates", "absorbed", "absorbedly", "absorbefacient", "absorbefacients", "absorbencies", "absorbency", "absorbent", "absorbents", "absorber", "absorbers", "absorbing", "absorbingly", "absorbs", "absorptance", "absorptances", "absorptiometer", "absorptiometers", "absorption", "absorptions", "absorptive", "absorptiveness", "absorptivities", "absorptivity", "absquatulate", "absquatulated", "absquatulates", "absquatulating", "abstain", "abstained", "abstainer", "abstainers", "abstaining", "abstains", "abstemious", "abstemiously", "abstemiousness", "abstemiousnesses", "abstention", "abstentionism", "abstentionisms", "abstentionist", "abstentionists", "abstentions", "abstentious", "absterge", "absterged", "abstergent", "abstergents", "absterges", "absterging", "abstersion", "abstersions", "abstersive", "abstersives", "abstinence", "abstinences", "abstinencies", "abstinency", "abstinent", "abstinently", "abstract", "abstractable", "abstracted", "abstractedly", "abstractedness", "abstractednesses", "abstracter", "abstracters", "abstractest", "abstracting", "abstraction", "abstractional", "abstractionism", "abstractionisms", "abstractionist", "abstractionists", "abstractions", "abstractive", "abstractively", "abstractives", "abstractly", "abstractness", "abstractnesses", "abstractor", "abstractors", "abstracts", "abstrict", "abstricted", "abstricting", "abstriction", "abstrictions", "abstricts", "abstruse"];

    var inputEL = document.querySelector('#inputWord');
    var btnEl =  document.querySelector('#searchWords');
    btnEl.addEventListener('click', function(event) {
        event.preventDefault();
        searchOnBtnClick(inputEL.value);
    });


    searchFromInput(inputEL, myDict);
}


function searchFromInput(inputEL, myDict) {
    inputEL.addEventListener('keyup', function() {
    searchDict = [];
    if (inputEL.value.length>0) {
        for (var i = 0; i < myDict.length; i++) {
            if (myDict[i].includes(inputEL.value)) {
                searchDict.push(myDict[i]);
            };
        };
    };
    showResults(searchDict);
    });
};

function showResults(res) {
	var containerSearch = document.querySelector('.searched-item');
    if (containerSearch) {
        document.body.removeChild(containerSearch) ;
    } 

    if (res.length > 0) {
    let searchedItem = document.createElement('ul');
    searchedItem.className = 'searched-item';
        for (var i = 0; i < res.length; i++) {
            let searchedWord = document.createElement('li');
            searchedWord.className = 'li-class';
            searchedWord.innerHTML = res[i];
            searchedItem.appendChild(searchedWord);
        };
        document.body.appendChild(searchedItem);
        wordItems = document.querySelectorAll('.li-class');
        generateList(searchedItem, wordItems)
    };
};

function generateList(wrapper, items) {
	var containerSelect = document.querySelector('.selected-item');
	
	if (containerSelect) {
		document.body.removeChild(containerSelect) ;
	} 

    let wrapperItems = document.createElement('ul');
    wrapperItems.className = 'selected-item';
    addedItemsList = [];
    wrapper.addEventListener('dblclick', function(e) {
        var curWord =  [...items].indexOf(e.target);
        if (!addedItemsList.includes(items[curWord].innerHTML)) {
            addedItemsList.push(items[curWord].innerHTML);
            let addedWord = document.createElement('li');
            addedWord.className = 'li-class';
            addedWord.innerHTML = items[curWord].innerHTML;
            wrapperItems.appendChild(addedWord);
        };
        document.body.appendChild(wrapperItems);

    });
};

function searchOnBtnClick(input) {
    window.open('http://google.com/search?q='+input);
};
