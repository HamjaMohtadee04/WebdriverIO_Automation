class SearchObjects{
get searchIcon(){
    return $("//a[contains(@class, 'search-icon')]")
}

get searchInputField(){
    return $("//input[@placeholder='Search']")
}
searchResults(searchText){
    return $$(`//span[contains(text(),'${searchText}')]`)
}
}

module.exports = new SearchObjects();