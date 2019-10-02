$.material.init();

$(document).ready(function() {
    card.init();
    var count = 0;
    $.each(card.info, function(index, value){
        var container;
        if (count % 2 == 1){
            container = '.left-card-holder'
        }
        else{
            container = '.right-card-holder'
        }
        card.generateCard(container, value);
        count++;
    });
});

var card = {
    dataLoaded: false,
    info: undefined
}

card.init = function(){
    $.ajax({
        url: 'data.json',
        dataType: 'json',
        async: false,
        success: function(data){
            card.dataLoaded = true;
            data = data[0];
             $.each(data, function(index, value){
                if (value.start_date){
                    value.start_date = new Date(value.start_date); 
                }
                if (value.end_date){
                    value.end_date = new Date(value.end_date);
                }
            });
            card.info = data;
        }   
    });
};

card.generateCard = function(container, data){
        var month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        var date_string;
        if (data.start_date && data.end_date){
            if (data.start_date.getFullYear() != data.end_date.getFullYear()){
                date_string = month_names[data.start_date.getMonth()] + ' ' + data.start_date.getFullYear() + ' - ' + month_names[data.end_date.getMonth()] + ' ' + data.end_date.getFullYear()
            }
            else{
                date_string = month_names[data.start_date.getMonth()] + ' - ' + month_names[data.end_date.getMonth()] + ' ' + data.end_date.getFullYear()
            }
        }
        else{
            date_string = 'Since ' + month_names[data.start_date.getMonth()] + ' ' + data.start_date.getFullYear()
        }
        
        data.experience = data.experience.toUpperCase();
        if (data.experience == 'WORK'){
            button_string = '<span class="type label label-danger">WORK EXPERIENCE</span>';
        }
        else if (data.experience == 'VOLUNTEERING'){
            button_string = '<span class="type label label-info">VOLUNTEERING</span>';
        }
        else if (data.experience == 'PROJECTS'){
            button_string = '<span class="type label label-success">PROJECTS</span>';
        }
        else if (data.experience == 'AWARDS'){
            button_string = '<span class="type label label-warning">AWARDS</span>';
        }
        
    
        switch(data.card_type){
            case 'hero':
                 var html = '<a href="' + data.link_urls[0] + '" target=_blank><div class="panel panel-default animated fadeInUp ' + data.id + '">' + 
                          '<div class="panel-body scard-2">' +
                              '<div class="col-xs-12">' +
                                  '<img class="card-hero" src="images/' + data.id + '_hero.png">' +
                              '</div>' +
                              '<div class="avatar-holder col-xs-3 col-sm-3 col-md-4 col-lg-3">' +
                                  '<img class="avatar" src="images/' + data.id + '.png">' +
                              '</div>' +
                              '<div class="col-xs-9 col-sm-9 col-md-8 col-lg-9">' +
                                  '<h4>' + data.company + '</h4>' +
                              '</div>' +
                            '<div class="col-xs-12">' +
                                ((data.title || data.position) ? ('<h6>' + ((data.title)? data.title:data.position) + '</h6>') : '') +
                                 '<span class="date">'+ date_string +'</span>' + 
                button_string +
                '       </div>' +
                '   </div>' +
                '</div></a>'; 
                break;
            case 'side':
                var html = '<a href="' + data.link_urls[0] + '" target=_blank><div class="panel panel-default animated fadeInUp ' + data.id + '">' +
                          '<div class="panel-body scard-3">' +
                              '<div class="col-xs-6" id="side-hero" style="background-image: url(images/' + data.id + '_hero.png)"></div>' +
                              '<div class="col-xs-6 info">' + 
                                   '<h6>'+ data.title +'</h6>' +
                                    '<span class="date">' + date_string + '</span>' +
                              '</div>' + 
                              '<div class="type">' + button_string +
                          '</div>' + 
                        '</div></a>'
                break;
            case 'contact':
                var html =  '<a href="' + data.link_urls[0] + '" target=_blank><div class="panel panel-default animated fadeInUp ' + data.id + '">' +
                '   <div class="panel-body scard">' +
                '       <div class="col-xs-3 col-sm-3 col-md-4 col-lg-3">' +
                '           <img class="avatar" src="' + 'images/' + data.id + '.png' + '">' +
                '       </div>' +
                '       <div class="col-xs-9 col-sm-9 col-md-8 col-lg-9">' +
                '           <h4>' + data.company + '</h4>' +
                ((data.location) ? '           <h5>' + (data.location) + '</h5>' : '') +
                '       </div>' +
                '       <div class="col-xs-12">' +
                ((data.title || data.position) ? ('<h6>' + ((data.title)? data.title:data.position) + '</h6>') : '') +
                '           <span class="date">'+ date_string +'</span>' + 
                button_string +
                '       </div>' +
                '   </div>' +
                '</div></a>'; 
                break;
        }
        
        $(container).append(html);
    };

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

$('.social-icon').on('click', function(){
    url = $(this).attr('url');
    openInNewTab(url);
})