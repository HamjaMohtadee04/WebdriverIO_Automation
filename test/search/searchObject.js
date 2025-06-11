class SearchObjects{
get searchIcon(){
    return $("//a[contains(@class, 'search-icon')]")
}

get searchInputField(){
    return $("//input[@placeholder='Search']")
}

}

module.exports = new SearchObjects();