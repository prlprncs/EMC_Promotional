const two = document.querySelectorAll("colum");

const nxt=document.querySelectorAll("next");
const prev=document.querySelectorAll("previous"); 	

two.forEach((item, i) => {
	let rowDim = nxt.getBoundingCLientRect();
	let rowWidth = rowDim.width;

	nxt[i].addEventListener('click', () =>{
		item.scrollLeft += rowDim;
	})

	prev[i].addEventListener('click', ()=>{
		item.scrollLeft += rowWidth;
	})
})

