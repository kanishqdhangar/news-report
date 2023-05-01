let p="https://inshorts.deta.dev/news?category=";
let q="https://inshorts.deta.dev/news?category=";
myfunction();
document.getElementById("resetbutton").addEventListener('click', (e)=>{
    location.reload();
})
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == 'sports'){
            p= p + e.target.innerHTML;
            myfunction();
            p=q;
            console.log(p);
            document.getElementById("row").innerHTML="";
        }
        else if(e.target.innerHTML == 'business'){
            p= p + e.target.innerHTML;
            myfunction();
            p=q;
            console.log(p);
            document.getElementById("row").innerHTML="";
        }
        else if(e.target.innerHTML == 'world'){
            p= p + e.target.innerHTML;
            myfunction();
            p=q;
            console.log(p);
            document.getElementById("row").innerHTML="";
        }
        else if(e.target.innerHTML == 'politics'){
            p= p + e.target.innerHTML;
            myfunction();
            p=q;
            console.log(p);
            document.getElementById("row").innerHTML="";
        }
        else if(e.target.innerHTML == 'technology'){
            p= p + e.target.innerHTML;
            myfunction();
            p=q;
            console.log(p);
            document.getElementById("row").innerHTML="";
        }
        else if(e.target.innerHTML == 'entertainment'){
            p= p + e.target.innerHTML;
            myfunction();
            p=q;
            console.log(p);
            document.getElementById("row").innerHTML="";
        }
    })
})
function myfunction(){
    fetch(p)
        .then(value => {
            return value.json();
        })
        .then(content => {
            console.log(content);
            displaydata(content);
        })

}    
function displaydata(content){
        const type  =content.category;
        const capitalized = type.toUpperCase();
        const newsdiv = document.getElementById("row");
        const article =  document.createElement("h1");
        article.innerHTML = capitalized;
        newsdiv.appendChild(article);
        for(let i = 0; i< 8; i++){
            const news = content.data[i];

            
                //heading
                
                const articlename = news.title;
                const heading = document.createElement("h2");
                heading.innerHTML = articlename;
                newsdiv.appendChild(heading);
                //content
                const contents = news.content;
                const para = document.createElement("p");
                para.innerHTML = contents;
                newsdiv.appendChild(para);
                //author
                const author = news.author;
                const name = document.createElement("h5");
                name.innerHTML = author;
                newsdiv.appendChild(name);
                //readmore
                const read = document.createElement("a");
                read.href = news.readMoreUrl;
                newsdiv.appendChild(read);
                read.innerHTML = "Read More";
                //image
                const img = document.createElement("img");
                img.src = news.imageUrl;
                newsdiv.appendChild(img);  
                
            
        }
        
}
                    
        