import names from "./basic-data.js"
import {styles} from "./example-3.js"
//Global 스타일

//root 요소 스타일 적용
let div =document.getElementById('root')
document.body.appendChild(div);
Object.entries(styles.root).forEach(([property, value])=>{
  div.style[property]=value;
});
Object.entries(styles["*"]).forEach(([property,value])=>{
  div.style[property] = value;
});
//root자식요소 div 요소 스타일 적용.
for(let i=0; i<names.length; i++){
  const child =document.createElement('div');
  child.innerHTML=names[i];
  const childStyles = styles.root.children;
  Object.entries(childStyles).forEach(([property,value])=>{
    child.style[property]=value;
  });
  Object.entries(styles["*"]).forEach(([property,value])=>{
    child.style[property] = value;
  });
  div.appendChild(child);
}

//미디어 쿼리 스타일 적용 부분
let mediaQuery = (a)=>{
  if(a <= 600){
    const mqStyle=styles.mediaQueries["max-width: 600px"].root;
    Object.entries(mqStyle).forEach(([property,value])=>{
      div.style[property] =value;
    });
    // for(const[a,b]of Object.entries(mqStyle)){
    //   div.style[a] =b;
    // }

    const mqchild=styles.mediaQueries["max-width: 600px"].root.children;
    for(const child of div.children){
      Object.entries(mqchild).forEach(([property,value])=>{
        child.style[property]=value;
      });
    }
  }else if(a >=601 && a <=900){
    const mqStyle=styles.mediaQueries["min-width: 601px and max-width: 900px"].root;
    Object.entries(mqStyle).forEach(([property,value])=>{
      div.style[property]=value;
    });
    const mqchild=styles.mediaQueries["min-width: 601px and max-width: 900px"].root.children;
    for(const child of div.children){
      Object.entries(mqchild).forEach(([property,value])=>{
        child.style[property]=value;
      });
    }
  }else if(a >= 901){
    const mqStyle =styles.root;
    Object.entries(mqStyle).forEach(([property,value])=>{
      div.style[property]=value;
    });
    const mqchild=styles.root.children;
    for(const child of div.children){
      Object.entries(mqchild).forEach(([property,value])=>{
        child.style[property]=value;
      });
    }
    
  }
}
window.addEventListener('resize',()=>{
  mediaQuery(window.innerWidth);
});
// console.log(Object.keys(styles.root.children))
// let a = Object.keys(styles.root.children)
// console.log(a);
// for(let property in styles.root)
//   if(typeof styles[property] != "object")
//   {
//     let a = Object.keys(styles.root.children)
//     for(let i=0; i<a.length;i++){
//       console.log(a);
//   }
// }
// for(let property in styles.root)
//   if(typeof styles.root[property] != "object")
//   {
//     let a = Object.keys(styles.root.children)
//     for(let i=0; i<a.length;i++){
//       (a[i]);
//   }
// }
// for(let property in styles.root)
//   if(typeof styles.root[property] != "object")
//   {
//     let a = Object.keys(styles.root.children)
//     for(let i=0; i<a.length;i++){
//       const b=document.createElement('div');
//       div.appendChild(b);
//       b.style=(styles.root.children[a[i]]);
//     }
    
//   }

    
   
    // let a = Object.entries(styles.root)
    //   a.forEach(a => {
    //     // console.log(element)
    //     // if(element[0] == `children`){
    //     //   console.log(element)
    //     // }
    //     div.style[a[0]] = a[1]
        
    //   });

      // for(let a in styles.root){
      //   if(typeof styles.root[a] !="object"){
      //     let a=Object.keys(styles.root.children)
      //     let b=Object.values(styles.root.children)
          
      //   }
      // }
      
      // console.log(a);
      // for(let i=0; i<a.length; i++){
      // }
      
      // let c = Object.entries(styles.root.children)
      // c.forEach(c => {
      //   // console.log(element)
      //   // if(element[0] == `children`){
      //   //   console.log(element)
      //   // }
      //   div.style[c[0]] = c[1]
        
      // });
      



// const styleElement = document.createElement("style");
//       styleElement.innerHTML = "html, body {margin: 0; padding:0; box-sizing:border-box; overflow-x:hidden;}";
//       document.head.appendChild(styleElement);
//       const box =document.getElementById('root');
//       box.style.display='grid';
//       box.style.gridTemplateColumns='repeat(5,1fr)';
//       box.style.gridTemplateRows='repeat(4,1fr)';
//       box.style.gap='1vw';
//       box.style.width='100vw';
//       box.style.minHeight='100vh';
//       box.style.height='auto';
//       box.style.margin='2vw auto';
//       box.style.gridAutoRows='minmax(150px,auto)';
      
      
//       for(let i=0; i<=19; i++){
//         const view_box=document.createElement('div');
//         view_box.style.display='flex';
//         view_box.style.alignItems='center';
//         view_box.style.justifyContent='center';
//         view_box.style.fontSize='1rem';
//         view_box.style.backgroundColor='#f0f0f0';
//         view_box.style.border='1px solid #ccc';
//         view_box.style.padding='1vw';
//         box.appendChild(view_box);
//       }
//       console.log(names)
//       document.body.appendChild(box);
// const div =document.getElementById('root');
// document.body.appendChild(div);
// let a=Object.keys()
// for(let i=0; i<)




