function getLetterName() {
    var currentUrl = window.location.href;
    var url = new URL(currentUrl);
    var urlParams = url.searchParams;

    return urlParams.get('letter')
}