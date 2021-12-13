function get_details(selector) {
    let allStatsObj = document.querySelectorAll(selector);
    let noOfVideos = allStatsObj[0].innerText;
    let noOfViews = allStatsObj[1].innerText;
    return {
        noOfVideos,
        noOfViews
    }
}

module.exports = {
    get_details
}
