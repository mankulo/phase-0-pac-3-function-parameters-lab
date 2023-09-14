 function introductionwithlanguage(name,language) {
    return `Hi my name is ${name} and I am learning to programm in ${language}`;
 }
 console.log(introductionwithlanguage("[name]", "[language]"));

 function introduction(greeting,name) {
    return `${greeting},my name is ${name}`;
}
 console.log(introduction("Hi", "${name}"));

 function introductionwithlanguageoptional(name,language = "javascript") {
    return `Hi my name is ${name} and I am learning to program in ${language}`;
 }
 console.log(introductionwithlanguage("[name]","[language]"));