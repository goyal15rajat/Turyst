flag=true;
/*var genre_list=new Array();
function cache(key,value){
    this.key=key;
    this.value=value;
}*/
$(document).ready(function(){
    first_event_ajax();
    preparefilter();
});

/*
function process(){
    temp_genre=new cache(28,'Action');
    genre_list.push(temp_genre);
    temp_genre=new cache(12,'Adventure');
    genre_list.push(temp_genre);
    temp_genre=new cache(16,'Animation');
    genre_list.push(temp_genre);
    temp_genre=new cache(35,'Comedy');
    genre_list.push(temp_genre);
    temp_genre=new cache(80,'Crime');
    genre_list.push(temp_genre);
    temp_genre=new cache(99,'Documentary');
    genre_list.push(temp_genre);
    temp_genre=new cache(18,'Drama');
    genre_list.push(temp_genre);
    temp_genre=new cache(10751,'Family');
    genre_list.push(temp_genre);
    temp_genre=new cache(14,'Fantasy');
    genre_list.push(temp_genre);
    temp_genre=new cache(36,'History');
    genre_list.push(temp_genre);
    temp_genre=new cache(27,'Horror');
    genre_list.push(temp_genre);
    temp_genre=new cache(10402,'Music');
    genre_list.push(temp_genre);
    temp_genre=new cache(9648,'Mystery');
    genre_list.push(temp_genre);
    temp_genre=new cache(10749,'Romance');
    genre_list.push(temp_genre);
    temp_genre=new cache(878,'Science Fiction');
    genre_list.push(temp_genre);
    temp_genre=new cache(10770,'TV Movie');
    genre_list.push(temp_genre);
    temp_genre=new cache(53,'Thriller');
    genre_list.push(temp_genre);
    temp_genre=new cache(10752,'War');
    genre_list.push(temp_genre);
    temp_genre=new cache(37,'Western');
    genre_list.push(temp_genre);

    //for(var k=0;k<genre_list.length;++k)
    //{
    //  console.log(genre_list[k].key+''+genre_list[k].value);
    //}
}
*//*
function find(key){
    var found;
    for(var k=0;k<genre_list.length;++k)
    {
        if(genre_list[k].key==key){found=genre_list[k].value;break;}
    }
    return found;
}*/
//var contentType ="application/json";
//if(window.XDomainRequest) //for IE8,IE9
//    contentType = "text/plain";
function first_event_ajax(){
    console.log('Hello') ;
            var id = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
            var title = ["ITM Jaipur - India Travel Mart","India Stonemart 2017","Saat Phere - The Wedding Fair","Balrangam","Bloomfair India - Way to Bollywood Grand Finale 2016","Stand Up Comedy This Sunday","Design Connect-Jaipur","Session 8 - Poems & Handicrafts","Jaipur Startups Meetup Episode 4","Vh1 Supersonic Club Nights feat. Nikhil Chinapa","The Blackout Night","Call of Bids","Spark- Entrepreneurship for Young Minds","4th National Pickleball","Anugoonj-7, 2016 7th Annual National Exhibition of Paintings","Indian Youth Parliament","Havelis and Fresco","Roots Live Band - Star Clinch","Maskhare Night with Karan Talwar","Pink City Ultra Run","Unlimited Praise 2016","Composition in Digital Photography","IdeaThon - The Marathon Of Ideas","Dunes Music Festival","Natural Dyeing & Eco Printing Workshop","THAAR - The Aravali Adrenaline Rush 2016","Donate Blood Save Life","Freakin Four Entries","Pink City New Year Eve 2017","WAF Model United Nations '16","Mansarovar Mini Marathon","Saugat The Fashion Show"];
            var venue = ["B M Birla Auditorium & Convention Center, Statue Circle, Jaipur, India","Jaipur Exhibition and Convention Centre, Sitapura, Jaipur, India","Shakun Hotels & Resorts, D-28, Subhash Marg, C-Scheme, Jaipur, India","Ravindra Munch, Ramnivas Bag, Jaipur, India","Castle Kalwar, VPO kalwar, Jaipur, India","Vito's Cafe & Lounge, 403, 4th Floor, Axis Mall, C-scheme, Jaipur, India","Maharana Pratap Auditorium NH 8, Mahesh Nagar Phatak, Bajaj Nagar, Jaipur","Amrudon Ka Bagh, Jan Path, Jyothi Nagar, Lalkothi, Jaipur","Gunawati House, 6-B , Ganga Path , Suraj Nagar West, Civil Lines , Ajmer Road, Jaipur","F Bar & Lounge Jaipur, Golden Tulip Jaipur, MI Road, Jaipur, India","Blackout - Jaipur, 9th Floor, Landmark Building, Golden Oak Hotel, Ahinsa Circle, C-Scheme, Jaipur","Malaviya National Institute of Technology, Jaipur, India","Rukmani Birla Modern High School, Jaipur, India","Sawai Mansingh Indoor Stadium, Jaipur, India","Juneja Art Gallery - Jaipur Art Gallery, Jaipur","Birla Auditorium, Jaipur, India","Rajputana Horse Safari, Ajmer Road, Jaipur, India","House of People , A1, Sehkar Marg, Bais Godam, Jaipur, Rajasthan, Jaipur","WTF Cafe, 3rd Floor,Man Upasana Mall,C-Scheme, Jaipur, India","Central Park Jaipur, statue circle, Jaipur, India","Pink City, Jaipur","Mutual's, 1, Awadhpuri, Lal Kothi, Tonk Road, Jaipur, India","JECRC University, Plot No.IS-2036-2039, Ramchandrapura, Vidhani, Jaipur, India","Clark Amer, Jaipur, India","DIY - Dye It Yourself, International Horticulture Innovation And Training Center, Jaipur, India","KK Royal Hotel & Convention Centre, AMER ROAD, Jaipur, India","Apex Hospitals, Apex Hopsitals Pvt Ltd. , Sp-6, Malviya Nagar Industrial Area, Jaipur, India","Manipal University, Dehmi Kalan, Sanganer, Jaipur","Angel Resort & Amusement Water Park, Eden Garden, 20th Milestone, Rajawas, Jaipur-Sikar Highway, Jaipur","Country Inn & Suites By Carlson, Jaipur, India","Mansarovar, Jaipur, India","Fashion Square, Jaipur, Rajasthan"];
            var type =["Exhibition","Business","Exhibition","Show","Show","Show","Workshop","Exhibition","Talk","Concert","Concert","Workshop","Seminar","Tournament","Exhibition","Exhibition","Expedition","Concert","Show","Marathon","Expedition","Workshop","Talk","Concert","Workshop","Expedition","Camp","Show","Show","Seminar","Marathon","Show"];
            var event_date = ["07-01-2017","02-02-2017","13-12-2016","25-01-2017","13-11-2016","13-11-2016","13-11-2016","13-12-2016","05-01-2017","17-12-2017","21-11-2016","27-12-2016","11-12-2016","22-12-2016","19-12-2016","02-12-2016","05-12-2016","30-11-2016","27-11-2016","27-11-2016","26-11-2016","20-11-2016","19-12-2016","19-11-2016","24-11-2016","18-12-2016","17-11-2016","29-11-2016","31-12-2016","28-12-2016","25-12-2016","24-12-2016"];
            var event_time = ["04:00 PM","09:00 AM","11:00 AM","06:00 PM","06:00 PM","11:00 PM","07:30 PM","04:00 PM","01:00 PM","10:00 PM","04:00 AM","10:00 AM","09:30 AM","09:00 AM","05:00 PM","11:30 PM","12:00 AM","09:00 PM","08:30 PM","08:00 PM","04:00 PM","09:00 AM","05:00 PM","03:00 PM","11:00 AM","09:00 AM","05:00 PM","09:30 PM","07:00 PM","07:00 PM","09:00 AM","03:30 PM"];
            var poster_path = ["event_img/0.jpg","event_img/1.jpg","event_img/2.jpg","event_img/3.jpg","event_img/4.jpg","event_img/5.jpg","event_img/6.jpg","event_img/7.jpg","event_img/8.jpg","event_img/9.jpg","event_img/10.jpg","event_img/11.jpg","event_img/12.png","event_img/13.jpg","event_img/14.jpg","event_img/15.jpg","event_img/16.jpg","event_img/17.jpg","event_img/18.jpg","event_img/19.jpg","event_img/20.jpg","event_img/21.jpg","event_img/22.jpg","event_img/23.jpg","event_img/24.jpg","event_img/25.jpg","event_img/26.jpg","event_img/27.jpg","event_img/28.jpg","event_img/29.jpg","event_img/30.jpg","event_img/31.jpg"];
            //var vote = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
            var latitude = ["26.906924","26.784742","26.910736","26.913587","26.988432","26.910455","26.868464","26.896278","26.904311","26.916426","26.913932","26.857362","26.857338","26.893946","26.897784","26.906024","26.913081","26.899771","26.911958","26.904765","26.927661","26.888458","26.775524","26.846393","26.844721","26.990222","26.854712","26.841339","27.066675","26.919685","26.858443","26.896805"];
            var longitude = ["75.805646","75.826521","75.801938","75.822622","75.584947","75.807465","75.806126","75.798714","75.777491","75.805106","75.805888","75.804072","75.786569","75.802927","75.787666","75.805646","75.805532","75.792826","75.797392","75.807168","75.831343","75.800672","75.877486","75.800446","75.782911","75.865341","75.825225","75.566221","75.752242","75.794935","75.768383","75.82643"];
            //var tag=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];


            var str='' ;
            for(var i = 0 ; i < id.length ; i++){
                /*poster_path[i];
                venue[i];
                event_date[i];
                id[i];
                title[i];
                */
                /*var percent=(Number(vote[i])/10)*100;
                var display=percent+'%';
                */
                str += '<div id="hide_area" class="col-lg-12 col-md-12"><div class="about_area"><div class="heading"><h2 id="search_item" class="wow fadeInLeft"><br><br>';
                str += title[i] ;
                str += '</h2></div><div class="about_content"><div class="row"><div class="col-lg-6 col-md-6 col-sm-12"><div class="about_featured"><div class="panel-group" id="accordion"><div class="row"><div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading"><h4 class="panel-title">Venue</h4></div><div class="panel-body">' ;
                str += venue[i];
                str +=  '</div></div></div><div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading"><h4 class="panel-title"> Type </h4></div><div class="panel-body">';
                str += type[i];
                /*
                if(vote[i]!=0){
                    str +=  vote[i] ;
                    str += ' </div>';
                    str+='<div class="panel-body">';
                    str+='<span style="display: block; width: 160px; height: 16px; background: url(img/stars10.png) 0 0;">';
                    str +='<span style="display: block; width: ';
                    str+=display;
                    str += '; height: 16px; background: url(img/stars10.png) 0 -16px;"></span></span>';
                    str+='</div>';
                }
                else
                {
                    str += 'Not Rated yet';
                    str += ' </div>';
                }*/
                str+='</div></div></div></div>';

                str+='<div class="row"><div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading">';
                str+='<h4 class="panel-title">Event Date</h4></div><div class="panel-body">';
                str+= event_date[i];
                str+='</div></div></div>';
                /*var add='';
                for(var z=0;z<results[i].genre_ids.length&&z<5;++z){
                    var temp=results[i].genre_ids[z];
                    var found=find(temp);
                    add+='<span class="label label-warning">';
                    add+=found;
                    add+='</span>';
                }*/
                str+='<div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading">';
                str+='<h4 class="panel-title">Event Time</h4></div><div class="panel-body">';
                str+= event_time[i];
                str+='</div></div></div>';
                str+='</div>';


                //str+='<div class="panel panel-default wow fadeInLeft"><div class="panel-heading"><h4 class="panel-title"> Release Date </h4></div><div class="panel-body">';
                //str +=  event_date[i];
                //str +=   '</div></div>';
                str+='<div class="panel panel-default wow fadeInLeft"><button id=';
                str+= id[i];
                str+=' type="button" class="btn btn-primary btn-block" onclick="execute_event(this.id)"style="margin-top:40px;">Details</button></div>';
                str += '</div></div></div><div class="col-lg-6 col-md-6 col-sm-12"><div class="about_slider"><div class="featured_slider"><div style="padding-left:15px; " class="single_iteam"><img src="';
                str += poster_path[i];
                str += '" width="400" height="400" alt="img">';
                str += '</div></div></div></div></div></div></div></div> ';

            }
            var divid = document.getElementById('products');
            divid.innerHTML += str;
            setTimeout(function(){
        $("#movie_loader").fadeOut("fast");
      $("#products").fadeIn("slow");
  },2000);
}

