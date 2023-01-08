/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.   
 * There, you will see the results unit test execution. You are welcome    
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
function findSearchTermInBooks(searchTerm, scannedTextObj) {
    var result = {
        "SearchTerm": "",
        "Results": []
    };

    /** You will need to implement your search and 
     * return the appropriate object here. ******************** 
     * */

        if (scannedTextObj.length == 1) {//when there's only one book 
            result.SearchTerm = searchTerm;
            if (scannedTextObj[0].Content.length == 1) {//only one instance of Content in array
                if (scannedTextObj[0].Content[0].Text.includes(searchTerm)) {
                    result.Results.push( {  "ISBN": scannedTextObj[0].ISBN,
                                            "Page": scannedTextObj[0].Content[0].Page,
                                            "Line": scannedTextObj[0].Content[0].Line 
                                         } );
                                
                }
            }
            else if (scannedTextObj[0].Content.length > 1) {//more than single Content to go through
                for (y = 0; y < scannedTextObj[0].Content.length; y++) {
                    if (scannedTextObj[0].Content[y].Text.includes(searchTerm)) {
                        result.Results.push( { "ISBN": scannedTextObj[0].ISBN, 
                                               "Page": scannedTextObj[0].Content[y].Page, 
                                               "Line": scannedTextObj[0].Content[y].Line } );
                    }
                }
            }
            else {//Content array is empty
                result.Results = [];
            }
        }
        else if (scannedTextObj.length > 1) {//more than 1 book in array
            result.SearchTerm = searchTerm;
            for (x = 0; x < scannedTextObj.length; x++ ) {//iterate through book array
                if (scannedTextObj[x].Content.length == 1 || scannedTextObj[x].Content.length > 1) {//1 or more in Content array
                    for (z = 0; z < scannedTextObj[x].Content.length; z++) {
                        if (scannedTextObj[x].Content[z].Text.includes(searchTerm)) {
                            result.Results.push( {  "ISBN": scannedTextObj[x].ISBN,
                                                    "Page": scannedTextObj[x].Content[z].Page,
                                                    "Line": scannedTextObj[x].Content[z].Line } );
                        }
                    }
                }
                else {//Content array for book X is empty
                    result.Results = [];
                }
            }
        }
        else {
        result.SearchTerm = searchTerm;
        result.Results = [];
        }

    return result; 
}


/** Example output object */
const twentyLeaguesOut = {  "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}


/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}


/** My Own Unit Tests Below: */
const testObject1 = [
    {   
        "Title": "The De Monarchia of Dante Alighieri",
        "ISBN": "9781110839124",
        "Content": [
            {   "Page": 3,
                "Line": 7,
                "Text": "man who is imbued with public teachings, but"
            },
            {   "Page": 3,
                "Line": 8,
                "Text": "cares not to contribute something to the public"
            },
            {   "Page": 3,
                "Line": 9,
                "Text": "good, is far in arrears of his duty, let him be as-"
            },
            {
                "Page": 7,
                "Line": 1,
                "Text": "Iation, but for execution. In these things the"
            }
        ]

    },
    {
        "Title": "The Republic",
        "ISBN": "9780140455113",
        "Content": [
            {   "Page": 205,
                "Line": 18,
                "Text": "is to find out what their natural character is. When we have"
            }
        ]
    }
]
const testObject2 = [
    {
        "Title": "The De Monarchia of Dante Alighieri",
        "ISBN": "9781110839124",
        "Content": []
    }
]

const positTstResult1 = {  "SearchTerm": "is",
                           "Results": [
                                        {
                                            "ISBN": "9781110839124",
                                            "Page": 3,
                                            "Line": 7
                                        },
                                        {
                                            "ISBN": "9781110839124",
                                            "Page": 3,
                                            "Line": 9
                                        },
                                        {
                                            "ISBN": "9780140455113",
                                            "Page": 205,
                                            "Line": 18
                                        }
                            ]
} 

//First positive test
const positiveTest1 = findSearchTermInBooks("is", testObject1);
if (JSON.stringify(positTstResult1) === JSON.stringify(positiveTest1)) {
    console.log("PASS: Positive Test 1");
}
else {
    console.log("FAIL: Positive Test 1");
    console.log("RECEIVED:", positiveTest1);
}


const positTstResult2 = {
    "SearchTerm": "contribute",
    "Results": [
        {
            "ISBN": "9781110839124",
            "Page": 3,
            "Line": 8 
        }
    ]
}

//Second positive test
const positiveTest2 = findSearchTermInBooks("contribute", testObject1);
if (JSON.stringify(positTstResult2) === JSON.stringify(positiveTest2)) {
    console.log("PASS: Positive Test 2");
}
else {
    console.log("FAIL: Positive Test 2");
    console.log("RECEIVED:", positiveTest2);
}


const negTstResult1 = {
    "SearchTerm": "any",
    "Results": []
}
//Negative Test 1
const negativeTest1 = findSearchTermInBooks("any", testObject2);
if (JSON.stringify(negativeTest1) === JSON.stringify(negTstResult1)) {
    console.log("PASS: Negative Test 1");
}
else {
    console.log("FAIL: Negative Test 1");
    console.log("RECEIVED:", negativeTest1);
}


const negTstResult2 = {
    "SearchTerm": "cope",
    "Results": []
}
//Negative Test 2
const negativeTest2 = findSearchTermInBooks("cope", testObject1);
if (JSON.stringify(negativeTest2) === JSON.stringify(negTstResult2)) {
    console.log("PASS: Negative Test 2");
}
else {
    console.log("FAIL: Negative Test 2");
    console.log("RECEIVED:", negativeTest2);
}


const caseSenTstResult = {
    "SearchTerm": "In",
    "Results": [
        {
            "ISBN": "9781110839124",
            "Page": 7,
            "Line": 1
        }
    ]
}
//Case sensitive test
const caseSensitiveTest = findSearchTermInBooks("In", testObject1);
if (JSON.stringify(caseSenTstResult) === JSON.stringify(caseSensitiveTest)) {
    console.log("PASS: Case Sensitive Test");
}
else {
    console.log("FAIL: Case Sensitive Test");
    console.log("RECEIVED:", caseSensitiveTest);
}
