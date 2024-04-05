const buttons=document.querySelectorAll('.button')
const body = document.querySelector("body")
const h1= document.querySelector('h1')
const h3= document.querySelector('h3')
buttons.forEach(function(button){
    button.addEventListener( 'click', function(event){
        if(event.target.id === 'white')
        {
            body.style.background= event.target.id;
            h1.style.color='black';
            h3.style.color='black';
        }
        if(event.target.id === 'black')
        {
            body.style.background= event.target.id;
            h1.style.color='#fff';
            h3.style.color='#fff';
        }
        if(event.target.id === 'blue')
        {
            body.style.background= event.target.id;
            h1.style.color='black';
            h3.style.color='black';
        }
        if(event.target.id === 'purple')
        {
            body.style.background= event.target.id;
            h1.style.color='black';
            h3.style.color='black';
        }
        if(event.target.id === 'yellow')
        {
            body.style.background= event.target.id;
            h1.style.color='black';
            h3.style.color='black';
        }
        if(event.target.id === 'pink')
        {
            body.style.background= event.target.id;
            h1.style.color='black';
            h3.style.color='black';
        }
        if(event.target.id === 'orange')
        {
            body.style.background= event.target.id;
            h1.style.color='black';
            h3.style.color='black';
        }
        if(event.target.id === 'red')
        {
            body.style.background= event.target.id;
            h1.style.color='black';
            h3.style.color='black';
        }
        if(event.target.id === 'green')
        {
            body.style.background= event.target.id;
            h1.style.color='black';
            h3.style.color='black';
        }
        if(event.target.id === 'brown')
        {
            body.style.background= event.target.id;
            h1.style.color='black';
            h3.style.color='black';
        }
        if(event.target.id === 'gray')
        {
            body.style.background= event.target.id;
            h1.style.color='black';
            h3.style.color='black';
        }
        if(event.target.id === 'skyblue')
        {
            body.style.background= event.target.id;
            h1.style.color='black';
            h3.style.color='black';
        }
    })
})