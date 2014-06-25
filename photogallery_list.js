function PBSGallery() {}
    
idAttr = $("[id^='photogallery_']").attr('id');
idArray = idAttr.split('_');
id = idArray[1];

//erase the contents of the current photo gallery id
$("#photogallery_" + id).html('');
newHtml = "<ul id='pressroom_gallery'>";

imgArray = window['imgOrdering_' + id];
imgDict = window['imgDict_' + id];

$(imgArray).each(function() {
    
    thumbnailSrc = imgDict[this].src;
    fullSrc = thumbnailSrc.replace("filer_public_thumbnails/", "");
    fullSrc = fullSrc.replace(/__.*/g, '');
    
    filenameIndex = fullSrc.lastIndexOf("/");
    filename = fullSrc.substring(filenameIndex);
    filename = filename.replace("/", "");
    
    newHtml += "<li>";    
    newHtml += "<a href='" + fullSrc + "'><img class='thumbnail' src='" + thumbnailSrc + "'/></a>"
        newHtml += "<ul>";
            newHtml += "<li><span class='title'>File Name: </span><span class='content'>" + filename + "</span></li>";
			if (typeof imgDict[this].default_caption != 'undefined' && imgDict[this].default_caption) {
				newHtml += "<li><span class='title'>Caption: </span><span class='content'>" + imgDict[this].default_caption + "</span></li>";	
			}
			if (typeof imgDict[this].default_credit != 'undefined' && imgDict[this].default_credit) {
				newHtml += "<li><span class='title'>Credit: </span><span class='content'>" + imgDict[this].default_credit + "</span></li>";
			}
        newHtml += "</ul>";
    newHtml += "</li>";    
});

newHtml += '</ul>';

$("#photogallery_" + id).html(newHtml);