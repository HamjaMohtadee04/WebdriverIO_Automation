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
get allRights(){
    return $("//span[contains(text(),'All Rights')]")
}
}

module.exports = new SearchObjects();