//how exactly customREnder will work

function customRender(reactElement, container){
      const domElement= document.createElement(reactElement.type)
      domElement.innerHTML= reactElement.children
      /*domElement.setAttribute('href', reactElement.props.href)
      domElement.setAttribute('target' , reactElement.props.target)
    */ //this code is okay but what if we need to and more attributes then doing dynamically for all attributes is not possible

    for (const props in reactElement.props) {
        if(props == 'achildren') continue ;
        domElement.setAttribute(props, reactElement.props[prop])
    }

      container.appendChild(domElement)
}



//these below are the things that react sees when we say to render any perticular componant like in our case its 'a'
//these are teminologies to understand
const reactElement = {
    type : 'a',
    //object
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : ' Click me to visit google'
} ///convert code to the=u=is syntex is done by bundler (its called parsing --> converting into tree)


//root grabing for concurrent rendering-enables react to perform work in the background without blocking the user interface
const mainContainer = document.querySelector('#root')

//now to add this reactElement in root we need to shift it and for that we will do 
customRender(reactElement, mainContainer)

