// a function can refer to and call itself

// let x = 0 ;
// while(x<10){
//     // do stuff
//     x++;
// }

// convert into a recursive function 
function loop(x) {
    if(x>=10){
        return ;
    }

    console.log(x);
    loop(x + 1); 
} 

loop(0);
// example , getting all the nodes of tree structure (such as DOM) 
// is easier via recursion 

function walkTree(node){
     if(node === null){
        return ;
     }

     // do something with the node 
     for (const child of node.childNodes){
        walkTree(child)
     }
}

//It is possible to convert any recursive algorithm to a non-recursive one, but the logic is
// often clearer when expressed recursively. However, recursion can lead to stack overflow errors
function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  foo(i - 1);
  console.log(`end: ${i}`);
}
foo(3);

