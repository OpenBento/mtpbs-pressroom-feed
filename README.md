pressroom-feed
==============

##MTPBS Pressroom Feed##
Creates a listing of photos for pressroom use, simply by including the Photo Gallery module. Photos meta deta must be updated within the filer in order to display on the pressroom feed. Pressroom will be default show the File Name, Caption, and Photo Credit as defined by the photos meta properties. The image displayed links to the original (high-resolution) image size onclick.

## Setup ##
Extra-Page-Content:  
`Photo Gallery [ Photo Gallery ]`

Page Content:  
`Smart Snippet [ MTPBS Pressroom - Pressroom Feed ]`  
- Uses pressroom-feed.txt as Smart Snippet Content  
- Calls photogallery_list.js  