/*
function second_movie_ajax(){
    return $.ajax({
        url: 'https://api.themoviedb.org/3/discover/movie?api_key=fc3c055dbae6de898caa4bae948ed685&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=2&primary_release_year=2016&event_date.gte=2016-9-10&event_date.lte=2016-10-10',
        method: 'GET',
        dataType: 'json',
        success: function(data){
            var results = data.results ;
            console.log(results.length);
            var poster_path = [];
            var venue = [];
            var event_date = [];
            var id = [];
            var title = [];
            var vote = [];
            var tag=[];

            var str ;
            for(var i = 0 ; i < results.length ; i++){
                poster_path[i] = results[i].poster_path ;
                venue[i] = results[i].venue;
                event_date[i] = results[i].release_date ;
                id[i] = results[i].id ;
                title[i] = results[i].original_title ;
                vote[i] = results[i].vote_average ;

                var percent=(Number(vote[i])/10)*100;
                var display=percent+'%';

                str = '<div id="hide_area" class="col-lg-12 col-md-12"><div class="about_area"><div class="heading"><h2 id="search_item" class="wow fadeInLeftBig"><br><br>';
                str += title[i] ;
                str += '</h2></div><div class="about_content"><div class="row"><div class="col-lg-6 col-md-6 col-sm-12"><div class="about_featured"><div class="panel-group" id="accordion"><div class="row"><div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading"><h4 class="panel-title">venue</h4></div><div class="panel-body">' ;
                str += venue[i];
                str +=  '</div></div></div><div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading"><h4 class="panel-title"> IMDb Rating </h4></div><div class="panel-body">';
                if(vote[i]!=0){
                    str +=  vote[i] ;
                    str += ' </div>';
                    str+='<div class="panel-body">';
                    str+='<span style="display: block; width: 160px; height: 16px; background: url(img/stars10.png) 0 0;">';
                    str +='<span style="display: block; width: ';
                    str+=display;
                    str += '; height: 16px; background: url(img/stars10.png) 0 -16px;"></span></span>';
                    str+='</div>';
                }
                else
                {
                    str += 'Not Rated yet';
                    str += ' </div>';
                }
                str+='</div></div></div>';

                str+='<div class="row"><div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading">';
                str+='<h4 class="panel-title">Release Date</h4></div><div class="panel-body">';
                str+=event_date[i];
                str+='</div></div></div>';
                var add='';
                for(var z=0;z<results[i].genre_ids.length;++z){
                    var temp=results[i].genre_ids[z];
                    var found=find(temp);
                    add+='<span class="label label-warning">';
                    add+=found;
                    add+='</span>';
                }
                str+='<div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading">';
                str+='<h4 class="panel-title">Genre Tag</h4></div><div class="panel-body">';
                str+=add;
                str+='</div></div></div>';
                str+='</div>';


                //str+='<div class="panel panel-default wow fadeInLeft"><div class="panel-heading"><h4 class="panel-title"> Release Date </h4></div><div class="panel-body">';
                //str +=  event_date[i];
                //str +=   '</div></div>';
                str+='<div class="panel panel-default wow fadeInLeft"><button id=';
                str+=JSON.stringify(id[i]);
                str+=' type="button" class="btn btn-primary btn-block" onclick="execute_movie(this.id)"style="margin-top:40px;">Details</button></div>';
                str += '</div></div></div><div class="col-lg-6 col-md-6 col-sm-12"><div class="about_slider"><div class="featured_slider"><div style="padding-left:15px; " class="single_iteam"><img src="';
                str += 'https://image.tmdb.org/t/p/w500/' + poster_path[i];
                str += '" width="400" height="400" alt="img">';
                str += '</div></div></div></div></div></div></div></div> ';
                var divid = document.getElementById('products');
                divid.innerHTML += str;
            }


        },
        error:function(response){
            console.log('Hello');
        }
    });
}


function third_movie_ajax(){
    return $.ajax({
        url: 'https://api.themoviedb.org/3/discover/movie?api_key=fc3c055dbae6de898caa4bae948ed685&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=3&primary_release_year=2016&event_date.gte=2016-9-10&event_date.lte=2016-10-10',
        method: 'GET',
        dataType: 'json',
        success: function(data){
            var results = data.results ;
            //console.log(data);
            var poster_path = [];
            var venue = [];
            var event_date = [];
            var id = [];
            var title = [];
            var vote = [];
            var tag=[];

            var str ;
            for(var i = 0 ; i < results.length ; i++){
                poster_path[i] = results[i].poster_path ;
                venue[i] = results[i].venue;
                event_date[i] = results[i].release_date ;
                id[i] = results[i].id ;
                title[i] = results[i].original_title ;
                vote[i] = results[i].vote_average ;

                var percent=(Number(vote[i])/10)*100;
                var display=percent+'%';

                str = '<div id="hide_area" class="col-lg-12 col-md-12"><div class="about_area"><div class="heading"><h2 id="search_item" class="wow fadeInLeftBig"><br><br>';
                str += title[i] ;
                str += '</h2></div><div class="about_content"><div class="row"><div class="col-lg-6 col-md-6 col-sm-12"><div class="about_featured"><div class="panel-group" id="accordion"><div class="row"><div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading"><h4 class="panel-title">venue</h4></div><div class="panel-body">' ;
                str += venue[i];
                str +=  '</div></div></div><div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading"><h4 class="panel-title"> IMDb Rating </h4></div><div class="panel-body">';
                if(vote[i]!=0){
                    str +=  vote[i] ;
                    str += ' </div>';
                    str+='<div class="panel-body">';
                    str+='<span style="display: block; width: 160px; height: 16px; background: url(img/stars10.png) 0 0;">';
                    str +='<span style="display: block; width: ';
                    str+=display;
                    str += '; height: 16px; background: url(img/stars10.png) 0 -16px;"></span></span>';
                    str+='</div>';
                }
                else
                {
                    str += 'Not Rated yet';
                    str += ' </div>';
                }
                str+='</div></div></div>';

                str+='<div class="row"><div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading">';
                str+='<h4 class="panel-title">Release Date</h4></div><div class="panel-body">';
                str+=event_date[i];
                str+='</div></div></div>';
                var add='';
                for(var z=0;z<results[i].genre_ids.length;++z){
                    var temp=results[i].genre_ids[z];
                    var found=find(temp);
                    add+='<span class="label label-warning">';
                    add+=found;
                    add+='</span>';
                }
                str+='<div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading">';
                str+='<h4 class="panel-title">Genre Tag</h4></div><div class="panel-body">';
                str+=add;
                str+='</div></div></div>';
                str+='</div>';


                //str+='<div class="panel panel-default wow fadeInLeft"><div class="panel-heading"><h4 class="panel-title"> Release Date </h4></div><div class="panel-body">';
                //str +=  event_date[i];
                //str +=   '</div></div>';
                str+='<div class="panel panel-default wow fadeInLeft"><button id=';
                str+=JSON.stringify(id[i]);
                str+=' type="button" class="btn btn-primary btn-block" onclick="execute_movie(this.id)"style="margin-top:40px;">Details</button></div>';
                str += '</div></div></div><div class="col-lg-6 col-md-6 col-sm-12"><div class="about_slider"><div class="featured_slider"><div style="padding-left:15px; " class="single_iteam"><img src="';
                if(poster_path[i]!=undefined){
                    //console.log("poster "+);
                    str += 'https://image.tmdb.org/t/p/w500/' + poster_path[i];
                }
                else{
                    //console.log("No poster");
                    str+='img/no_poster.png';
                }
                str += '" width="400" height="400" alt="img">';
                str += '</div></div></div></div></div></div></div></div> ';
                var divid = document.getElementById('products');
                divid.innerHTML += str;
            }


        },
        error:function(response){
            console.log('Hello');
        }
    });
}
*/

