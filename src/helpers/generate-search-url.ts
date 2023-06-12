// function compileStickerList(ignore) {
//     let stickerList = [];
//     $(".stickerSlot:not(:empty)").each(function () {
//         stickerList.push(
//             $(this).attr("data-url")
//         );
//     });

// }

// //Get the item wear from checkboxes
// function getWear() {
//     let wear = "";
//     $("#wearSelector input:checked").each(function () {
//         wear += $(this).val();
//     });
//     return wear;
// }

// function generateSearchstring() {
//     return 'http://steamcommunity.com/market/search?q="' + encodeURI(compileStickerList(ignore)) +
//         '"&descriptions=1&category_730_ItemSet%5B%5D=any' +
//         getWear() +
//         '&category_730_Weapon%5B%5D=' + $(".weaponDropdown").val() +
//         '&category_730_Quality%5B%5D=' + $(".typeDropdown").val() +
//         '#p1_price_asc';
// }
