function checkURL(inputText) {
    console.log("::: Testing for URL :::", inputText);
    let regex = RegExp('(http(s)?:\/\/)?(www\.)?([a-zA-Z0-9-@:%._+~#=]{2,256})\.([a-z]{2,6})([/a-zA-Z0-9-@:%._+~#=!?&=]*)')

    if(regex.test(inputText)) {
        return true;
    }
}

export { checkURL }