function execute_event(to_add){
    //$("button").click(function(){
    if(flag){
        //console.log('Success');
        //alert(this.id);
        flag=false;
        //var to_add=this.id;
        //alert(to_add);
        localStorage.request_event_id=to_add;
        window.location='event_detail.html';
    }
    //});
}
/*
function wait_movie_ajax_1(){
    console.log("2");
    setTimeout(second_movie_ajax,500);
}
function wait_movie_ajax_2(){
    console.log("3");
    setTimeout(third_movie_ajax,500);
}
*/

function preparefilter() {
    $('.place_type').iCheck({
        checkboxClass: 'icheckbox_flat-green'
            // radioClass: 'iradio_flat-red'
    });


    $("#accordion").accordion({
        heightStyle: false,
        active: 'none',
        collapsible: true

    });
    $('.place_type').iCheck('check');
    $('.place_type').on('ifToggled', function(event) {
        //alert(event.type + ' callback');
        filter();
    });
}



function filter(){
    //console.log('Hello') ;
            var id = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
            var title = ["ITM Jaipur - India Travel Mart","India Stonemart 2017","Saat Phere - The Wedding Fair","Balrangam","Bloomfair India - Way to Bollywood Grand Finale 2016","Stand Up Comedy This Sunday","Design Connect-Jaipur","Session 8 - Poems & Handicrafts","Jaipur Startups Meetup Episode 4","Vh1 Supersonic Club Nights feat. Nikhil Chinapa","The Blackout Night","Call of Bids","Spark- Entrepreneurship for Young Minds","4th National Pickleball","Anugoonj-7, 2016 7th Annual National Exhibition of Paintings","Indian Youth Parliament","Havelis and Fresco","Roots Live Band - Star Clinch","Maskhare Night with Karan Talwar","Pink City Ultra Run","Unlimited Praise 2016","Composition in Digital Photography","IdeaThon - The Marathon Of Ideas","Dunes Music Festival","Natural Dyeing & Eco Printing Workshop","THAAR - The Aravali Adrenaline Rush 2016","Donate Blood Save Life","Freakin Four Entries","Pink City New Year Eve 2017","WAF Model United Nations '16","Mansarovar Mini Marathon","Saugat The Fashion Show"];
            var venue = ["B M Birla Auditorium & Convention Center, Statue Circle, Jaipur, India","Jaipur Exhibition and Convention Centre, Sitapura, Jaipur, India","Shakun Hotels & Resorts, D-28, Subhash Marg, C-Scheme, Jaipur, India","Ravindra Munch, Ramnivas Bag, Jaipur, India","Castle Kalwar, VPO kalwar, Jaipur, India","Vito's Cafe & Lounge, 403, 4th Floor, Axis Mall, C-scheme, Jaipur, India","Maharana Pratap Auditorium NH 8, Mahesh Nagar Phatak, Bajaj Nagar, Jaipur","Amrudon Ka Bagh, Jan Path, Jyothi Nagar, Lalkothi, Jaipur","Gunawati House, 6-B , Ganga Path , Suraj Nagar West, Civil Lines , Ajmer Road, Jaipur","F Bar & Lounge Jaipur, Golden Tulip Jaipur, MI Road, Jaipur, India","Blackout - Jaipur, 9th Floor, Landmark Building, Golden Oak Hotel, Ahinsa Circle, C-Scheme, Jaipur","Malaviya National Institute of Technology, Jaipur, India","Rukmani Birla Modern High School, Jaipur, India","Sawai Mansingh Indoor Stadium, Jaipur, India","Juneja Art Gallery - Jaipur Art Gallery, Jaipur","Birla Auditorium, Jaipur, India","Rajputana Horse Safari, Ajmer Road, Jaipur, India","House of People , A1, Sehkar Marg, Bais Godam, Jaipur, Rajasthan, Jaipur","WTF Cafe, 3rd Floor,Man Upasana Mall,C-Scheme, Jaipur, India","Central Park Jaipur, statue circle, Jaipur, India","Pink City, Jaipur","Mutual's, 1, Awadhpuri, Lal Kothi, Tonk Road, Jaipur, India","JECRC University, Plot No.IS-2036-2039, Ramchandrapura, Vidhani, Jaipur, India","Clark Amer, Jaipur, India","DIY - Dye It Yourself, International Horticulture Innovation And Training Center, Jaipur, India","KK Royal Hotel & Convention Centre, AMER ROAD, Jaipur, India","Apex Hospitals, Apex Hopsitals Pvt Ltd. , Sp-6, Malviya Nagar Industrial Area, Jaipur, India","Manipal University, Dehmi Kalan, Sanganer, Jaipur","Angel Resort & Amusement Water Park, Eden Garden, 20th Milestone, Rajawas, Jaipur-Sikar Highway, Jaipur","Country Inn & Suites By Carlson, Jaipur, India","Mansarovar, Jaipur, India","Fashion Square, Jaipur, Rajasthan"];
            var type =["Exhibition","Business","Exhibition","Show","Show","Show","Workshop","Exhibition","Talk","Concert","Concert","Workshop","Seminar","Tournament","Exhibition","Exhibition","Expedition","Concert","Show","Marathon","Expedition","Workshop","Talk","Concert","Workshop","Expedition","Camp","Show","Show","Seminar","Marathon","Show"];
            var event_date = ["07-01-2017","02-02-2017","13-12-2016","25-01-2017","13-11-2016","13-11-2016","13-11-2016","13-12-2016","05-01-2017","17-12-2017","21-11-2016","27-12-2016","11-12-2016","22-12-2016","19-12-2016","02-12-2016","05-12-2016","30-11-2016","27-11-2016","27-11-2016","26-11-2016","20-11-2016","19-12-2016","19-11-2016","24-11-2016","18-12-2016","17-11-2016","29-11-2016","31-12-2016","28-12-2016","25-12-2016","24-12-2016"];
            var event_time = ["04:00 PM","09:00 AM","11:00 AM","06:00 PM","06:00 PM","11:00 PM","07:30 PM","04:00 PM","01:00 PM","10:00 PM","04:00 AM","10:00 AM","09:30 AM","09:00 AM","05:00 PM","11:30 PM","12:00 AM","09:00 PM","08:30 PM","08:00 PM","04:00 PM","09:00 AM","05:00 PM","03:00 PM","11:00 AM","09:00 AM","05:00 PM","09:30 PM","07:00 PM","07:00 PM","09:00 AM","03:30 PM"];
            var poster_path = ["event_img/0.jpg","event_img/1.jpg","event_img/2.jpg","event_img/3.jpg","event_img/4.jpg","event_img/5.jpg","event_img/6.jpg","event_img/7.jpg","event_img/8.jpg","event_img/9.jpg","event_img/10.jpg","event_img/11.jpg","event_img/12.png","event_img/13.jpg","event_img/14.jpg","event_img/15.jpg","event_img/16.jpg","event_img/17.jpg","event_img/18.jpg","event_img/19.jpg","event_img/20.jpg","event_img/21.jpg","event_img/22.jpg","event_img/23.jpg","event_img/24.jpg","event_img/25.jpg","event_img/26.jpg","event_img/27.jpg","event_img/28.jpg","event_img/29.jpg","event_img/30.jpg","event_img/31.jpg"];
            //var vote = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
            var latitude = ["26.906924","26.784742","26.910736","26.913587","26.988432","26.910455","26.868464","26.896278","26.904311","26.916426","26.913932","26.857362","26.857338","26.893946","26.897784","26.906024","26.913081","26.899771","26.911958","26.904765","26.927661","26.888458","26.775524","26.846393","26.844721","26.990222","26.854712","26.841339","27.066675","26.919685","26.858443","26.896805"];
            var longitude = ["75.805646","75.826521","75.801938","75.822622","75.584947","75.807465","75.806126","75.798714","75.777491","75.805106","75.805888","75.804072","75.786569","75.802927","75.787666","75.805646","75.805532","75.792826","75.797392","75.807168","75.831343","75.800672","75.877486","75.800446","75.782911","75.865341","75.825225","75.566221","75.752242","75.794935","75.768383","75.82643"];
            //var tag=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

          var is_exibition = $("#exhibition").is(':checked');
          var is_business = $("#business").is(':checked');
          var is_show = $("#show").is(':checked');
          var is_workshop = $("#workshop").is(':checked');
          var is_talk = $("#talk").is(':checked');
          var is_concert = $("#concert").is(':checked');
          var is_seminar = $("#seminar").is(':checked');
          var is_tournament = $("#tournament").is(':checked');
          var is_expedition = $("#expedition").is(':checked');
          var is_marathon = $("#marathon").is(':checked');
          var is_camp = $("#camp").is(':checked');

            var str='' ;
            for(var i = 0 ; i < id.length ; i++){

                if(!is_exibition){
                  if(type[i]=="Exhibition"){
                    continue;
                  }
                }
                if(!is_business){
                  if(type[i]=="Business"){
                    continue;
                  }
                }
                if(!is_show){
                  if(type[i]=="Show"){
                    continue;
                  }
                }
                if(!is_workshop){
                  if(type[i]=="Workshop"){
                    continue;
                  }
                }
                if(!is_talk){
                  if(type[i]=="Talk"){
                    continue;
                  }
                }
                if(!is_concert){
                  if(type[i]=="Concert"){
                    continue;
                  }
                }
                if(!is_seminar){
                  if(type[i]=="Seminar"){
                    continue;
                  }
                }
                if(!is_tournament){
                  if(type[i]=="Tournament"){
                    continue;
                  }
                }
                if(!is_expedition){
                  if(type[i]=="Expedition"){
                    continue;
                  }
                }
                if(!is_marathon){
                  if(type[i]=="Marathon"){
                    continue;
                  }
                }
                if(!is_camp){
                  if(type[i]=="Camp"){
                    continue;
                  }
                }

                str += '<div id="hide_area" class="col-lg-12 col-md-12"><div class="about_area"><div class="heading"><h2 id="search_item" class="wow fadeInLeft"><br><br>';
                str += title[i] ;
                str += '</h2></div><div class="about_content"><div class="row"><div class="col-lg-6 col-md-6 col-sm-12"><div class="about_featured"><div class="panel-group" id="accordion"><div class="row"><div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading"><h4 class="panel-title">Venue</h4></div><div class="panel-body">' ;
                str += venue[i];
                str +=  '</div></div></div><div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading"><h4 class="panel-title"> Type </h4></div><div class="panel-body">';
                str += type[i];
                /*
                if(vote[i]!=0){
                    str +=  vote[i] ;
                    str += ' </div>';
                    str+='<div class="panel-body">';
                    str+='<span style="display: block; width: 160px; height: 16px; background: url(img/stars10.png) 0 0;">';
                    str +='<span style="display: block; width: ';
                    str+=display;
                    str += '; height: 16px; background: url(img/stars10.png) 0 -16px;"></span></span>';
                    str+='</div>';
                }
                else
                {
                    str += 'Not Rated yet';
                    str += ' </div>';
                }*/
                str+='</div></div></div></div>';

                str+='<div class="row"><div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading">';
                str+='<h4 class="panel-title">Event Date</h4></div><div class="panel-body">';
                str+= event_date[i];
                str+='</div></div></div>';
                /*var add='';
                for(var z=0;z<results[i].genre_ids.length&&z<5;++z){
                    var temp=results[i].genre_ids[z];
                    var found=find(temp);
                    add+='<span class="label label-warning">';
                    add+=found;
                    add+='</span>';
                }*/
                str+='<div class="col-lg-6 col-md-6 col-sm-12"><div class="panel panel-default wow fadeInLeft"><div class="panel-heading">';
                str+='<h4 class="panel-title">Event Time</h4></div><div class="panel-body">';
                str+= event_time[i];
                str+='</div></div></div>';
                str+='</div>';


                //str+='<div class="panel panel-default wow fadeInLeft"><div class="panel-heading"><h4 class="panel-title"> Release Date </h4></div><div class="panel-body">';
                //str +=  event_date[i];
                //str +=   '</div></div>';
                str+='<div class="panel panel-default wow fadeInLeft"><button id=';
                str+= id[i];
                str+=' type="button" class="btn btn-primary btn-block" onclick="execute_event(this.id)"style="margin-top:40px;">Details</button></div>';
                str += '</div></div></div><div class="col-lg-6 col-md-6 col-sm-12"><div class="about_slider"><div class="featured_slider"><div style="padding-left:15px; " class="single_iteam"><img src="';
                str += poster_path[i];
                str += '" width="400" height="400" alt="img">';
                str += '</div></div></div></div></div></div></div></div> ';

            }
            var divid = document.getElementById('products');
            divid.innerHTML = '';
            divid.innerHTML += str;
}
