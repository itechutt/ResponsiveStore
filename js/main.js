var data =
[
    {  
        img : 'images/products/2001_001.png',
        brand : 'The North Face Trailblazer 2018 Green',
        description : 'SKU 420',
        cost : '$9,999.99',
        rating : 1
    },
    {  
        img : 'images/products/2002_001.png',
        brand : 'The North Face Trailblazer 2018 Black',
        description : 'SKU 42069',
        cost : '$9,999.99',
        rating : 5
    },
    {  
        img : 'images/products/2003_001.png',
        brand : 'The North Face Trailblazer 2018 B&G',
        description : 'SKU 69',
        cost : '$9,999.99',
        rating : 4
    },
    {  
        img : 'images/products/2004_001.png',
        brand : 'The North Face Trailblazer 2018 Gray',
        description : 'SKU 123369',
        cost : '$9,999.99',
        rating : 2
    },
    {  
        img : 'images/products/2005_001.png',
        brand : 'The North Face Trailblazer 2018 Green',
        description : 'SKU 42041269',
        cost : '$9,999.99',
        rating : 3
    },
]
function init(){
    console.log('loading page...');
    create();
}
function create(){
    for(var i = 0; i < data.length; i++){
        var article = document.createElement('div');
        article.className = 'article';
        var articleimg = document.createElement('img');
        articleimg.setAttribute('class','articleimg');
        articleimg.src = data[i].img;
        article.appendChild(articleimg);
        var articledata = document.createElement('div');
        articledata.setAttribute('class','articledata');
        var Brand = document.createElement('div');
        Brand.setAttribute('class','Brand');
        Brand.innerHTML = data[i].brand;
        var Description = document.createElement('div');
        Description.setAttribute('class','Description');
        Description.innerHTML = data[i].description;
        articledata.appendChild(Brand);
        articledata.appendChild(Description);
        var articleaction = document.createElement('div');
        articleaction.setAttribute('class','articleaction');
        var Rating = document.createElement('div');
        Rating.setAttribute('class','Rating');
            for(var y = 1; y < 6; y++){
                var star = document.createElement('img');
                if(data[i].rating >= y){
                    star.src = 'images/star_gold.png';
                    Rating.appendChild(star);
                }else{
                    star.src = 'images/star_gray.png';
                    Rating.appendChild(star);
                }
            }      
        articledata.appendChild(Rating);
        article.appendChild(articledata);
        var Cost = document.createElement('div');
        Cost.setAttribute('class','Cost');
        Cost.innerHTML = data[i].cost;
        var Add = document.createElement('button');
        Add.setAttribute('class','Add');
        Add.innerHTML = 'Add To Cart';
        
        articleaction.appendChild(Cost);
        articleaction.appendChild(Add);
        article.appendChild(articleaction);
        document.getElementById('cuerpito').appendChild(article);
    }
}